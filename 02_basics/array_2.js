const arr1 = [1, 2, 3]

const arr2 = [4, 5, 6]

// arr1.push(arr2)
// console.log(arr1); // [ 1, 2, 3, [ 4, 5, 6 ] ]

const arr3 = arr1.concat(arr2) // does not change org array
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [...arr1, ...arr2]
// console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

const arr5 = [1, [2, [3, [5, 6, [7]]]]]
const arr6 = arr5.flat(Infinity) // flats the map to infinity level, you can provide levels

// console.log(arr6); //[ 1, 2, 3, 5, 6, 7 ]

console.log(Array.isArray("Yashu")); // false
console.log(Array.from("Yashu")); // [ 'Y', 'a', 's', 'h', 'u' ]
console.log(Array.from({username:"Yashu"})); // [] , need to specify wheter from key or values

const a = 20;
const b = 30;

console.log(Array.of(a,b)); // [ 20, 30 ]