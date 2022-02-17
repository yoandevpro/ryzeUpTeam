require("dotenv").config({
  path: "/home/patronus/PROJET/reactJS/GITHUB/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
// const LOGOTEAMSRC = process.env.REACT_APP_LOGO_TEAM_SRC;

const team = [
  "Patronus.RU",
  "Veight.RU",
  "Sleezyy.RU",
  "WxshxdByDnr.-",
  "WxshxdByVnx.-",
  "Kyoei.-",
  "Revy.M92F"
];
module.exports = {
  team,
  API_KEY,
  API,
  R6StatsAPI
  // LOGOTEAMSRC
};
