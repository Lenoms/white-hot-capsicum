import React from "react";
import "./Pagination.css";

function Pagination({
  albumPointer,
  setAlbumPointer,
  albumsLength,
  albumDisplaySize,
}) {
  const incrementAlbums = () => {
    if (!(albumPointer + albumDisplaySize >= albumsLength)) {
      setAlbumPointer(albumPointer + albumDisplaySize);
    }
  };

  const decrementAlbums = () => {
    if (!(albumPointer - albumDisplaySize < 0)) {
      setAlbumPointer(albumPointer - albumDisplaySize);
    }
  };
  return (
    <div className="pagination-bar">
      <div className="pagination-button" onClick={decrementAlbums}>
        &lt;
      </div>
      <div className="pagination-button" onClick={incrementAlbums}>
        &gt;
      </div>
    </div>
  );
}

export default Pagination;
