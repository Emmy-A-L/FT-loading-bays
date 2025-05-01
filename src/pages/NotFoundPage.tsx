import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5 pt-16 md:pt-18 bg-gray-800 text-white">
      <h1 className="text-9xl text-center text-white z-10">Oops! </h1>
      <p className="text-center text-gray-400 z-10">
        You seem to have found our hidden page (that doesn't exist).
      </p>
      <p className="flex flex-col justify-center items-center gap-1 text-gray-400 font-bold text-md">
        {" "}
        <span>
          Check out the location of our churches and loading bays around you.
        </span>
        <Link
          to="/search-locations"
          className="text-red-400 hover:underline z-10"
        >
          Search Locations
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
