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
    ]
  }

  render() {
    return (
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
                      <time className="comment-time" itemProp="datePublished" dateTime={data.date}>{data.date}</time>
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
    );
  }
}

ReactDOM.render(<WidgetComments/>, document.querySelector('#app'));