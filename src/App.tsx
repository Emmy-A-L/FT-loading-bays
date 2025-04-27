import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="relative bg-gray-800 h-screen text-white">
      <img
        src="/living faith church worldwide.png"
        alt="Living Faith Church World Wide Logo"
        className="opacity-10 fixed center"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-locations" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
