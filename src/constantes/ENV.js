require("dotenv").config({
  path: "/home/patronus/PROJET/reactJS/GITHUB/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);

const team = [
  "D3AD3VIL",
  "Veight_.",
  "Slip.Aboli",
  "Silp.trouer"
];
module.exports = {
  team,
  API_KEY,
  API,
  R6StatsAPI,
};
