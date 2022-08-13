import React, { useEffect, useState } from "react";
import AlbumReviewService from "../../Services/album-review.service";
import AddComment from "./AddComment";
import Comment from "./Comment";
import "./CommentSection.css";

function CommentSection({ albumName }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AlbumReviewService.getComments(albumName).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, []);

  const refreshList = () => {
    AlbumReviewService.getComments(albumName).then((data) => {
      setComments(data);
    });
  };

  return (
    <div className="comment-section-container">
      <AddComment albumName={albumName} refreshList={refreshList} />
      <div className="comments-box">
        {!loading &&
          comments.map(function (comment) {
            return <Comment key={comment.dateTime} comment={comment} />;
          })}
      </div>
    </div>
  );
}

export default CommentSection;
