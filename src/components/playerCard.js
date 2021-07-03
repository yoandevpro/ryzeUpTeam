import React, { useEffect, useState } from "react";
import { platform, API } from "../constantes/ENV";

// import StatsButton from "./buttons";
//let url = `https://api2.r6stats.com/public-api/stats/${username}/${platform}/generic`

function PlayerCard(props) {
  const [player, setPlayer] = useState({
    username: props.username,
    avatar: "",
    rank: "",
    seasonRank: "",
  });

  const getData = async (username) => {
    const avatar = await API.getGenericStats("D3AD3VIL", "pc", "all").then(
      (response) => response
    );
    return avatar;
    //   const rank = await API.getGenericStats(username, platform, "all").then(
    //     (curentRank) => curentRank.stats.general
    //   );
    //   const seasonRank = await API.getSesonalStats(
    //     username,
    //     platform,
    //     "all"
    //   ).then((season) => season);
    //   setPlayer({
    //     ...player,
    //     avatar: avatar,
    //     rank: rank,
    //     seasonRank: seasonRank,
    //   });
  };

  useEffect(() => {
    console.log(getData(props.username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // componentDidMount()

  return (
    <div className="playerCard">
      <h1 className="username">{props.username}</h1>
      {/* <img alt={props.username} src={state.avatar}/>
                        <p>rang de season :{state.seasonRank}</p>
                        <p>rang :{state.seasonRank}</p>
                        <StatsButton username={props.username} rank={state.rank} season={state.seasonRank}/> */}
    </div>
  );
}
export default PlayerCard;
