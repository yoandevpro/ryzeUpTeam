import PlayerCard from "./playerCard";
// import {team, roaster1, roaster2} from "../constantes/ENV"



// const cardTeam = [yoanCard,vincentCard,thibaultCard,oscarCard,pauloCard]
function PlayerList(props) {
  // const team = props?.team;

      return (
      <div className="playerList">
        <h1>{props.teamName}</h1>
      { props.team.map((player) => (
        <PlayerCard username={player} key={player} />
      ))}
      </div>
    );
 
}
export default PlayerList;
