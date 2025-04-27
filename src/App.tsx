import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="relative bg-gray-800 h-screen text-white">
      <img
        src="/living faith church worldwide.png"
        alt="Living Faith Church World Wide Logo"
        className="opacity-10 absolute left-[15%] md:left-[30%] lg:left-[40%] top-[20%] "
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
