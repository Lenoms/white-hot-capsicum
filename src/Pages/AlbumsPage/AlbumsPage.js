import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../Components/LoginButton";

function AlbumsPage() {
  return (
    <div>
      <LoginButton />
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
