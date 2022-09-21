require('dotenv').config()
console.log(process.env) 
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
const inputRoaster = document.getElementById('inputRoster');
const inputPlayer = document.getElementById('inputPlayer');
const submitRoaster = document.getElementById('submitRoaster');
const submitPlayer = document.getElementById('submitPlayer');
let clientTeamName = document.getElementsByName("ir")[0]
let clientPlayerName = document.getElementsByName("ip")[0]


// const LOGOTEAMSRC = process.env.REACT_APP_LOGO_TEAM_SRC;

const roaster2 = [
  "Patronus.SQOL",
  "Veight.SQOL",
  "CrysTaLFR.SQOL",
  "EagleFoxTv34.SQOL",
  "Paulo.SQOL"
];
const roaster1 = [
  "Parzival.SQOL",
  "PARADOX.SQOL",
  "SHINZU.SQOL",
  "ZyRoX98.SQOL",
  "CrysTaLFR.SQOL",
  "Patronus.SQOL"
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
  inputPlayer,
  inputRoaster,
  submitRoaster,
  submitPlayer,
  clientTeamName,
  clientPlayerName,
  R6StatsAPI
  // LOGOTEAMSRC
};
