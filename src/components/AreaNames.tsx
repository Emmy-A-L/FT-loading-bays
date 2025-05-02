import { useState } from "react";
import { Link } from "react-router-dom";

const AreaNames = () => {
  const areas = [
    { id: 1, AreaName: "Ige Daramola" },
    { id: 2, AreaName: "Iyesi" },
    { id: 3, AreaName: "Obasanjo" },
    { id: 4, AreaName: "Oju Ore" },
    { id: 5, AreaName: "Raji-Oba" },
    { id: 6, AreaName: "Mosan Ipaja" },
    { id: 7, AreaName: "Gowon Estate" },
    { id: 8, AreaName: "Baruwa" },
    { id: 9, AreaName: "Aboru" },
    { id: 10, AreaName: "Iyana Isashi" },
    { id: 11, AreaName: "Wilky" },
    { id: 12, AreaName: "Petro" },
    { id: 13, AreaName: "Ijaiye" },
    { id: 14, AreaName: "Ogba" },
    { id: 15, AreaName: "Yaba" },
    { id: 16, AreaName: "Mushin" },
    { id: 17, AreaName: "Amuwo" },
    { id: 18, AreaName: "Ayobo" },
    { id: 19, AreaName: "Olayemi" },
    { id: 20, AreaName: "Candos" },
    { id: 21, AreaName: "Majiyagbe" },
    { id: 22, AreaName: "Lafenwa" },
    { id: 23, AreaName: "Perfect Peace" },
    { id: 24, AreaName: "Anthony" },
    { id: 25, AreaName: "Akute" },
    { id: 26, AreaName: "Denro" },
    { id: 27, AreaName: "Olodi-Apapa" },
    { id: 28, AreaName: "Apapa Park-Lane" },
    { id: 29, AreaName: "Alagbado Akinde" },
    { id: 30, AreaName: "AIT" },
    { id: 31, AreaName: "Agege" },
    { id: 32, AreaName: "Fagba" },
    { id: 33, AreaName: "Atan" },
    { id: 34, AreaName: "Adelans 1" },
    { id: 35, AreaName: "Lusada" },
    { id: 36, AreaName: "Ijegun-Ikotun" },
    { id: 37, AreaName: "Igando" },
    { id: 38, AreaName: "Iyana Odo" },
    { id: 39, AreaName: "Arida" },
    { id: 40, AreaName: "Shasha" },
    { id: 41, AreaName: "Egbeda" },
    { id: 42, AreaName: "Oregun-Ikeja" },
    { id: 43, AreaName: "Cement" },
    { id: 44, AreaName: "Ojodu Berger 1" },
    { id: 45, AreaName: "Ifako" },
    { id: 46, AreaName: "Isheri OPIC" },
    { id: 47, AreaName: "Ojodu Berger 2" },
    { id: 48, AreaName: "Ikosi Ketu" },
    { id: 49, AreaName: "Magodo" },
    { id: 50, AreaName: "Okokomaiko" },
    { id: 51, AreaName: "Agbara" },
    { id: 52, AreaName: "Idorawa-Edu" },
    { id: 53, AreaName: "Ijuri" },
    { id: 54, AreaName: "Badagry" },
    { id: 55, AreaName: "Ibiye" },
    { id: 56, AreaName: "Okota" },
    { id: 57, AreaName: "Oshodi" },
    { id: 58, AreaName: "Festac" },
    { id: 59, AreaName: "Iju-Ishaga" },
    { id: 60, AreaName: "Emdeo" },
    { id: 61, AreaName: "Agbado" },
    { id: 62, AreaName: "Bode Williams" },
    { id: 63, AreaName: "Lekki" },
    { id: 64, AreaName: "VGC" },
    { id: 65, AreaName: "Ajah" },
    { id: 66, AreaName: "Badore" },
    { id: 67, AreaName: "Surulere" },
    { id: 68, AreaName: "Lawanson" },
    { id: 69, AreaName: "Masha" },
    { id: 70, AreaName: "Ilaje" },
    { id: 71, AreaName: "Owode" },
    { id: 72, AreaName: "Sango" },
    { id: 73, AreaName: "Abebi Ota" },
    { id: 74, AreaName: "Igbala" },
    { id: 75, AreaName: "Ilogbo" },
    { id: 76, AreaName: "Ijoko" },
    { id: 77, AreaName: "WhiteHouse" },
    { id: 78, AreaName: "Iyesi 2" },
    { id: 79, AreaName: "Highcourt" },
    { id: 80, AreaName: "Atan 2" },
    { id: 81, AreaName: "Adelans 2" },
    { id: 82, AreaName: "Amje" },
    { id: 83, AreaName: "Ikola Command" },
    { id: 84, AreaName: "Ejigbo" },
    { id: 85, AreaName: "Ijeododo" },
    { id: 86, AreaName: "Lsdpc" },
    { id: 87, AreaName: "Ajangbadi" },
    { id: 88, AreaName: "Gbagada" },
    { id: 89, AreaName: "Ilupeju" },
    { id: 90, AreaName: "Satellite Town" },
    { id: 91, AreaName: "Ikoyi" },
    { id: 92, AreaName: "Eti-Osa" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.AreaName.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div className="h-[400px] overflow-y-scroll scroll-bar">
      <input
        type="text"
        placeholder="Search for an area"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-red-400/40 py-2 pl-4 mb-4 w-full rounded-full"
      />
      <div>
        {filteredAreas.length > 0 ? (
          filteredAreas.map((area) => (
            <div key={area.id} className="py-2 border-b border-gray-400/50">
              <Link
                to={`/area/${area.AreaName}`}
                className="text-blue-500 hover:underline"
              >
                {area.AreaName.toUpperCase()}
              </Link>
            </div>
          ))
        ) : (
          <div className="p-2">No area found</div>
        )}
      </div>
    </div>
  );
};

export default AreaNames;
