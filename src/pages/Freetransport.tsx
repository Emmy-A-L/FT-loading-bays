import { useState } from "react";
import AreaNames from "../components/AreaNames";

interface AreaData {
  [area: string]: string[];
}

const areaData: AreaData = {
  "Ige Daramola": [
    "123 Main St, Ige Daramola",
    "456 Side St, Ige Daramola",
    "789 Back St, Ige Daramola",
  ],
  Iyesi: ["123 Elm St, Iyesi", "456 Pine St, Iyesi", "789 Maple St, Iyesi"],
  Obasanjo: [
    "123 Oak St, Obasanjo",
    "456 Cedar St, Obasanjo",
    "789 Birch St, Obasanjo",
  ],
  Agbara: [
    "plot 5, OPIC Estate, Agbara",
    "Estate burger, Agbara",
    "Front of OPIC Office, Igere, OPIC Estate, Agbara",
  ],
};

const areaNames = Object.keys(areaData);

const Freetransport = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleAreaClick = (area: string) => {
    setSelectedArea(area === selectedArea ? null : area);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 md:pt-18">
      <div className="flex flex-col justify-center border border-gray-500 p-8 items-center gap-2 w-9/10 md:w-1/2 lg:w-1/3 h-[550px] backdrop-blur-md rounded-xl text-center mx-4 md:mx-6 lg:mx-8 *:w-full *:px-8 *:py-3 *:rounded-lg *:backdrop-blur-sm *:bg-gray-600/45">
        <div className="border-none mb-4 text-lg bg-gray-500 backdrop-blur-none">
          Free Transport Loading Bays
        </div>
        <AreaNames
          areaNames={areaNames}
          selectedArea={selectedArea}
          onAreaClick={handleAreaClick}
        />
        {selectedArea && (
          <div className="mt-4 text-left">
            <h2 className="text-lg font-bold mb-2">
              {selectedArea} Loading Bays:
            </h2>
            <ul className="list-disc pl-5">
              {areaData[selectedArea]?.map((address: string, index: number) => (
                <li key={index} className="mb-2">
                  {address} -
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ml-1"
                  >
                    View on Google Maps
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Freetransport;
