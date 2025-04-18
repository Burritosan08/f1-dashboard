const data2022 = {
  driverStandings: [
    { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 454 },
    { position: 2, driver: "Charles Leclerc", team: "Ferrari", points: 308 },
    { position: 3, driver: "Sergio Perez", team: "Red Bull Racing", points: 305 },
    { position: 4, driver: "George Russell", team: "Mercedes", points: 275 },
    { position: 5, driver: "Carlos Sainz", team: "Ferrari", points: 246 },
    { position: 6, driver: "Lewis Hamilton", team: "Mercedes", points: 240 },
    { position: 7, driver: "Lando Norris", team: "McLaren", points: 122 },
    { position: 8, driver: "Esteban Ocon", team: "Alpine", points: 92 },
    { position: 9, driver: "Fernando Alonso", team: "Alpine", points: 81 },
    { position: 10, driver: "Valtteri Bottas", team: "Alfa Romeo", points: 49 },
  ],
  constructorStandings: [
    { position: 1, team: "Red Bull Racing", points: 759 },
    { position: 2, team: "Ferrari", points: 554 },
    { position: 3, team: "Mercedes", points: 515 },
    { position: 4, team: "Alpine", points: 173 },
    { position: 5, team: "McLaren", points: 159 },
    { position: 6, team: "Alfa Romeo", points: 55 },
    { position: 7, team: "Aston Martin", points: 55 },
    { position: 8, team: "Haas F1 Team", points: 37 },
    { position: 9, team: "AlphaTauri", points: 35 },
    { position: 10, team: "Williams", points: 8 },
  ],
  races: [
    {
      id: 1,
      name: "Bahrain Grand Prix",
      circuit: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
      date: "2022-03-20",
      status: "completed",
      results: [
        { position: 1, driver: "Charles Leclerc", team: "Ferrari" },
        { position: 2, driver: "Carlos Sainz", team: "Ferrari" },
        { position: 3, driver: "Lewis Hamilton", team: "Mercedes" },
      ]
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      circuit: "Jeddah Corniche Circuit",
      location: "Jeddah, Saudi Arabia",
      date: "2022-03-27",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Charles Leclerc", team: "Ferrari" },
        { position: 3, driver: "Carlos Sainz", team: "Ferrari" },
      ]
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      circuit: "Albert Park Circuit",
      location: "Melbourne, Australia",
      date: "2022-04-10",
      status: "completed",
      results: [
        { position: 1, driver: "Charles Leclerc", team: "Ferrari" },
        { position: 2, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 3, driver: "George Russell", team: "Mercedes" },
      ]
    },
    {
      id: 4,
      name: "Emilia Romagna Grand Prix",
      circuit: "Autodromo Enzo e Dino Ferrari",
      location: "Imola, Italy",
      date: "2022-04-24",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Sergio Perez", team: "Red Bull Racing" },
        { position: 3, driver: "Lando Norris", team: "McLaren" },
      ]
    },
    {
      id: 5,
      name: "Miami Grand Prix",
      circuit: "Miami International Autodrome",
      location: "Miami, USA",
      date: "2022-05-08",
      status: "completed",
      results: [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing" },
        { position: 2, driver: "Charles Leclerc", team: "Ferrari" },
        { position: 3, driver: "Carlos Sainz", team: "Ferrari" },
      ]
    },
  ]
};

export default data2022; 