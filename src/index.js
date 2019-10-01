import React from "react";
import ReactDOM from "react-dom";
import style from "./index.styl";

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
        <ol className="comments-list">
          {
            this.state.comments.map((data, i) => {
              return (
                <li key={i} className="li-comment">
                  <div className="comment-box">
                    <div className="comment-header">
                      <div className="comment-avatar">
                        <img src="" alt={"Аватар-" + (i + 1)} />
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
                </li>
              )
            })
          }
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<WidgetComments/>, document.querySelector('#app'));