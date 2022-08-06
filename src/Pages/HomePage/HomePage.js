import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <h1>Home</h1>
      <Link to="/white-hot-capsicum/albums">albums</Link>
      <Link to="/white-hot-capsicum/artists">artists</Link>
    </div>
  );
}

export default HomePage;
