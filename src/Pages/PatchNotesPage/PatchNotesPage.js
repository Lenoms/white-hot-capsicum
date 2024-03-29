import React from "react";
import { Link } from "react-router-dom";
import "./PatchNotesPage.css";

function PatchNotesPage() {
  return (
    <div className="patch-notes-page-container">
      <div className="patch-notes">
        <p className="patch-note">- added patch notes</p>
        <p className="patch-note">- put a sick purple border around them</p>
        <div className="patch-notes-break"></div>
        <p className="patch-note">- added artists page</p>
        <div className="patch-notes-break"></div>
        <p className="patch-note">- added comments section.</p>
        <p className="patch-note">- fixed sizing</p>
      </div>
      <Link className="app-link" to="/white-hot-capsicum/">
        click to Go home
      </Link>
    </div>
  );
}

export default PatchNotesPage;
