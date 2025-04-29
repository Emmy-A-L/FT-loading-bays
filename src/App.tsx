import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import MidweekLocations from "./pages/MidweekLocations";

const App = () => {
  return (
    <div className="bg-gray-800 h-screen text-white">
      <img
        src="/living faith church worldwide.png"
        alt="Living Faith Church World Wide Logo"
        className="opacity-10 fixed center lg:w-2/5"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-locations" element={<Services />} />
        <Route path="/search-locations/midweek-service-locations" element={<MidweekLocations />} />
      </Routes>
    </div>
  );
};

export default App;
