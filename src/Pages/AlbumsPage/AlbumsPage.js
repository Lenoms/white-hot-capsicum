import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../Components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Components/LogoutButton";

function AlbumsPage() {
  const { isAuthenticated } = useAuth0();
  const AuthButton = isAuthenticated ? LogoutButton : LoginButton;
  return (
    <div>
      <AuthButton />
      <h1>Albums</h1>
      <ul>
        <li>Album 1</li>
        <li>Album 2</li>
        <li>Album 3</li>
        <li>Album 4</li>
        <li>Album 5</li>
      </ul>
      <Link to="/white-hot-capsicum/">Click to go home</Link>
    </div>
  );
}

export default AlbumsPage;
