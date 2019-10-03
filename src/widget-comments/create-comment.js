import React from 'react';

// Компонент выводит комментарии на страницы
export default props => (
      <div className="comments">
        <h2>Комментариев: {props.qtСomments}</h2>
        <div className="comments-list">
          {
            props.comments.map((data, i) => {
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
                  <button aria-label="Кнопка удаления комментария" className="delete-comment" 
                  onClick={() => props.onClick(i)}>Удалить комментарий</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )