import PlayerCard from "./playerCard";

// const cardTeam = [yoanCard,vincentCard,thibaultCard,oscarCard,pauloCard]
function PlayerList(props) {
  const team = props?.team;

  return (
    <div className="playerList">
      {team.map((player) => (
        <PlayerCard username={player} key={player} />
      ))}
    </div>
  );
}
export default PlayerList;
