import React from "react";
import "./CommentSection.css";

function Comment({ comment }) {
  return (
    <div className="comment-container">
      <div className="comment-box">
        <p>{comment.comment}</p>
      </div>
      <div className="comment-user-time-container">
        <p>User, {comment.dateTime}</p>
      </div>
    </div>
  );
}

export default Comment;
