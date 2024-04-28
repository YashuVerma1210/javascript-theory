// console.log("2" > 1); // true
// console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// the reason is equality check and comparison (> < >= <=) works differently
// comparison converts null to number and treat as 0

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === strict check, no coversion