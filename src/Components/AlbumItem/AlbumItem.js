import React from "react";
import "./AlbumItem.css";

function AlbumItem({ album }) {
  return (
    <div className="album-item-container">
      <div className="album-image-container">
        <img src={process.env.PUBLIC_URL + "/placeholder.png"} />
      </div>
      <div className="album-information">
        {album.albumName}, {album.albumArtist}
      </div>
    </div>
  );
}

export default AlbumItem;
