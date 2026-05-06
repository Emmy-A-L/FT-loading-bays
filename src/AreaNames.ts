type Areas = {
  id: number;
  areaName: string;
  chopLocations: {
    id: number;
    areaName: string;
    location: string;
    mapLink: string;
  }[];
  midweekLocations: {
    id: number;
    areaName: string;
    location: string;
    mapLink: string;
  }[];
  brtLocations: {
    id: number;
    areaName: string;
    location: string;
    mapLink: string;
  }[];
  freeTransportLocations: {
    id: number;
    areaName: string;
    location: string;
    mapLink: string;
  }[];
  communityChurchLocations: {
    id: number;
    areaName: string;
    location: string;
    mapLink: string;
  }[];
}[];

export const areas: Areas = [
  {
    id: 1,
    areaName: "Ige Daramola",
    chopLocations: [
      {
        id: 1,
        areaName: "Ige Daramola",
        location: "789 Back St, Ige Daramola",
      },
      { id: 2, areaName: "Ige Daramola", location: "123 Elm St, Ige Daramola" },
      {
        id: 3,
        areaName: "Ige Daramola",
        location: "456 Pine St, Ige Daramola",
      },
    ],
    midweekLocations: [
      {
        id: 1,
        areaName: "Ige Daramola",
        location: "789 Back St, Ige Daramola",
      },
      { id: 2, areaName: "Ige Daramola", location: "123 Elm St, Ige Daramola" },
      {
        id: 3,
        areaName: "Ige Daramola",
        location: "456 Pine St, Ige Daramola",
      },
    ],
    communityChurchLocations: [],
    brtLocations: [
      {
        id: 1,
        areaName: "Ige Daramola",
        location: "789 Back St, Ige Daramola",
      },
      { id: 2, areaName: "Ige Daramola", location: "123 Elm St, Ige Daramola" },
      {
        id: 3,
        areaName: "Ige Daramola",
        location: "456 Pine St, Ige Daramola",
      },
    ],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Ige Daramola",
        location: "789 Back St, Ige Daramola",
      },
      { id: 2, areaName: "Iyeesi", location: "123 Elm St, Iyesi" },
      { id: 3, areaName: "Obasanjo", location: "456 Pine St, Obasanjo" },
    ],
  }, //area 1

  {
    id: 2,
    areaName: "Iyesi",
    chopLocations: [
      { id: 1, areaName: "Iyesi", location: "123 Elm St, Iyesi" },
      { id: 2, areaName: "Iyesi", location: "456 Pine St, Iyesi" },
      { id: 3, areaName: "Iyesi", location: "789 Maple St, Iyesi" },
    ],
    midweekLocations: [
      { id: 1, areaName: "Iyesi", location: "123 Elm St, Iyesi" },
      { id: 2, areaName: "Iyesi", location: "456 Pine St, Iyesi" },
      { id: 3, areaName: "Iyesi", location: "789 Maple St, Iyesi" },
    ],
    communityChurchLocations: [],
    brtLocations: [
      { id: 1, areaName: "Iyesi", location: "123 Elm St, Iyesi" },
      { id: 2, areaName: "Iyesi", location: "456 PineSt, Iyesi" },
      { id: 3, areaName: "Iyesi", location: "789 Maple St, Iyesi" },
    ],
    freeTransportLocations: [
      { id: 1, areaName: "Iyesi", location: " BABA MONDAY JUNCTION EGAN ROAD" },
    ],
  }, //area 2

  {
    id: 3,
    areaName: "Obasanjo",
    chopLocations: [],
    communityChurchLocations: [],
    midweekLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  }, //area 3

  {
    id: 4,
    areaName: "Oju Ore",
    chopLocations: [],
    midweekLocations: [],
    brtLocations: [],
    communityChurchLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Oju Ore",
        location: "TRANSFORMER, SURULERE ABULE EWUPE",
      },
      {
        id: 2,
        areaName: "Oju Ore",
        location: "4 AKINPELU STREET, OFF OKOOSI, FADINA, OJU ORE",
      },
      {
        id: 3,
        areaName: "Oju Ore",
        location: "SEGUN BLOCK JUNCTION,EWUPE ROAD,OJU ORE",
      },
      { id: 4, areaName: "Oju Ore", location: "PREM JUNCTION, OLUGBA VILLAGE" },
      {
        id: 5,
        areaName: "Oju Ore",
        location: "OTITOLOJU BLOCK, PALM ESTATE,ILOGBO",
      },
      {
        id: 6,
        areaName: "Oju Ore",
        location: "BAYO BLOCK JUNCTION, BAYO BLOCK, OJU ORE",
      },
      { id: 7, areaName: "Oju Ore", location: "103, ABE IGI, EWUPE ROAD" },
      {
        id: 8,
        areaName: "Oju Ore",
        location:
          "1, ONIWON ESTATE,BESIDE ONIWON TRANSFORMER, OFF ILOGBO ROAD,ONIWON, OJU ORE",
      },
    ],
  }, //area 4

  {
    id: 5,
    areaName: "Raji-Oba",
    chopLocations: [],
    midweekLocations: [],
    brtLocations: [],
    communityChurchLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Raji-Oba",
        location: "38 RAJI OBA STREET ALIMOSHO",
      },
      {
        id: 2,
        areaName: "Raji-Oba",
        location: "33, ALHAJI RAMOTA STREET, EGBEDA",
      },
      {
        id: 3,
        areaName: "Raji-Oba",
        location: " 12, SOLOMON BANKOLE STREET AKOWONJO LAGOS",
      },
      {
        id: 4,
        areaName: "Raji-Oba",
        location: "7/9 MARKET LINK CLOSE AKOWONJO LAGOS",
      },
      {
        id: 5,
        areaName: "Raji-Oba",
        location: "3, ADEBOUN STREET, IYANA PAJA",
      },
      {
        id: 6,
        areaName: "Raji-Oba",
        location: "1, ADMAK CLOSE WATER B/STOP MOSAN IPAJA",
      },
      {
        id: 7,
        areaName: "Raji-Oba",
        location: "PLOT 4 B/S STREET , SHAGARI ESTATE MOSAN IPAJA",
      },
    ],
  }, //area 5

  {
    id: 6,
    areaName: "Mosan Ipaja",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Mosan Ipaja",
        location: "DH 4 OPPOSITE ABIDAP HOTEL BY OPC JUNCTION",
      },
      {
        id: 2,
        areaName: "Mosan Ipaja",
        location: "FEDERAL BUS STOP SHAGARI ESTATE BY ECOBANK",
      },
      {
        id: 3,
        areaName: "Mosan Ipaja",
        location: "MOSAN ROUNDABOUT OPPOSITE DEEPER LIFE CHURCH",
      },
    ],
  }, // area 6

  {
    id: 7,
    areaName: "Gowon Estate",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Gowon Estate",
        location: "FAITH ACEDEMY, GOWON ESTATE",
      },
      {
        id: 2,
        areaName: "Gowon Estate",
        location: "JENDOL JUNCTION BOYS TOWN IPAJA",
      },
      {
        id: 3,
        areaName: "Gowon Estate",
        location: "FIRST ROYAL FILLING STATION, ABESAN ESTATE",
      },
      {
        id: 4,
        areaName: "Gowon Estate",
        location: "31 ROAD ROUNDABOUT, GOWON ESTATE",
      },
    ],
  }, // area 7

  {
    id: 8,
    areaName: "Baruwa",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Baruwa",
        location: "5 ST MICHAEL STREET, BARUWA",
      },
      {
        id: 2,
        areaName: "Baruwa",
        location: "P & T",
      },
      {
        id: 3,
        areaName: "Baruwa",
        location: "TWO STOREY",
      },
    ],
  }, // area 8

  {
    id: 9,
    areaName: "Aboru",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Aboru",
        location: "PLEASURE BUS STOP ILE-EPO OKEODO",
      },
      {
        id: 2,
        areaName: "Aboru",
        location: "BABA-IJESA BUS STOP BY AND MOBIL FILLING STATION ABORU",
      },
      {
        id: 3,
        areaName: "Aboru",
        location: "AKIN-OLA BUS STOP ABORU",
      },
    ],
  }, // area 9

  {
    id: 10,
    areaName: "Iyana Isashi",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Iyana Isashi",
            location: "MARKET BUS STOP IYANAISASHI",
          },
          {
            id: 2,
            areaName: "Iyana Isashi",
            location: "CELE BUS STOP",
          },
          {
            id: 3,
            areaName: "Iyana Isashi",
            location: "OKADA PARK ITEKUN",
          }
    ],
  },// area 10
  
  {
    id: 11,
    areaName: "Wilky",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Wilky",
            location: "IGBO ELERIN BUS-STOP",
          },
          {
            id: 2,
            areaName: "Wilky",
            location: "CEMENT BUS-STOP, OKE-ODAN",
          },
          {
            id: 3,
            areaName: "Wilky",
            location: "OLOPA BUS-STOP, ERA",
          },
          {
            id: 3,
            areaName: "Wilky",
            location: "TRANSFORMERS BUS-STOP OKE-AGBO, ILOGBO",
          }
    ],
  }, // area 11
  
  {
    id: 12,
    areaName: "Petro",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Petro",
            location: "3/5 PETRO CLOSE BY IYANA ERA B-STOP",
          },
          {
            id: 2,
            areaName: "Petro",
            location: "1 OMOTAYO STR, ALASIA B-STOP",
          }
          
    ],
  },// area 12

  {
    id: 13,
    areaName: "Ijaiye",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Ijaiye",
            location: "3/5 AKINSOLA STREET AJALA IJAIYE",
          },
          {
            id: 2,
            areaName: "Ijaiye",
            location: " 104 AGBADO STATION RD, LAMBE BUS STOP, IJAIYE",
          },
          {
            id: 3,
            areaName: "Ijaiye",
            location: " RAB OIL BY SANTOS JUNCTION, AGBE ROAD, ABULE EGBA",
          }
    ],
  },// area 13

  {
    id: 14,
    areaName: "Ogba",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },// area 14

  {
    id: 15,
    areaName: "Yaba",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Yaba",
            location: "44 MONTGOMERY ROAD YABA",
          },
          {
            id: 2,
            areaName: "Yaba",
            location: "NNPC BUS STOP, IWAYA ROAD",
          },
          {
            id: 3,
            areaName: "Yaba",
            location: "UBA BANK, OYINGBO",
          },
          {
            id: 4,
            areaName: "Yaba",
            location: "1 OHEKENU STREET, FADEYI (BEHIND FIDELITY BANK)",
          }
    ],
  },// area 15

  {
    id: 16,
    areaName: "Mushin",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Mushin",
            location: "OLORUNSOGO BUS-STOP / ACCESS BANK MUSHIN BUS-STOP",
          },
          {
            id: 2,
            areaName: "Mushin",
            location: "AWOYOKU JUNCTION/NO 7 BODE THOMAS STREET ONIPAN",
          },
          {
            id: 3,
            areaName: "Mushin",
            location: "MAY HOSPITAL. SADIKU ILASAMAJA, TAXI PARK, SUBERU",
          },
          {
            id: 4,
            areaName: "Mushin",
            location: "MOBIL FILLING STATION, PALM AVENUE /  P AND P SCHOOLS, LAYI OYEKANMI ",
          },
          {
            id: 5,
            areaName: "Mushin",
            location: "UNITY BANK, IDIORO",
          }
    ],
  },// area 16

  {
    id: 17,
    areaName: "Amuwo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
        {
            id: 1,
            areaName: "Amuwo",
            location: "PLOT 2, INDUSTRIAL LAYOUT, COVENANT ROAD, AMUWO",
          },
          {
            id: 2,
            areaName: "Amuwo",
            location: "2, EMMANUEL OFFOR STR, UKWACHINAKA JUNCTION, GREEN FIELD ESTATE, AMUWO",
          },
          {
            id: 3,
            areaName: "Amuwo",
            location: "OJO MILITARY BARRACKS, OJO",
          }
          ,
          {
            id: 4,
            areaName: "Amuwo",
            location: "TEDI ROUNDABOUT, OJO LAGOS",
          },
          {
            id: 5,
            areaName: "Amuwo",
            location: "ARIYO JUNCTION, IRA OJO, LAGOS",
          },
          {
            id: 6,
            areaName: "Amuwo",
            location: "OPPOSITE OJO TRANSFORMER, OJO, LAGOS",
          }
    ],
  },// area 17

  {
    id: 18,
    areaName: "Ayobo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
          {
            id: 1,
            areaName: "Ayobo",
            location: "1. PARKLANE AVENUE, AYOBO",
          },
          {
            id: 2,
            areaName: "Ayobo",
            location: "ABBOT SCHOOL JUNCTION, AYOBO",
          },
          {
            id: 3,
            areaName: "Ayobo",
            location: "27 WULUMOTU STREET, BADA",
          },
          {
            id: 4,
            areaName: "Ayobo",
            location: "2 ADENIJI ABOLADE STREET, AYOBO",
          },
          {
            id: 5,
            areaName: "Ayobo",
            location: "1, BETHEL STREET, AYOBO",
          }
        ],
  },// area 18

  {
    id: 19,
    areaName: "Olayemi",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Olayemi",
        location: "10, MAJOR BUS-STOP, ALAJA",
      },
      {
        id: 2,
        areaName: "Olayemi",
        location: "50 IGESU RD, OLAYEMI BUS-STOP",
      },
      {
        id: 3,
        areaName: "Olayemi",
        location: "6, ORELOPE STREET, SABO",
      },
    ],
  },// area 19

  {
    id: 20,
    areaName: "Candos",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Candos",
        location: "24, CANDOS RD, OFF ASHIPA RD, AMULE-AYOBO, LAGOS",
      },
      {
        id: 2,
        areaName: "Candos",
        location: "10, CHURCH STREET, IDERA ESTATE, AMULE-AYOBO, LAGOS",
      },
      {
        id: 3,
        areaName: "Candos",
        location: "MAKINDE BUS-STOP, ASHIPA ROAD, AYOBO, LAGOS",
      },
      {
        id: 4,
        areaName: "Candos",
        location: "16, SHOKANLU STREET, MERCYLAND ESTATE, AMULE-AYOBO, LAGOS",
      },
      {
        id: 5,
        areaName: "Candos",
        location: "9, ALHAJA WOSILAT STREET, IPAJA",
      },
      {
        id: 6,
        areaName: "Candos",
        location: "K.I.D BUS-STOP, ASHIPA ROAD, AMULE-AYOBO, LAGOS",
      },
    ],
  },// area 20

  {
    id: 21,
    areaName: "Majiyagbe",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
        id: 1,
        areaName: "Majiyagbe",
        location: "42, WOLE EDUN STREET, MAJIYAGBE",
      },
      {
        id: 2,
        areaName: "Majiyagbe",
        location: "ALAO BLOCK INDUSTRY, MAJIYAGBE",
      },
      {
        id: 3,
        areaName: "Majiyagbe",
        location: "JOEKEM PHARMACY",
      },
      {
        id: 4,
        areaName: "Majiyagbe",
        location: "AWORI JUNCTION, ANGLICAN GRAMMAR SCHOOL",
      },
      {
        id: 5,
        areaName: "Majiyagbe",
        location: "ZION BUS STOP, AINA OBEB-NBE ROAD, IPAJA",
      },
      {
        id: 6,
        areaName: "Majiyagbe",
        location: "22, FAGBEMI STREET, MAJIYAGBE",
      },
      {
        id: 7,
        areaName: "Majiyagbe",
        location: "26 IFELODUN STREET, BADEK JUNCTION",
      }
    ],
  },// area 21

  {
    id: 22,
    areaName: "Lafenwa",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  }, // area 22

  {
    id: 23,
    areaName: "Perfect Peace",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
          {
            id: 1,
            areaName: "Perfect Peace",
            location: "1/4 PERFECT PEACE AVENUE, OLUGBODE",
          },
          {
            id: 2,
            areaName: "Perfect Peace",
            location: "NAVY HOUSE, TIPPER GARAGE, ODAM, LAFENWA",
          },
          {
            id: 3,
            areaName: "Perfect Peace",
            location: "COVENANT BLOCK INDUSTRY, ADELEYE, LAFENWA ROAD, OTA",
          },
          {
            id: 4,
            areaName: "Perfect Peace",
            location: "20, OLALEKAN CLOSE, LAFENWA",
          },
          {
            id: 5,
            areaName: "Perfect Peace",
            location: "23, YUSUF OLA, APARADIJA, LAFENWA",
          },
          {
            id: 6,
            areaName: "Perfect Peace",
            location: "9, ADESHINA ILEIFE, APARADIJA, LAFENWA",
          }
    ],
  },// area 23

  {
    id: 24,
    areaName: "Anthony",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
      {
            id: 1,
            areaName: "Anthony",
            location: "10, ADEBAYO MOKUOLU STREET, ANTHONY",
          },
          {
            id: 2,
            areaName: "Anthony",
            location: "AGWANDOKI IKEJA MILITARY CANTONMENT",
          },
          {
            id: 3,
            areaName: "Anthony",
            location: "OKI-LANE MENDE, MARYLAND",
          }
    ],
  },// area 24

  {
    id: 25,
    areaName: "Akute",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [
          {
            id: 1,
            areaName: "Akute",
            location: "2, TUNDE SEBANJO CRESCENT, OFF FABOLUDE BUS-STOP",
          },
          {
            id: 2,
            areaName: "Akute",
            location: "11, AKINTOYINBO STREET, RIVER BANK, AKUTE ODO",
          },
          {
            id: 3,
            areaName: "Akute",
            location: "3, JESUS CLOSE, OFF TEN TEN BUS-STOP OLAMBE",
          },
          {
            id: 4,
            areaName: "Akute",
            location: "49, GASLINE ROAD, COCOA HOUSE, MATOGUN",
          }
    ],
  },// area 25
  {
    id: 26,
    areaName: "Denro",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 27,
    areaName: "Olodi-Apapa",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 28,
    areaName: "Apapa Park-Lane",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 29,
    areaName: "Alagbado Akinde",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 30,
    areaName: "AIT",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 31,
    areaName: "Agege",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 32,
    areaName: "Fagba",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 33,
    areaName: "Atan",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 34,
    areaName: "Adelans 1",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 35,
    areaName: "Lusada",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 36,
    areaName: "Ijegun-Ikotun",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 37,
    areaName: "Igando",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 38,
    areaName: "Iyana Odo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 39,
    areaName: "Arida",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 40,
    areaName: "Shasha",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 41,
    areaName: "Egbeda",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 42,
    areaName: "Oregun-Ikeja",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 43,
    areaName: "Cement",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 44,
    areaName: "Ojodu Berger 1",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 45,
    areaName: "Ifako",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 46,
    areaName: "Isheri OPIC",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 47,
    areaName: "Ojodu Berger 2",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 48,
    areaName: "Ikosi Ketu",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 49,
    areaName: "Magodo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 50,
    areaName: "Okokomaiko",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 51,
    areaName: "Agbara",
    chopLocations: [
          {
            id: 1,
            areaName: "Agbara",
            location: "Plot 5, Area 8 OPIC Estate",
            mapLink: "https://maps.app.goo.gl/UpMxZ1kMWkq3srU57",
          },
          {
            id: 2,
            areaName: "Agbara",
            location: "Idanyin Community Church, Idanyin",
            mapLink: "https://maps.app.goo.gl/xUiuC9rHp3dhcfUe6"
          },
          {
            id: 3,
            areaName: "Agbara",
            location: "New Dawn Estate, Igere, OPIC Estate",
            mapLink: "https://maps.app.goo.gl/XML2a8LZJ5vrZLie9"
          }
    ],
    midweekLocations: [
          {
            id: 1,
            areaName: "Agbara",
            location: "Plot 5, Area 8 OPIC Estate",
            mapLink: "https://maps.app.goo.gl/UpMxZ1kMWkq3srU57",
          },
      {
            id: 2,
            areaName: "Agbara",
            location: "Ihunsa Community, Ihunsa",
            mapLink: "https://maps.app.goo.gl/2nzKLgYNQUsfqLxh7"
          },
      {
            id: 3,
            areaName: "Agbara",
            location: "First Seeds School, Ago-Eto, Agbara",
            mapLink: "https://maps.app.goo.gl/6moVehveEGUrTNrx5"
          },
      {
            id: 4,
            areaName: "Agbara",
            location: "No 10, Opobo Crescent, Agbara Estate",
          },
      {
            id: 5,
            areaName: "Agbara",
            location: "Step Bridge Schools, Ilutuntun, Area 3 OPIC Estate",
            mapLink: "https://maps.app.goo.gl/v14PGCR9XPzWswwP8"
          },
      {
            id: 6,
            areaName: "Agbara",
            location: "Eagles Wings School, Odan, Agbara",
            mapLink: "https://maps.app.goo.gl/XAswkr2us7btk9JC7"
          },
      {
            id: 7,
            areaName: "Agbara",
            location: "Community hall, Golden city Estate, Petedo",
            mapLink: "https://maps.app.goo.gl/6r9W8yf43APGDyyU6"
          }
          {
            id: 8,
            areaName: "Agbara",
            location: "New Dawn Estate, Igere, OPIC Estate",
            mapLink: "https://maps.app.goo.gl/XML2a8LZJ5vrZLie9"
          },
          {
            id: 9,
            areaName: "Agbara",
            location: "Ambassador Street, CBD OPIC Estate",
            mapLink: "https://maps.app.goo.gl/Wdn2BrMdvUinCJ5q8"
          },
          {
            id: 10,
            areaName: "Agbara",
            location: "Idanyin Community Church, Idanyin",
            mapLink: "https://maps.app.goo.gl/xUiuC9rHp3dhcfUe6"
          },
    ],
    communityChurchLocations: [
      {
            id: 1,
            areaName: "Agbara",
            location: "Idanyin Community Church, Idanyin",
            mapLink: "https://maps.app.goo.gl/xUiuC9rHp3dhcfUe6"
          }
    ],
    brtLocations: [{
            id: 1,
            areaName: "Agbara",
            location: "Estate Burger, Agbara bus stop",
            mapLink: "https://maps.app.goo.gl/fSAQnUzPLYfxMwc89",
          }],
    freeTransportLocations: [],
  },
  {
    id: 52,
    areaName: "Idorawa-Edu",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 53,
    areaName: "Ijuri",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 54,
    areaName: "Badagry",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 55,
    areaName: "Ibiye",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 56,
    areaName: "Okota",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 57,
    areaName: "Oshodi",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 58,
    areaName: "Festac",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 59,
    areaName: "Iju-Ishaga",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 60,
    areaName: "Emdeo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 61,
    areaName: "Agbado",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 62,
    areaName: "Bode Williams",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 63,
    areaName: "Lekki",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 64,
    areaName: "VGC",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 65,
    areaName: "Ajah",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 66,
    areaName: "Badore",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 67,
    areaName: "Surulere",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 68,
    areaName: "Lawanson",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 69,
    areaName: "Masha",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 70,
    areaName: "Ilaje",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 71,
    areaName: "Owode",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 72,
    areaName: "Sango",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 73,
    areaName: "Abebi Ota",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 74,
    areaName: "Igbala",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 75,
    areaName: "Ilogbo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 76,
    areaName: "Ijoko",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 77,
    areaName: "WhiteHouse",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 78,
    areaName: "Iyesi 2",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 79,
    areaName: "Highcourt",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 80,
    areaName: "Atan 2",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 81,
    areaName: "Adelans 2",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 82,
    areaName: "Amje",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 83,
    areaName: "Ikola Command",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 84,
    areaName: "Ejigbo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 85,
    areaName: "Ijeododo",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 86,
    areaName: "Lsdpc",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 87,
    areaName: "Ajangbadi",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 88,
    areaName: "Gbagada",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 89,
    areaName: "Ilupeju",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 90,
    areaName: "Satellite Town",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 91,
    areaName: "Ikoyi",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
  {
    id: 92,
    areaName: "Eti-Osa",
    chopLocations: [],
    midweekLocations: [],
    communityChurchLocations: [],
    brtLocations: [],
    freeTransportLocations: [],
  },
];
