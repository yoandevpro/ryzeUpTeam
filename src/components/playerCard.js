import React from 'react';
import { platform,API} from '../constantes/ENV'
import StatsButton from './buttons'
//let url = `https://api2.r6stats.com/public-api/stats/${username}/${platform}/generic`
 class PlayerCard extends React.Components{
        constructor(props){
            super(props)
            this.state = {
                afficher: true,
                avatar : API.getGenericStats(this.props.username,platform,'all').then(avatar => avatar.avatar_url_146),
                rank : API.getGenericStats(this.props.username,platform,'all').then(curentRank => curentRank.stats.general),
                seasonRank : API.getSesonalStats(this.props.username,platform,'all').then(season => season)
            } 
            // componentDidMount()
        }
        render(){
                return (  
                    <div className='playerCard'>
                        <h1 className='username'>{this.props.username}</h1>
                        <img alt={this.props.username} src={this.state.avatar}/>
                        <p>rang de season :{this.state.seasonRank}</p>
                        <p>rang :{this.state.seasonRank}</p>
                        <StatsButton username={this.props.username} rank={this.state.rank} season={this.state.seasonRank}/>
                    </div> 
                )   
        }
    }
    export default PlayerCard
