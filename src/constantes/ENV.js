require('dotenv').config({path: '/home/patronus/PROJET/reactJS/reactest/.env'})
const R6StatsAPI = require('r6statsapi').default
const API_KEY = process.env.API_KEY
const API = new R6StatsAPI(API_KEY)
const platform = process.env.PLATFORM
const ENVyoan = process.env.YOAN
const ENVvincent = process.env.VINCENT
const ENVthibault = process.env.THIBAULT
const ENValex = process.env.ALEX
const ENVpaul = process.env.PAUL
const ENVoscar = process.env.OSCAR
const team = [ENVyoan,ENVvincent,ENVthibault,ENValex,ENVpaul,ENVoscar]
console.log({team})
module.exports = {team,API_KEY, platform, ENVyoan, ENVvincent, ENVthibault, ENValex, ENVpaul, ENVoscar,API,R6StatsAPI}
