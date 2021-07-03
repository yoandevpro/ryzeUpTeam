import PlayerCard from "./playerCard";
import { team } from "../constantes/ENV";

// const cardTeam = [yoanCard,vincentCard,thibaultCard,oscarCard,pauloCard]
function PlayerList() {
  return (
    <div className="playerList">
      {team.map((player) => (
        <PlayerCard username={player} />
      ))}
    </div>
  );
}
export default PlayerList;
