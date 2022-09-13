import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AddAlbum from "../../Components/AddAlbum/AddAlbum";
import AlbumReviewService from "../../Services/album-review.service";
import "./AlbumsPage.css";
import getRole from "../../Services/auth-service";
import AlbumItem from "../../Components/AlbumItem/AlbumItem";
import Pagination from "../../Components/Pagination/Pagination";

function AlbumsPage({ location }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth0();
  const role = getRole(user);
  const [artistFilter, setArtistFilter] = useState();
  const [albumPointer, setAlbumPointer] = useState(0);
  const didMount = useRef(false);

  let albumDisplaySize;
  if (window.innerWidth > 600) {
    albumDisplaySize = 6;
  } else {
    albumDisplaySize = 3;
  }

  useEffect(() => {
    if (location.state) {
      setArtistFilter(location.state.artistName);
    } else {
      setArtistFilter("");
    }
  }, []);

  /* Retrieve list of album reviews from database */
  useEffect(() => {
    // This is to force the album fetch to wait until artistFilter has been set.
    if (!didMount.current) {
      didMount.current = true;
      return;
    } else {
      AlbumReviewService.getAlbums().then((data) => {
        setAlbums(
          Object.values(data).filter((album) => {
            return filterAlbumByArtist(album.albumArtist);
          })
        );
        setLoading(false);
      });
    }
  }, [artistFilter]);

  const filterAlbumByArtist = (artistName) => {
    if (artistFilter == "") {
      return true;
    }
    return artistFilter == artistName;
  };

  const refreshList = () => {
    AlbumReviewService.getAlbums().then((data) => {
      setAlbums(Object.values(data));
    });
  };

  if (loading) {
    return <div className="albums-page-container">loading...</div>;
  } else {
    return (
      <div className="albums-page-container">
        {artistFilter == "" ? (
          <h1>Albums</h1>
        ) : (
          <h1>Albums by {artistFilter}</h1>
        )}
        <div className="albums-container">
          {albums
            .slice(albumPointer, albumPointer + albumDisplaySize)
            .map(function (album) {
              return <AlbumItem album={album} />;
            })}
        </div>

        <Pagination
          albumPointer={albumPointer}
          setAlbumPointer={setAlbumPointer}
          albumsLength={albums.length}
          albumDisplaySize={albumDisplaySize}
        />

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
