import React from "react";
import "./AlbumItem.css";
import { useNavigate } from "react-router-dom";

function AlbumItem({ album }) {
  const navigate = useNavigate();
  const albumClicked = () => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    navigate("/white-hot-capsicum/album-info", {
      state: { albumItem: album },
    });
  };

  return (
    <div className="album-item-container" onClick={albumClicked}>
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
