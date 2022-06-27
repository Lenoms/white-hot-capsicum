import React from "react";
import { Link } from "react-router-dom";

function AlbumsPage() {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        <li>Album 1</li>
        <li>Album 2</li>
        <li>Album 3</li>
        <li>Album 4</li>
        <li>Album 5</li>
      </ul>
      <Link to="/">Click to go home</Link>
    </div>
  );
}

export default AlbumsPage;
