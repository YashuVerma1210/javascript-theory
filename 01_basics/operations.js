console.log(2 + 2);
console.log(3 - 2);
console.log(2 ** 2); // raise to power
console.log(4 % 2); // modulus

let str = "Hello"
let str2 = " World!"
console.log(str + str2);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// string comes first convert all into string
// string comes last, compute others normally and then conversion
// + number to string conversion
// - string to number conversion

console.log(+true); // 1
// console.log(true+); // unexpected, throws error
console.log(+''); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // don't code like this, readability issue