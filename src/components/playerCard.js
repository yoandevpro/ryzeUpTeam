import React from 'react';
import { team,platform,API,URL_API} from '../constantes/ENV'
import {getQueueStats,getSeasonStats,getUserStats,getUsername,getTeamStats} from '../apiFunctions'
// import StatsButton from './buttons'
// import fetch from 'unfetch'


//  console.log(fetch) 
 
console.log(getUserStats('D3AD3VIL'));

 class PlayerCard extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                url : `${URL_API}`,
                afficher: true,
                post : {}
                // avatar : API.getGenericStats(this.props.username,platform,'all').then((avatar) => console.log(avatar.avatar_url_146.json()).then(),
                // rank : API.getGenericStats(this.props.username,platform,'all').then((curentRank) => curentRank.stats.general.json()).then(),
                // seasonRank : API.getSesonalStats(this.props.username,platform,'all').then((season) => season.json()).then()
            } 
       
        }    
         componentDidMount(){
             async function fetch() {  
                
                //  window.fetch(this.state.url).then((data) => {
                //      console.log(data)
                //  })
     let result = await API.getGenericStats(this.props.username,platform,'all')
                //   let rank = await API.getSesonalStats(this.props.username,platform,'all')
                  this.setState({post : result})
               console.log(result) 
                
 } 
// (async () => {
//     let result = await API.getGenericStats(this.props.username, platform, 'all');

//     console.log(result); // 1089
// })();

        }
      
        render(){
                return (  
                    <div className='playerCard'>
                        {/* {this.state.post[0]} */}
                         <img key={this.props.username} alt={this.props.username} src={this.state.post}/>
                        {/* <h1 className='username'>{this.props.username}</h1>
                       
                        <p>rang de season :{this.state.seasonRank}</p>
                        <p>rang :{this.state.seasonRank}</p>
                        <StatsButton username={this.props.username} rank={this.state.rank} season={this.state.seasonRank}/> */}
                    </div> 
                )   
        }
    }
    export default PlayerCard
