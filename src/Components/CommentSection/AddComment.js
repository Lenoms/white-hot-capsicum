import React from "react";
import AlbumReviewService from "../../Services/album-review.service";

function AddComment({ albumName, refreshList }) {
  const postComment = () => {
    let comment = document.getElementById("add-comment-input").value;
    AlbumReviewService.addComment(albumName, comment);
    document.getElementById("add-comment-input").value = "";
    refreshList();
  };
  return (
    <div
      className="add-comment-container"
      style={{ width: "100%", height: "10%", display: "flex" }}
    >
      <input
        id="add-comment-input"
        placeholder="Leave a comment..."
        autoComplete="off"
      ></input>
      <button onClick={postComment} style={{ width: "20%", height: "100%" }}>
        Post
      </button>
    </div>
  );
}

export default AddComment;
