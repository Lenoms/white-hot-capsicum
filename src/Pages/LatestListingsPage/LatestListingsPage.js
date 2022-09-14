import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumReviewService from "../../Services/album-review.service";
import AlbumItem from "../../Components/AlbumItem/AlbumItem";
import Pagination from "../../Components/Pagination/Pagination";
import "./LatestListingsPage.css";

function LatestListingsPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [albumPointer, setAlbumPointer] = useState(0);
  // Milliseconds in a week
  const ONE_WEEK = 604800000;

  let albumDisplaySize;
  if (window.innerWidth > 600) {
    albumDisplaySize = 6;
  } else {
    albumDisplaySize = 3;
  }

  useEffect(() => {
    AlbumReviewService.getAlbums().then((data) => {
      setAlbums(
        Object.values(data).filter((album) => {
          return getRecent(Date.parse(album.dateCreated));
        })
      );
      setLoading(false);
    });
  });

  const getRecent = (dateCreated) => {
    let now = new Date();
    // If more than a week ago
    if (now.getTime() - dateCreated > ONE_WEEK) {
      return false;
    }
    return true;
  };

  if (loading) {
    return <div className="albums-page-container">loading...</div>;
  } else {
    return (
      <div className="albums-page-container">
        <h1>Latest listings</h1>
        {albums.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="albums-container">
              {albums
                .slice(albumPointer, albumPointer + albumDisplaySize)
                .map(function (album) {
                  return <AlbumItem album={album} key={album.albumName} />;
                })}
            </div>

            <Pagination
              albumPointer={albumPointer}
              setAlbumPointer={setAlbumPointer}
              albumsLength={albums.length}
              albumDisplaySize={albumDisplaySize}
            />
          </div>
        )}
        {albums.length == 0 && (
          <div className="albums-container">
            No recent albums to show, Jack has been lazy af{" "}
          </div>
        )}

        <Link className="app-link" to="/white-hot-capsicum/">
          click to Go home
        </Link>
      </div>
    );
  }
}

export default LatestListingsPage;
