import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl">
        Search For Living Faith Church Loading Bays And Service Locations.
      </h1>
      <Link 
      to="/search-options"
      className="pl-4 pr-4 pt-2 pb-2 border-amber-500 border"
      >
        Search Options
      </Link>
    </div>
  );
};

export default HomePage;
