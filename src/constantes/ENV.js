require('dotenv').config({path: '/home/patronus/PROJET/reactJS/ryzeupteam/.env'})
const R6StatsAPI = require('r6statsapi').default
const API_KEY = process.env.REACT_APP_API_KEY
const URL_API = process.env.REACT_APP_URL_API
const API = new R6StatsAPI(API_KEY)
const platform = process.env.REACT_APP_PLATFORM
const ENVyoan = process.env.REACT_APP_YOAN
const ENVvincent = process.env.REACT_APP_VINCENT
const ENVthibault = process.env.REACT_APP_THIBAULT
const ENValex = process.env.REACT_APP_ALEX
const ENVpaul = process.env.REACT_APP_PAUL
const ENVoscar = process.env.REACT_APP_OSCAR
// const ENVyoan = 'D3AD3VIL'
// const ENVvincent = 'Veight_.'
// const ENVthibault = 'Evilgun31'
// const ENValex = 'DonUnhdar_'
// const ENVpaul = 'Grogu.Power'
// const ENVoscar = 'thesnakers31'
const team = [ENVyoan,ENVvincent,ENVthibault,ENValex,ENVpaul,ENVoscar]
let debug = require('dotenv').config({ debug: process.env.DEBUG})
console.log(debug)
console.log(URL_API)


// const fs = require('fs')
// const dotenv = require('dotenv')
// const envConfig = dotenv.parse(fs.readFileSync('.env'))
// for(const k in envConfig){
//     process.env[k] = envConfig[k]
// }


module.exports = {team,API_KEY, platform, ENVyoan, ENVvincent, ENVthibault, ENValex, ENVpaul, ENVoscar,API,R6StatsAPI,URL_API}
