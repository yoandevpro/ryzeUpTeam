// import { render, screen } from '@testing-library/react';
// import App from './App';

import r6operators from "r6operators"


// test('renders learn react link', () => {
//   render(  <React.StrictMode>
//     <App />
// {/* <PlayerList/> */}
// </React.StrictMode>,
// document.getElementById('root'));

//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import {getSeasonStats} from './apiFunctions'
// getSeasonStats('D3AD3VIL');
localStorage.setItem('name', 'yo')

console.log(localStorage.getItem('name'));
let attackers = [];
let defenders = [];
console.log(r6operators.maverick.toSVG());
var allAgentList = Object.keys(r6operators).map(function(cle) {
    return  r6operators[cle];
});
// console.log(Object.values(allAgentList[0]));


  // for(i= 0; i <= allAgentList.length; i++){
  //   let roleDescriptor = Object.getOwnPropertyDescriptor(allAgentList[i], 'role')
  //   if(roleDescriptor.value === 'Attacker'){
  //     attackers.push(allAgentList[i])
  //   }else if(roleDescriptor.value === 'Defender'){
  //     defenders.push(allAgentList[i])
  //   }
  // }
  console.log(attackers,defenders)




// for(i = 0 ; i <= allAgentList.length; i++){
//   if(Object.values(allAgentList[i]) === 'Attacker'){
//     attackers.push(allAgentList[i])
//   }else if(Object.values(allAgentList[i]) === 'Defender'){
//     deffenders.push(allAgentList[i])
//   }
// }

// allAgentList.forEach((agent) => console.log(agent.role));

// r6operators.valkyrie.toSVG()
// r6operators.maverick.toSVG()






// console.log(roleDescriptor.value)
// console.log(allAgentList);

// for(i = 0 ; i <= allAgentList.length; i++){
//   for(attackerID = 0; attackerID <= allAgentList.length; attackerID++){
//     if(allAgentList[attackerID].role === 'Attacker'){
//       attackers.push(attackerID)
//     }
//   }
//   for(deffenderID = 0; deffenderID <= allAgentList.length; deffenderID++){
//     if(allAgentList[deffenderID].role === 'Defender'){
//       attackers.push(deffenderID)

//     }
//   }
// }




// named exports

// r6operators.valkyrie.toSVG()
// r6operators.maverick.toSVG()


// console.log(r6operators);
