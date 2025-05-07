import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { areas } from "../AreaNames";
import toast from "react-hot-toast";

const AreaPage = () => {
  const { areaName } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const locationType = searchParams.get("type") as
    | "chopLocations"
    | "midweekLocations"
    | "communityChurchLocations"
    | "brtLocations"
    | "freeTransportLocations";

  const selectedArea = areas.find((area) => area.areaName === areaName);
  const locations = selectedArea ? selectedArea[locationType] || [] : [];

  const getTitleByType = () => {
    switch (locationType) {
      case "chopLocations":
        return "Covenant Hour of Prayer";
      case "midweekLocations":
        return "Midweek Service";
      case "brtLocations":
        return "BRT Loading Bay";
      case "communityChurchLocations":
        return "Community Church";
      case "freeTransportLocations":
        return "Free Transport";
      default:
        return "";
    }
  };
  toast(
    `🛑 Google maps might not give an exact location of the address you are looking for!`,
    {
      duration: 10000,
    }
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 md:pt-18">
      <div className="flex flex-col justify-center border border-gray-500 p-8 items-center gap-2 w-9/10 md:w-1/2 lg:w-1/3 max-h-[550px] backdrop-blur-md rounded-xl text-center mx-4 md:mx-6 lg:mx-8">
        <button
          onClick={() => navigate(-1)}
          className="self-start text-white hover:text-gray-300 mb-4"
        >
          ← Back to Areas
        </button>

        <h1 className="text-2xl font-bold mb-4">
          {areaName} {getTitleByType()} Locations
        </h1>

        <div className="w-full overflow-y-auto max-h-[400px] px-4">
          {locations.length > 0 ? (
            <ul className="space-y-4 text-left">
              {locations.map((location, index) => (
                <li key={index} className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="mb-2">{location.location}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View on Google Maps →
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              No locations available for this area.
            </p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default AreaPage;
