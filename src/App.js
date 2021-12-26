
import "./style/css/App.css";
import React from "react";
import PlayerList from "./components/playerList";
import { team } from "./constantes/ENV";

function App() {
  return (
    <div className="App">
      <PlayerList team={team} />
    </div>
  );
}

export default App;
