import PlayerCard from './playerCard'
import {ENVyoan, ENVvincent , ENVthibault , ENVoscar , ENVpaul , ENValex} from '../constantes/ENV'

    // const cardTeam = [yoanCard,vincentCard,thibaultCard,oscarCard,pauloCard]
function PlayerList(){
    return(
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