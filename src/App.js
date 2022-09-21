import "./style/css/App.css";
import React from "react";
import PlayerList from "./components/playerList";
import {clientTeamName,inputRoaster,inputPlayer, roaster1,submitRoaster,submitPlayer,team, clientPlayerName} from "./constantes/ENV";
import {searchStringInArray} from "./apiFunctions"
// import {getSeasonStats} from './apiFunctions'

//let url = `https://api2.r6stats.com/public-api/stats/${username}/${platform}/generic`

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// getSeasonStats('D3AD3VIL');


function App() {

  inputRoaster.addEventListener('click', (eventRoaster) =>{
    eventRoaster.preventDefault();
    clientTeamName.value = "";
  })
  inputPlayer.addEventListener('click', (eventPlayer) =>{
    eventPlayer.preventDefault();
    clientPlayerName.value = "";
    // inputRoaster.innerText = " ";
  })
  submitRoaster.addEventListener('click',(esubmitR) => {
    esubmitR.preventDefault();
      team.push([clientTeamName.value]);
      alert(`valeur de clientTeamName: ${clientTeamName.value}`)
      console.log(team);

  })
  submitPlayer.addEventListener('click',(esubmitP) => {
    esubmitP.preventDefault();
    searchStringInArray(team[clientTeamName.value],clientPlayerName.value)

  })
   
  
  return (
    <div className="App">
      <p id="reactualisation">réactualisation des données dans : <span id="minuteTimer"></span></p>
      <PlayerList team={roaster1} teamName="R6 roaster 1" />
      {/* { team.map((teamList) => (
        <PlayerList team={teamList} teamName={clientTeamName}/>
      ))} */}
      
      {/* <PlayerList team={roaster2} teamName="R6 roaster 2" /> */}
    </div>
  );
}

export default App;
