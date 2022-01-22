import "./style/css/App.css";
import React from "react";
import PlayerList from "./components/playerList";
import { team } from "./constantes/ENV";
// import {getSeasonStats} from './apiFunctions'

//let url = `https://api2.r6stats.com/public-api/stats/${username}/${platform}/generic`

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// getSeasonStats('D3AD3VIL');
function App() {
  return (
 
    <div className="App">
      <p>réactualisation des données dans : <span id="minuteTimer"></span></p>
      <PlayerList team={team} />
    </div>
  );
}

export default App;
