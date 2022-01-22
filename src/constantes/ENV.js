
require("dotenv").config({
  path: "/home/patronus/PROJET/reactJS/GITHUB/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
const platform = process.env.REACT_APP_PLATFORM;
const team = [
  "RU.patronus",
  "Veight_.",
  "Sleezyy.exe",
  "thero28.HEEL"
];
module.exports = {
  team,
  API_KEY,
  platform,
  API,
  R6StatsAPI,
};
