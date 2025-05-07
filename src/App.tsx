import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./pages/Services";
import MidweekLocations from "./pages/MidweekLocations";
import Loader from "./components/Loader";
import NotFoundPage from "./pages/NotFoundPage";
import ChopLocations from "./pages/ChopLocations";
import CommunityChurches from "./pages/CommunityChurches";
import Freetransport from "./pages/Freetransport";
import BrtLoadingBays from "./pages/BrtLoadingBays";
import AreaPage from "./pages/AreaPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-800 text-white">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/75 z-50">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
      <img
        src="/living faith church worldwide.png"
        alt="Living Faith Church World Wide Logo"
        className="opacity-10 absolute center lg:w-2/5"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-locations" element={<Services />} />
        <Route
          path="/search-locations/midweek-service-locations"
          element={<MidweekLocations />}
        />
        <Route
          path="/search-locations/covenant-hour-of-prayer-locations"
          element={<ChopLocations />}
        />
        <Route
          path="/search-locations/community-church-locations"
          element={<CommunityChurches />}
        />
        <Route
          path="/search-locations/free-transportation-loading-bays"
          element={<Freetransport />}
        />
        <Route
          path="/search-locations/brt-loading-bays"
          element={<BrtLoadingBays />}
        />
        <Route path="/area/:areaName" element={<AreaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
