// <<<<<<< HEAD
// require('dotenv').config({path: '/home/patronus/PROJET/reactJS/ryzeupteamGithub/ryzeUpTeam/.env'})
// const R6StatsAPI = require('r6statsapi').default
// const API_KEY = process.env.API_KEY
// const API = new R6StatsAPI(API_KEY)
// const platform = process.env.PLATFORM
// const ENVyoan = process.env.YOAN
// const ENVvincent = process.env.VINCENT
// const ENVthibault = process.env.THIBAULT
// const ENValex = process.env.ALEX
// const ENVpaul = process.env.PAUL
// const ENVoscar = process.env.OSCAR
// const team = [ENVyoan,ENVvincent,ENVthibault,ENValex,ENVpaul,ENVoscar]
// console.log({team})
// module.exports = {team,API_KEY, platform, ENVyoan, ENVvincent, ENVthibault, ENValex, ENVpaul, ENVoscar,API,R6StatsAPI}
// =======
require("dotenv").config({
  path: "/home/patronus/PROJET/reactJS/ryzeupteamGithub/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
const platform = process.env.REACT_APP_PLATFORM;
const team = [
  "D3AD3VIL",
  "Veight_.",
  "DonUnhdar_",
  "Evilgun31",
  "thesnakers31",
  "Grogu.Power",
];
module.exports = {
  team,
  API_KEY,
  platform,
  API,
  R6StatsAPI,
};
// >>>>>>> f3bf9e3df3ce3ae2575fcdb4557e2d8a89b02964
