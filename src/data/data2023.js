const data2023 = {
  driverStandings: [
    { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 575 },
    { position: 2, driver: "Sergio Perez", team: "Red Bull Racing", points: 285 },
    { position: 3, driver: "Lewis Hamilton", team: "Mercedes", points: 234 },
    { position: 4, driver: "Fernando Alonso", team: "Aston Martin", points: 206 },
    { position: 5, driver: "Charles Leclerc", team: "Ferrari", points: 206 },
    { position: 6, driver: "Lando Norris", team: "McLaren", points: 205 },
    { position: 7, driver: "Carlos Sainz", team: "Ferrari", points: 200 },
    { position: 8, driver: "George Russell", team: "Mercedes", points: 175 },
    { position: 9, driver: "Oscar Piastri", team: "McLaren", points: 97 },
    { position: 10, driver: "Lance Stroll", team: "Aston Martin", points: 74 },
  ],
  constructorStandings: [
    { position: 1, team: "Red Bull Racing", points: 860 },
    { position: 2, team: "Mercedes", points: 409 },
    { position: 3, team: "Ferrari", points: 406 },
    { position: 4, team: "McLaren", points: 302 },
    { position: 5, team: "Aston Martin", points: 280 },
    { position: 6, team: "Alpine", points: 120 },
    { position: 7, team: "Williams", points: 28 },
    { position: 8, team: "AlphaTauri", points: 25 },
    { position: 9, team: "Alfa Romeo", points: 16 },
    { position: 10, team: "Haas F1 Team", points: 12 },
  ],
  races: [
    {
      id: 1,
      name: "Bahrain Grand Prix",
      circuit: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
      date: "2023-03-05",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 3, driver: "Fernando Alonso", team: "Aston Martin" },
      ]
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      circuit: "Jeddah Corniche Circuit",
      location: "Jeddah, Saudi Arabia",
      date: "2023-03-19",
      status: "completed",
      results: [
        { position: 1, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 2, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 3, driver: "Fernando Alonso", team: "Aston Martin" },
      ]
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      circuit: "Albert Park Circuit",
      location: "Melbourne, Australia",
      date: "2023-04-02",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Lewis Hamilton", team: "Mercedes" },
        { position: 3, driver: "Fernando Alonso", team: "Aston Martin" },
      ]
    },
    {
      id: 4,
      name: "Azerbaijan Grand Prix",
      circuit: "Baku City Circuit",
      location: "Baku, Azerbaijan",
      date: "2023-04-30",
      status: "completed",
      results: [
        { position: 1, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 2, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 3, driver: "Charles Leclerc", team: "Ferrari" },
      ]
    },
    {
      id: 5,
      name: "Miami Grand Prix",
      circuit: "Miami International Autodrome",
      location: "Miami, USA",
      date: "2023-05-07",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 3, driver: "Fernando Alonso", team: "Aston Martin" },
      ]
    },
  ]
};

export default data2023; 