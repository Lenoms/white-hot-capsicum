import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AlbumsPage from "./Pages/AlbumsPage/AlbumsPage";
import ArtistsPage from "./Pages/ArtistsPage/ArtistsPage";
import AlbumInfoPage from "./Pages/AlbumInfoPage/AlbumInfoPage";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/white-hot-capsicum/" element={<HomePage />} />
        <Route path="/white-hot-capsicum/albums" element={<AlbumsPage />} />
        <Route path="/white-hot-capsicum/artists" element={<ArtistsPage />} />
        <Route
          path="/white-hot-capsicum/album-info"
          element={<AlbumInfoPage location={location} />}
        />
      </Routes>
    </div>
  );
}

export default App;
