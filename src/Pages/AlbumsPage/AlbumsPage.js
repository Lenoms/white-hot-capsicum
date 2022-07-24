import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAlbum from "../../Components/AddAlbum/AddAlbum";
import AlbumReviewService from "../../Services/album-review.service";
import "./AlbumsPage.css";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  {
    /* Retrieve list of album reviews from database */
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

  if (loading) {
    return <h1>Loading!</h1>;
  } else {
    return (
      <div className="albums-page-container">
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

        <AddAlbum refreshList={refreshList} />
      </div>
    );
  }
}

export default AlbumsPage;
