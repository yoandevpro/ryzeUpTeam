import PlayerCard from './playerCard'
import {team,ENVyoan, ENVvincent , ENVthibault , ENVoscar , ENVpaul , ENValex} from '../constantes/ENV.js'
console.log(team)
    // const cardTeam = [yoanCard,vincentCard,thibaultCard,oscarCard,pauloCard]
function PlayerList(){
    return(
        // team.map((player, key) => <div className='playerList'><PlayerCard key={key} username={team[player]}/></div>)
        <div className='playerList'>    
            <PlayerCard username={ENVyoan}/>
            <PlayerCard username={ENVvincent}/>
            <PlayerCard username={ENVthibault}/>
            <PlayerCard username={ENVoscar}/>
            <PlayerCard username={ENVpaul}/>
            <PlayerCard username={ENValex}/>
        </div>
    )
}
export default PlayerList