import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import AlbumReviewService from "../../Services/album-review.service";
import "./AddAlbum.css";

function AddAlbum({ refreshList }) {
  const addAlbum = () => {
    const albumName = document.getElementById("album-name-input").value;
    const albumArtist = document.getElementById("album-artist-input").value;
    const albumReview = document.getElementById("album-review-input").value;

    // TODO dispaly error message regarding required fields
    if (albumName && albumArtist && albumReview) {
      AlbumReviewService.addAlbum(albumName, albumArtist, albumReview);
      refreshList();
      clearInputFields();
    }
  };

  const clearInputFields = () => {
    document.getElementById("album-name-input").value = "";
    document.getElementById("album-review-input").value = "";
    document.getElementById("album-artist-input").value = "";
  };

  return (
    <div className="add-album-container">
      <label htmlFor="album-name">Album Name</label>
      <input id="album-name-input" name="album-name"></input>
      <label htmlFor="album-artist">Album Artist</label>
      <input id="album-artist-input" name="album-artist"></input>
      <label htmlFor="album-review">Album Review</label>
      <textarea id="album-review-input" name="album-review"></textarea>
      <button onClick={addAlbum}>Add album</button>
    </div>
  );
}

export default AddAlbum;
