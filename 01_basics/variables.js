const domain = 'Banking';
let username = 'John';
var surname = 'Doe';
city = 'Venice'
let position; // undefined

// domain = 'Finance' // Invalid operation as const primitive can not be changed 
username = 'Jane'
surname = 'Clover'
city = 'Denver'

// Prefer to use let over var, due to block and functional scope issues.

// prints data in tabular format.
console.table([domain,username,surname,city,position])