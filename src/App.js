import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AlbumsPage from "./Pages/AlbumsPage/AlbumsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/white-hot-capsicum/" element={<HomePage />} />
        <Route path="/white-hot-capsicum/albums" element={<AlbumsPage />} />
      </Routes>
    </div>
  );
}

export default App;
