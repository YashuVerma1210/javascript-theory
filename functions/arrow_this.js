const user = {
    username: "Yashu",
    printMessage: function () {
        console.log(this.username);
        console.log(this);
    }
}

// user.printMessage() // { username: 'Yashu', printMessage: [Function: printMessage] }
user.username = "Verma"
// user.printMessage() // { username: 'Verma', printMessage: [Function: printMessage] }

// console.log(this); // {}

// function print(){
//     let user = "Yashu"
//     console.log(this.user); // undefined
//     // console.log(this); 

//  global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
// }

// print()

// const print2 = function(){
//     let user = "Yashu"
//     console.log(this.user); // undefined
// }

// print2()

// const print3 = () => {
//     let user = "Yashu"
//     console.log(this); // {} node context
//     console.log(this.user); // undefined
// }

// print3()

const sum = (a, b) => a + b;
// implicit return

