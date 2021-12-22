require("dotenv").config({
  path: "/home/chris/workspace/Formation/ryzeup/ryzeUpTeam/.env",
});
const R6StatsAPI = require("r6statsapi").default;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = new R6StatsAPI(API_KEY);
const platform = process.env.REACT_APP_PLATFORM;
const team = [
    process.env.REACT_APP_YOAN, 
    process.env.REACT_APP_VINCENT,
    process.env.REACT_APP_SlipAboli,
    process.env.REACT_APP_SilpTrouer
];
module.exports = {
  team,
  API_KEY,
  platform,
  API,
  R6StatsAPI,
};
