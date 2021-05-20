import React from 'react'
import {getUsername, getSeasonStats,getTeamStats} from '../apiFunctions'
class StatsButton extends React.Components{
    constructor(props){
        super(props)
        this.state = {
           username: this.props.username
        }
        this.type ={// i would like create different type of buttons about function's name
            username : this.props.username,
            rank : this.props.rank,
            season : this.props.season
        }
    }
  render(){
      return(
        <div className="buttons">
            <button onClick={getUsername(this.state.username)}>
                voir mon nom utilisateur{this.type.username}
            </button>
            <button onClick={getTeamStats()}>
                voir les stats de la team
            </button>
            <button onClick={getSeasonStats(this.state.username)}>
                voir mon rang de saison{this.type.season}
            </button>
        </div>
      ) 
      
  }

}
export default StatsButton