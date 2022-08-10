import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistItem.css";

function ArtistItem({ artistName }) {
  const navigate = useNavigate();

  const artistClicked = () => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    navigate("/white-hot-capsicum/albums", {
      state: { artistName: artistName },
    });
  };

  return (
    <div className="artist-item-container" onClick={artistClicked}>
      <h4 className="artist-item-name">{artistName}</h4>
    </div>
  );
}

export default ArtistItem;
