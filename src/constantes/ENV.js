require("dotenv").config({
  path: "/home/patronus/PROJET/reactJS/GITHUB/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
// const LOGOTEAMSRC = process.env.REACT_APP_LOGO_TEAM_SRC;

const roaster2 = [
  "Patronus.RU",
  "Veight.RU",
  "SQOL_FFADAL",
  "XIX_CrysTaLFR",
  "Vlad.Levin"
];
const roaster1 = [
  "Volt8.OTLS",
  "BYZ_FUzTRO",
  "EagleFoxTv34",
  "XIX_Parzival",
  "dezai_fr"
];
const team = [
  roaster1,
  roaster2
]
module.exports = {
  team,
  roaster2,
  roaster1,
  API_KEY,
  API,
  R6StatsAPI
  // LOGOTEAMSRC
};
