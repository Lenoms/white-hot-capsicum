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
      <h1>Home</h1>
      <Link to="/white-hot-capsicum/albums">albums</Link>
      <Link to="/white-hot-capsicum/artists">artists</Link>
      <AuthButton />
    </div>
  );
}

export default HomePage;
