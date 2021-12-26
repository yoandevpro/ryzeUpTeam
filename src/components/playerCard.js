import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../constantes/ENV";
//API / platform
// import StatsButton from "./buttons";
//let url = `https://api2.r6stats.com/public-api/stats/${username}/${platform}/generic`

function PlayerCard(props) {
  const [player, setPlayer] = useState({
    username: props.username,
    urlAvatar: "",
    rank: "",
    seasonRank: "",
    kd:Number,
    totalGamesPlayed:Number,
    lvl:Number,
    playTime:Number,
    mainAttacker:"",
    mainDeffender:"",
    roleGamePLay:""
  });

  const getData = async (username) => {
    const gameDatasPlayer = await axios
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
      urlAvatar: gameDatasPlayer?.avatar_url_146,
      kd: gameDatasPlayer.stats.general.kd,
      totalGamesPlayed: gameDatasPlayer.stats.general.games_played,
      lvl: gameDatasPlayer.progression.level,
      playTime: Math.round((gameDatasPlayer.stats.general.playtime / 3600))
      //rank: gameDatasPlayer.stats ,
     //allStats: gameDatasPlayer?.stats
      //   rank: gameDatasPlayer.rank,
      //   seasonRank: gameDatasPlayer.seasonRank,
      //,console.log(gameDatasPlayer)
    });
  }; // fin getdata()
 

  useEffect(() => {
    // console.log(getData(props.username));
    // eslint-disable-next-line
    getData(props.username);
// eslint-disable-next-line
  },[props.username]);
  // componentDidMount()

  return (
    <div className="playerCard">
      <div className="banniere">
      <h1 className="username">{player.username}</h1>
        <img alt={player.username} src={player.urlAvatar} />
      </div>
        <section className="statsPlayer">
          <p>rang de season :       <span className="statSpan">{player.seasonRank}</span></p>
          <p>rang :                 <span className="statSpan">{player.rank}</span></p>
          <p>k/d :                  <span className="statSpan">{player.kd}</span></p>
          <p>parties total jouées : <span className="statSpan">{player.totalGamesPlayed}</span></p>
          <p>lvl :                  <span className="statSpan">{player.lvl}</span></p>
          <p>temps joué :           <span className="statSpan">{player.playTime}h</span></p>
        </section>
               {/*    <p>{player.allStats}</p>
                        <StatsButton username={props.username} rank={state.rank} season={state.seasonRank}/> */}
      </div>
  );
}// fin fontion playerCard
export default PlayerCard;
