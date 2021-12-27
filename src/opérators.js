import r6operators, { maverick } from "r6operators"
// default export

import { ace, getSVGIcon } from "r6operators"
// named exports

r6operators.valkyrie.toSVG()
r6operators.maverick.toSVG()

const attackers = [];
const deffenders = [];
console.log(r6operators);

// {
// 	  id: 'alibi',
// 	  name: 'Alibi',
// 	  role: 'Defender',
// 	  unit: 'GIS',
// 	  ratings: {
// 		  health: 1,
// 		  speed: 3,
// 		  difficulty: 3
// 	  },
// 	  meta: {
// 		  gender: 'f',
// 		  country: 'it',
// 		  season: 'Y3S2',
// 		  height: 171,
// 		  weight: 63
// 	  },
// 	  bio: {
// 		  real_name: 'Aria de Luca',
// 		  birthplace: 'Tripoli, Lybia'
// 	  },
// 	  svg: {
// 		  contents: [SVG Contents],
// 		  attributes: {
// 			  xmlns: 'http://www.w3.org/2000/svg',
// 			  viewBox: '0 0 350 350',
// 			  style: 'enable-background:new 0 0 350 350',
// 			  space: 'preserve',
// 			  class: 'r6operators r6operators-alibi'
// 		  }
// 	  },
// 	  toSVG: [Function]
// }

r6operators.alibi.toSVG()
// <svg class="r6operators r6operators-alibi" ... >...</svg>

r6operators.alibi.toSVG({ class: "large", "stroke-width": 2, color: "red" })
// <svg class="r6operators r6operators-alibi large" stroke-width="2" color="red" ... >...</svg>
console.log(getSVGIcon(maverick));