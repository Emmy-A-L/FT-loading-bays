import { Link } from "react-router-dom";
import '../App.css'

const HomePage = () => {
  // const handleClick = () => {
  //   alert(
  //     "Searching for Living Faith Church Loading Bays and Service Locations..."
  //   );
  // };

  return (
    <div className="h-screen w-screen z-10 flex flex-col gap-5 justify-center items-center px-4 md:px-6 lg:px-8">
      
      <h1 className="text-4xl text-center z-10" >
        Search For Living Faith Church Loading Bays And Service Locations.
      </h1>
      <Link
        to="/search-locations"
        
        className="pl-4 pr-4 pt-2 pb-2 z-10 border-red-500 border cursor-pointer hover:bg-red-500 hover:text-white rounded-md transition duration-300 ease-in-out"
      >
        Search Options
      </Link>
    </div>
  );
};

export default HomePage;
