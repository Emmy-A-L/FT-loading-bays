import { useParams } from "react-router-dom";

const AreaPage = () => {
  const { areaName } = useParams();

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
    areaName && typeof areaName === "string" && (areaName in areaAddresses)
      ? areaAddresses[areaName as AreaName]
      : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{areaName}</h1>
      {addresses.length > 0 ? (
        <ul className="list-disc pl-5">
          {addresses.map((address:string, index:number) => (
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
      ) : (
        <p className="text-lg">No addresses available</p>
      )}
    </div>
  );
};

export default AreaPage;
