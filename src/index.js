import React from "react";
import ReactDOM from "react-dom";
import style from "./index.styl";
import img from './img/avatar.jpg';

// React-компонент (class-based)
class WidgetComments extends React.Component {
  // исходное состояние нашего приложения
  state = {
    comments: [
      {name: 'Мария', date: '01.10.2019', comment: 'Первый комментарий Марии.'}
    ],
    valueName: '',
    valueComment: '',
    button: 'submit-disabled'
  }

  // Меняем значение полей Имя или Комментарий, в зависимости от event name
  changeText(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
    // Если поле стало пустым - делаем кнопку неактивной
    if (e.target.value === '') {
      this.setState({button: 'submit-disabled'});
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
      this.setState({button: 'submit'});
    }
  }

  postComment(e) {
    e.preventDefault();
    let name = this.state.valueName;
    let comment = this.state.valueComment;
    let state = this.state.comments;
    if (name.length > 0 && comment.length > 0) {
      state.push({name, date: '01.10.2019', comment});
      this.setState({state, valueName: '', valueComment: '', button: 'submit-disabled'});
    }
  }

  render() {
    return (
      <div className="comments-area">
        <div className="comments">
          <h2>Комментариев: {this.state.comments.length}</h2>
          <div className="comments-list">
            {
              this.state.comments.map((data, i) => {
                return (
                  <div key={i} className="comment-box">
                    <div className="comment-header">
                      <div className="comment-avatar">
                        <img src="img/avatar.jpg" alt={"Аватар-" + (i + 1)} />
                      </div>
                      <div className="comment-meta">
                        <cite className="comment-author" itemProp="creator">{data.name}</cite>
                        <time className="comment-time" itemProp="datePublished" 
                        dateTime={data.date}>{data.date}</time>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p className="comment-text">{data.comment}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="comment-respond">
          <h2>Добавить комментарий</h2>
          <form  onSubmit={this.postComment.bind(this)} action="#" method="post" className="comment-form">
            <p className="comment-form-author">
              <label htmlFor="author">
                <input type="text" name="valueName" id="author" placeholder="Ваше имя" 
                value={this.state.valueName}
                onChange={this.changeText.bind(this)} required="required"/>
              </label>
            </p>
            <p className="comment-form-comment">
              <label htmlFor="comment">
                <textarea name="valueComment" id="comment" cols="45" rows="8" 
                placeholder="Комментарий..." required="required"
                value={this.state.valueComment}
                onChange={this.changeText.bind(this)}></textarea>
              </label>
            </p>
            <input type="submit" name="submit" id="submit" 
            className={this.state.button} value="Отправить комментарий"/>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<WidgetComments/>, document.querySelector('#app'));