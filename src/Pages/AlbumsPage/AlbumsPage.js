import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AddAlbum from "../../Components/AddAlbum/AddAlbum";
import AlbumReviewService from "../../Services/album-review.service";
import "./AlbumsPage.css";
import getRole from "../../Services/auth-service";
import AlbumItem from "../../Components/AlbumItem/AlbumItem";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth0();
  const [albumPointer, setAlbumPointer] = useState(0);
  const role = getRole(user);
  /* Retrieve list of album reviews from database */

  let albumDisplaySize;
  if (window.innerWidth > 600) {
    albumDisplaySize = 6;
  } else {
    albumDisplaySize = 3;
  }

  useEffect(() => {
    AlbumReviewService.getAlbums().then((data) => {
      setAlbums(Object.values(data));
      setLoading(false);
    });
  }, []);

  const refreshList = () => {
    AlbumReviewService.getAlbums().then((data) => {
      setAlbums(Object.values(data));
    });
  };

  const incrementAlbums = () => {
    if (!(albumPointer + albumDisplaySize > albums.length)) {
      setAlbumPointer(albumPointer + albumDisplaySize);
    }
  };

  const decrementAlbums = () => {
    if (!(albumPointer - albumDisplaySize < 0)) {
      setAlbumPointer(albumPointer - albumDisplaySize);
    }
  };

  if (loading) {
    return <div className="albums-page-container">loading...</div>;
  } else {
    return (
      <div className="albums-page-container">
        <h1>Albums</h1>
        <div className="albums-container">
          {albums
            .slice(albumPointer, albumPointer + albumDisplaySize)
            .map(function (album) {
              return <AlbumItem album={album} />;
            })}
        </div>

        <div className="pagination-bar">
          <div className="pagination-button" onClick={decrementAlbums}>
            &lt;
          </div>
          <div className="pagination-button" onClick={incrementAlbums}>
            &gt;
          </div>
        </div>

        {isAuthenticated && role === "Editor" ? (
          <AddAlbum refreshList={refreshList} />
        ) : null}

        <Link className="app-link" to="/white-hot-capsicum/">
          click to Go home
        </Link>
      </div>
    );
  }
}

export default AlbumsPage;
