import { useNavigate } from "react-router-dom";
import { areas } from "../AreaNames";

type LocationType =
  | "chopLocations"
  | "midweekLocations"
  | "communityChurchLocations"
  | "brtLocations"
  | "freeTransportLocations";

interface LocationListProps {
  locationType: LocationType;
  title: string;
}

const LocationList = ({ locationType, title }: LocationListProps) => {
  const navigate = useNavigate();
  const areaNames = areas;

  const handleAreaClick = (area: string) => {
    navigate(`/area/${encodeURIComponent(area)}?type=${locationType}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 md:pt-18">
      <div className="flex flex-col justify-center border border-gray-500 p-8 items-center gap-2 w-9/10 md:w-1/2 lg:w-1/3 h-[550px] backdrop-blur-md rounded-xl text-center mx-4 md:mx-6 lg:mx-8 *:w-full *:px-8 *:py-3 *:rounded-lg *:backdrop-blur-sm *:bg-gray-600/45">
        <div className="border-none mb-4 text-lg bg-gray-500 backdrop-blur-none">
          {title}
        </div>
        <div className="flex flex-col gap-2 w-full py-2 rounded-lg bg-gray-600/45 h-[400px] overflow-y-scroll">
          {areaNames.map((area, index) => (
            <div key={index} className="">
              <button
                onClick={() => handleAreaClick(area.areaName)}
                className="bg-gray-500 hover:bg-gray-700 text-white py-2.5 rounded-md w-full"
              >
                {area.areaName}
              </button>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default LocationList;
