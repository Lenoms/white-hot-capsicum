import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../Components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Components/LogoutButton";
import AddAlbum from "../../Components/AddAlbum/AddAlbum";
import AlbumReviewService from "../../Services/album-review.service";
import "./AlbumsPage.css";
import getRole from "../../Services/auth-service";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth0();
  const AuthButton = isAuthenticated ? LogoutButton : LoginButton;
  const role = getRole(user);
  /* Retrieve list of album reviews from database */

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

  if (loading) {
    return <h1>Loading!</h1>;
  } else {
    return (
      <div className="albums-page-container">
        <AuthButton />
        <h1>Albums</h1>
        {/* Just mapping albums to display them all atm, they'll probs get laid out better later on */}
        {albums.map(function (album) {
          return (
            <div key={album.albumName}>
              {album.albumName}, {album.albumReview}
            </div>
          );
        })}
        <Link to="/white-hot-capsicum/">Click to go home</Link>

        {isAuthenticated && role === "Editor" ? (
          <AddAlbum refreshList={refreshList} />
        ) : null}
      </div>
    );
  }
}

export default AlbumsPage;
