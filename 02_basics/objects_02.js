const user = new Object()

user.id = "1"

console.log(user);

const obj1 = { 1: "a" }
const obj2 = { 2: "b" }

const obj3 = { ...obj1, ...obj2 }

const obj4 = Object.assign({}, obj1, obj2)

console.log(Object.keys(obj4));
console.log(Object.entries(obj4));

console.log(obj4.hasOwnProperty("1")); // to check if property exist

// Object destructuring