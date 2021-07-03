import axios from "axios";
import React, { useEffect, useState } from "react";
import { platform, API, API_KEY } from "../constantes/ENV";

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
    const gamer = await axios
      .get(`https://api2.r6stats.com/public-api/stats/${username}/pc/generic`, {
        headers: {
          authorization: "Bearer " + API_KEY,
        },
      })
      .then((response) => response.data);
    //   const rank = await API.getGenericStats(username, platform, "all").then(
    //     (curentRank) => curentRank.stats.general
    //   );
    // const seasonRank = await axios
    //   .get(`https://api2.r6stats.com/public-api/stats/D3AD3VIL/pc/seasonal`, {
    //     headers: {
    //       authorization: "Bearer " + API_KEY,
    //     },
    //   })
    //   .then((response) => response.data);
    setPlayer({
      ...player,
      avatar: gamer?.avatar_url_146,
      //   rank: gamer.rank,
      //   seasonRank: gamer.seasonRank,
    });
  };

  useEffect(() => {
    // console.log(getData(props.username));
    getData(props.username);
  }, [props.username]);
  // componentDidMount()

  return (
    <div className="playerCard">
      {console.log(player)}
      <h1 className="username">{player.username}</h1>
      <img alt={player.username} src={player.avatar} />
      {/* <p>rang de season :{state.seasonRank}</p>
                        <p>rang :{state.seasonRank}</p>
                        <StatsButton username={props.username} rank={state.rank} season={state.seasonRank}/> */}
    </div>
  );
}
export default PlayerCard;
