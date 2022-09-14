import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import AlbumsPage from "../Pages/AlbumsPage/AlbumsPage";
import ArtistsPage from "../Pages/ArtistsPage/ArtistsPage";
import AlbumInfoPage from "../Pages/AlbumInfoPage/AlbumInfoPage";
import PatchNotesPage from "../Pages/PatchNotesPage/PatchNotesPage";
import RecentlyAddedPage from "../Pages/RecentlyAddedPage/RecentlyAddedPage";

function AppRoutes() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/white-hot-capsicum/" element={<HomePage />} />
      <Route
        path="/white-hot-capsicum/patch-notes"
        element={<PatchNotesPage />}
      />
      <Route
        path="/white-hot-capsicum/albums"
        element={<AlbumsPage location={location} />}
      />
      <Route path="/white-hot-capsicum/artists" element={<ArtistsPage />} />
      <Route
        path="/white-hot-capsicum/album-info"
        element={<AlbumInfoPage location={location} />}
      />
      <Route
        path="/white-hot-capsicum/recently-added"
        element={<RecentlyAddedPage />}
      />
    </Routes>
  );
}

export default AppRoutes;
