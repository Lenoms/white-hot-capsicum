import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtistItem from "../../Components/ArtistItem/ArtistItem";
import AlbumReviewService from "../../Services/album-review.service";
import "./ArtistsPage.css";

function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AlbumReviewService.getArtists().then((data) => {
      setArtists(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="artists-page-container">Loading...</div>;
  } else {
    return (
      <div className="artists-page-container">
        <h1>Artists</h1>
        <div className="artists-container">
          {artists.map(function (artist) {
            return <ArtistItem key={artist} artistName={artist} />;
          })}
        </div>
        <Link className="app-link" to="/white-hot-capsicum/">
          click to Go home
        </Link>
      </div>
    );
  }
}

export default ArtistsPage;
