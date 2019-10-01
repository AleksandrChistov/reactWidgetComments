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
          {
            this.state.comments.map((date, i) => {
              return (
                <div key={i}>
                  <p><strong>Comment:</strong> {date.comment}</p>
                  <p><strong>Name:</strong> {date.name}</p>
                  <p><strong>Date:</strong> {date.date}</p>
                </div>
              )
            })
          }
      </div>
    );
  }
}

ReactDOM.render(<WidgetComments/>, document.querySelector('#app'));