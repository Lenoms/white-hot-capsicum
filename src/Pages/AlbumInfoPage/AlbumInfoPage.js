import React from "react";
import { Link } from "react-router-dom";
import "./AlbumInfoPage.css";

function AlbumInfoPage({ location }) {
  if (!!location.state) {
    let album = location.state.albumItem;

    return (
      <div className="album-info-container">
        <h1>
          {album.albumName} by {album.albumArtist}
        </h1>
        <div className="album-review-box">
          <p>{album.albumReview}</p>
        </div>
        <Link to="/white-hot-capsicum/albums">back</Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default AlbumInfoPage;
