import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import LoginButton from "../../Components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Components/LogoutButton";

function HomePage() {
  const { isAuthenticated, user } = useAuth0();
  const AuthButton = isAuthenticated ? LogoutButton : LoginButton;
  return (
    <div className="home-page-container">
      <h1>White Hot Capsicum</h1>
      <div className="home-links-container">
        <Link className="app-link" to="/white-hot-capsicum/albums">
          albums
        </Link>
        <Link className="app-link" to="/white-hot-capsicum/artists">
          artists
        </Link>
        <Link className="app-link" to="/white-hot-capsicum/patch-notes">
          patch notes
        </Link>
      </div>
      <AuthButton />
    </div>
  );
}

export default HomePage;
