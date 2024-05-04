// singleton objects
// those are created with constructor

// Object.create()


// Object literal
// these are not singleton

const mySym = Symbol("key1")
const user = {
    username: "Yashu",
    "full name": "Yashu Verma",
    printName : ()=>{
        console.log(username)
    },
    [mySym]: "MySymbolKey" // this is how we define symbol
}

console.log(user[mySym]); // MySymbolKey, this is how to print symbol

Object.freeze(user)
console.log(user);
//   {
//     username: 'Yashu',
//     'full name': 'Yashu Verma',
//     printName: [Function: printName],
//     [Symbol(key1)]: 'MySymbolKey'
//   }