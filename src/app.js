import React from "react";
import WidgetComments from "./widget-comments/comments.js";

let arrComments = JSON.parse(localStorage.getItem('comments'));
// React-компонтент (функциональный)
export default () => (
    <div className="comments-area">
      <WidgetComments arrComments={arrComments}/>
    </div>
  )