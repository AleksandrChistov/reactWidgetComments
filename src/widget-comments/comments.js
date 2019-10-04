import React from "react";
import CreateComment from './create-comment.js';
import commentsStyle from './comment.styl';

// React-компонент (class-based)
export default class WidgetComments extends React.Component {
  // исходное состояние нашего приложения
  state = {
    comments: this.props.arrComments,
    valueName: '',
    valueComment: '',
    btnDisabled: true
  }

  // Меняем значение полей Имя или Комментарий, в зависимости от event name
  changeText = e => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
    // Если поле стало пустым - делаем кнопку неактивной
    if (e.target.value === '') {
      this.setState({btnDisabled: true});
      return null;
    }
    // Запускаем валидатор
    this.validateForm(name);
  }

  // Валидатор полей Имя и Комментарий. Так как мы знаем, что переданное поле
  // не является пустым, мы передаем дальше на проверку значение другого поля
  validateForm(name) {
    if (name === 'valueName') {
      this.buttonActive(this.state.valueComment);
    }
    if (name === 'valueComment') {
      this.buttonActive(this.state.valueName);
    }
  }

  // Если поле не пустое - делаем кнопку активной
  buttonActive(name) {
    if (name !== '') {
      this.setState({btnDisabled: false});
    }
  }

  // Запускается при клике на кнопку
  postComment = e => {
    e.preventDefault();
    let name = this.state.valueName;
    let comment = this.state.valueComment;
    let comments = [...this.state.comments];
    // Проверка: если поля не пустые - добавляем в массив новый коммент
    if (name.length > 0 && comment.length > 0) {
      let d = new Date().toLocaleString();
      // Обновляем state и localStorage
      comments.push({name, date: d, comment});
      this.setState({comments, valueName: '', valueComment: '', btnDisabled: true});
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }

  // При клике на кнопку "Удалить" - удаляем комментарий из state и localStorage
  deleteComment = i => {
    let comments = [...this.state.comments];
    comments.splice(i, 1)
    this.setState({comments});
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  // Рендерим форму отправки комментариев
  render() {
    return (
      <React.Fragment>
        <CreateComment qtСomments={this.state.comments.length} // Компонент - список комментариев
        comments={this.state.comments} onClick={this.deleteComment}/>
        <div className="comment-respond">
          <h2>Добавить комментарий</h2>
          <form  onSubmit={this.postComment} action="#" method="post" className="comment-form">
            <p className="comment-form-author">
              <label htmlFor="author">
                <input type="text" name="valueName" id="author" placeholder="Ваше имя" 
                value={this.state.valueName}
                onChange={this.changeText} required="required"/>
              </label>
            </p>
            <p className="comment-form-comment">
              <label htmlFor="comment">
                <textarea name="valueComment" id="comment" cols="45" rows="8" 
                placeholder="Комментарий..." required="required"
                value={this.state.valueComment}
                onChange={this.changeText}></textarea>
              </label>
            </p>
            <input type="submit" name="submit" id="submit" 
            className='submit' value="Отправить комментарий" disabled={this.state.btnDisabled}/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}