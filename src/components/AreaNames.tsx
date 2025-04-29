import { useState } from "react";

const AreaNames = () => {
  const areas = [
    "Ige Daramola",
    "Iyesi",
    "Obasanjo",
    "Oju Ore",
    "Raji-Oba",
    "Mosan Ipaja",
    "Gowon Estate",
    "Baruwa",
    "Aboru",
    "Iyana Isashi",
    "Wilky",
    "Petro",
    "Ijaiye",
    "Ogba",
    "Yaba",
    "Mushin",
    "Amuwo",
    "Ayobo",
    "Olayemi",
    "Candos",
    "Majiyagbe",
    "Lafenwa",
    "Perfect Peace",
    "Anthony",
    "Akute",
    "Denro",
    "Olodi-Apapa",
    "Apapa Park-Lane",
    "Alagbado Akinde",
    "AIT",
    "Agege",
    "Fagba",
    "Atan",
    "Adelans 1",
    "Lusada",
    "Ijegun-Ikotun",
    "Igando",
    "Iyana Odo",
    "Arida",
    "Shasha",
    "Egbeda",
    "Oregun-Ikeja",
    "Cement",
    "Ojodu Berger 1",
    "Ifako",
    "Isheri OPIC",
    "Ojodu Berger 2",
    "Ikosi Ketu",
    "Magodo",
    "Okokomaiko",
    "Agbara",
    "Idorawa-Edu",
    "Ijuri",
    "Badagry",
    "Ibiye",
    "Okota",
    "Oshodi",
    "Festac",
    "",
    "",
    "Alakuko",
    "Ogudu",
    "Ojodu Berger",
    "Anthony",
    "Obalende",
    "Marina",
    "CMS",
    "Tinubu",
    "Tafawa Balewa Square",
    "Broad Street",
    "Idumota",
    "Balogun",
    "Oyingbo",
    "Ebute Metta",
    "Iponri",
    "Costain",
    "Tejuosho",
    "Jibowu",
    "Fadeyi",
    "Palmgrove",
    "Oniru",
    "Osapa London",
    "Agungi",
    "Chevron",
    "Sangotedo",
    "Awoyaya",
    "Lakowe",
    "Bogije",
    "Abijo",
    "Ajah Market",
    "VGC",
    "Ikate",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[400px] overflow-y-scroll scroll-bar">
      <input
        type="text"
        placeholder="Search for an area"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4"
      />
      <div>
        {filteredAreas.length > 0 ? (
          filteredAreas.map((area, index) => (
            <div key={index} className="p-2 border-b">
              {area}
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
