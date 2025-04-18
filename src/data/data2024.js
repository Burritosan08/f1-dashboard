const data2024 = {
  driverStandings: [
    { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 195 },
    { position: 2, driver: "Charles Leclerc", team: "Ferrari", points: 175 },
    { position: 3, driver: "Lando Norris", team: "McLaren", points: 150 },
    { position: 4, driver: "Carlos Sainz", team: "Ferrari", points: 146 },
    { position: 5, driver: "Sergio Perez", team: "Red Bull Racing", points: 129 },
    { position: 6, driver: "Oscar Piastri", team: "McLaren", points: 112 },
    { position: 7, driver: "George Russell", team: "Mercedes", points: 103 },
    { position: 8, driver: "Lewis Hamilton", team: "Mercedes", points: 96 },
    { position: 9, driver: "Fernando Alonso", team: "Aston Martin", points: 41 },
    { position: 10, driver: "Lance Stroll", team: "Aston Martin", points: 17 },
  ],
  constructorStandings: [
    { position: 1, team: "Red Bull Racing", points: 324 },
    { position: 2, team: "Ferrari", points: 321 },
    { position: 3, team: "McLaren", points: 262 },
    { position: 4, team: "Mercedes", points: 199 },
    { position: 5, team: "Aston Martin", points: 58 },
    { position: 6, team: "RB", points: 30 },
    { position: 7, team: "Haas F1 Team", points: 17 },
    { position: 8, team: "Alpine", points: 8 },
    { position: 9, team: "Williams", points: 2 },
    { position: 10, team: "Kick Sauber", points: 0 },
  ],
  races: [
    {
      id: 1,
      name: "Bahrain Grand Prix",
      circuit: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
      date: "2024-03-02",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Carlos Sainz", team: "Ferrari" },
        { position: 3, driver: "Charles Leclerc", team: "Ferrari" },
      ]
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      circuit: "Jeddah Corniche Circuit",
      location: "Jeddah, Saudi Arabia",
      date: "2024-03-09",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Lando Norris", team: "McLaren" },
        { position: 3, driver: "Charles Leclerc", team: "Ferrari" },
      ]
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      circuit: "Albert Park Circuit",
      location: "Melbourne, Australia",
      date: "2024-03-24",
      status: "completed",
      results: [
        { position: 1, driver: "Carlos Sainz", team: "Ferrari" },
        { position: 2, driver: "Charles Leclerc", team: "Ferrari" },
        { position: 3, driver: "Lando Norris", team: "McLaren" },
      ]
    },
    {
      id: 4,
      name: "Japanese Grand Prix",
      circuit: "Suzuka International Racing Course",
      location: "Suzuka, Japan",
      date: "2024-04-07",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 3, driver: "Carlos Sainz", team: "Ferrari" },
      ]
    },
    {
      id: 5,
      name: "Chinese Grand Prix",
      circuit: "Shanghai International Circuit",
      location: "Shanghai, China",
      date: "2024-04-21",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Lando Norris", team: "McLaren" },
        { position: 3, driver: "Sergio Perez", team: "Red Bull Racing" },
      ]
    },
    {
      id: 6,
      name: "Miami Grand Prix",
      circuit: "Miami International Autodrome",
      location: "Miami, USA",
      date: "2024-05-05",
      status: "upcoming",
      schedule: {
        practice1: "2024-05-03T17:30:00Z",
        practice2: "2024-05-03T21:00:00Z",
        practice3: "2024-05-04T16:30:00Z",
        qualifying: "2024-05-04T20:00:00Z",
        race: "2024-05-05T20:00:00Z"
      }
    },
    {
      id: 7,
      name: "Emilia Romagna Grand Prix",
      circuit: "Autodromo Enzo e Dino Ferrari",
      location: "Imola, Italy",
      date: "2024-05-19",
      status: "upcoming",
      schedule: {
        practice1: "2024-05-17T12:30:00Z",
        practice2: "2024-05-17T16:00:00Z",
        practice3: "2024-05-18T11:30:00Z",
        qualifying: "2024-05-18T15:00:00Z",
        race: "2024-05-19T14:00:00Z"
      }
    },
    {
      id: 8,
      name: "Monaco Grand Prix",
      circuit: "Circuit de Monaco",
      location: "Monte Carlo, Monaco",
      date: "2024-05-26",
      status: "upcoming",
      schedule: {
        practice1: "2024-05-24T12:30:00Z",
        practice2: "2024-05-24T16:00:00Z",
        practice3: "2024-05-25T11:30:00Z",
        qualifying: "2024-05-25T15:00:00Z",
        race: "2024-05-26T14:00:00Z"
      }
    }
  ]
};

export default data2024; 