import React from "react";
import WidgetComments from "./widget-comments/comments.js";


// React-компонтент (функциональный)
export default () => {
  let arrComments = JSON.parse(localStorage.getItem('comments'));
  return (
    <div className="comments-area">
      <WidgetComments arrComments={arrComments}/>
    </div>
  )
}