import { useParams } from "react-router-dom";
import { useState } from "react";

const AreaPage = () => {
  const { areaName } = useParams();
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const areaAddresses = {
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
    // Add more areas and their addresses here
  } as const;

  type AreaName = keyof typeof areaAddresses;

  const addresses =
    areaName && typeof areaName === "string" && areaName in areaAddresses
      ? areaAddresses[areaName as AreaName]
      : [];
  const selectedAddress =
    addresses[selectedAddressIndex] || "Address not available";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 md:pt-18">
      <div className="flex flex-col justify-center items-center bg-gray-600/30 backdrop-blur-md w-9/10 md:w-1/2 lg:w-1/3 max-h-[550px] m-auto px-3 py-5 gap-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">{areaName}</h1>
        {addresses.length > 0 ? (
          <div>
            <p className="text-lg mb-4">Selected Address: {selectedAddress}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                selectedAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Google Maps
            </a>
            <div className="mt-4 flex flex-col items-start">
              <label htmlFor="address-select" className="mb-2 text-lg">
                Select Address:
              </label>
              <select
                id="address-select"
                value={selectedAddressIndex}
                onChange={(e) =>
                  setSelectedAddressIndex(Number(e.target.value))
                }
                className="p-2 rounded border"
              >
                {addresses.map((address, index) => (
                  <option key={index} value={index} className="bg-gray-600" >
                    {address}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <p className="text-lg">No addresses available</p>
        )}
      </div>
    </div>
  );
};

export default AreaPage;
