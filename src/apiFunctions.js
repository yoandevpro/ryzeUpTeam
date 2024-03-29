   import {team, platform,API} from './constantes/ENV'
   function minuteTimerDown(){
    let minute = 60;
      setInterval(()=> {
        minute===0? minute = 60 : minute--
        document.getElementById('minuteTimer').textContent = minute;
      },1000)
   }
   function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    console.log(`str value :${str} and strArr ${strArray}` );
    return -1;
}

 
    function toObject(arr){
      var rv = {};
      for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
      return rv;
    }
   console.log(toObject(team))

   function getTeamStats(){
            if(typeof team.forEach(player => player) !== 'string' && typeof platform !== 'string'){
               console.log('please enter string parameters');
            }else{
              API.getGenericStats(team.forEach(player => player), platform, 'all').then(userStats => console.log(userStats))
           }
      
    }

   
    
    // inputRoaster
    // submit
    
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
  
    export {getQueueStats,getSeasonStats,getUserStats,getUsername,getTeamStats,minuteTimerDown,searchStringInArray}