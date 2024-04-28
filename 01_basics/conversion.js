let score = "33";
let rate = '12wser'

// console.log(typeof score); // string
// console.log(typeof(score)); // string

let scoreInNumber = Number(score)
// console.log(typeof scoreInNumber); // number

let rateInNumber = Number(rate)
// console.log(rateInNumber); // NaN
// console.log(typeof rateInNumber); // number

// null gets converted to 0
// undefined get converted to NaN
// true gets converted to 1
// false gets converted to 0

// Boolean conversion

let isLogged = 1;
let booleanIsLogged = Boolean(isLogged)

console.log(booleanIsLogged); // got converted to true

// "" => false
// "Hello" => true