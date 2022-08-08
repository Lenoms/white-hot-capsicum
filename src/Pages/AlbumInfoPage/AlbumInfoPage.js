import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AlbumReviewService from "../../Services/album-review.service";
import getRole from "../../Services/auth-service";
import "./AlbumInfoPage.css";

function AlbumInfoPage({ location }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const role = getRole(user);

  if (!!location.state) {
    let album = location.state.albumItem;

    const deleteAlbum = () => {
      AlbumReviewService.deleteAlbum(album.albumName);
      navigate("/white-hot-capsicum/albums");
    };

    return (
      <div className="album-info-container">
        <h1>
          {album.albumName} by {album.albumArtist}
        </h1>
        <div className="album-review-box">
          <p>{album.albumReview}</p>
        </div>

        {isAuthenticated && role === "Editor" ? (
          <button onClick={deleteAlbum} className="delete-button">
            Delete
          </button>
        ) : null}

        <Link className="app-link" to="/white-hot-capsicum/albums">
          back
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default AlbumInfoPage;
