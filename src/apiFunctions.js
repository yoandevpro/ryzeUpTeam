   import {team, platform,API} from './constantes/ENV'
   function getTeamStats(){
            if(typeof team.forEach(player => player) !== 'string' && typeof platform !== 'string'){
               console.log('please enter string parameters');
            }else{
              API.getGenericStats(team.forEach(player => player), platform, 'all').then(userStats => console.log(userStats))
           }
      
    }
    
    //  async function getTeamStats(){
    //      for(player = 0;player <= team.length ; player++){
             
    //          if(typeof team[player] === "string" && typeof platform === "string"){
                 
    //             let userStats = await API.getGenericStats(team[player], platform, 'all')
    //             userStats
    //            console.log(userStats); 
    //             console.log(team[player])
    
    //          }else{
    //              console.error('please enter string parameter') 
    //          }
    //      }
    //  }
function getUserStats(player){
  if(typeof player === "string"){
    API.getGenericStats(player, platform, 'all').then(userStats => console.log(userStats.stats))
  }else{
    console.log('please enter string parameter') 
    }
}
  function getQueueStats(player){
    if(typeof player === "string"){
      API.getGenericStats(player, platform, 'all').then(userQueue => console.log(userQueue.stats.queue))
    }else{
      console.log('please enter string parameter') 
      }
  }
    function getSeasonStats(player){
      if(typeof player === "string"){
        API.getSesonalStats(player, platform, 'all').then(userSeasonalStats => console.log(userSeasonalStats))
      }else{
        console.log('please enter string parameter') 
      }
    }
      function getUsername(player){
        if(typeof player === "string"){
          API.getGenericStats(player, platform, 'all').then( userName => console.log(userName.aliases[0].username))
          }else{
            console.log('please enter string parameter') 
          }
      }
    export {getQueueStats,getSeasonStats,getUserStats,getUsername,getTeamStats}