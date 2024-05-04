// global scope
var a = 400
var b = 400
var c = 1000
var c = 80
var d = 90

var d = function(){
    console.log("Hello")
}

var e = function(){
    console.log("Hello")
}
var e = 10

let f = 70

// var f = function(){ // Cannot redeclare block-scoped variable 'f'. Identifier 'f' has already been declared
//     console.log("Hello")
// }
if(true){
    // block scope, let and const delared variables will not be accessible outside
    var a = 50
    b=40
    // var c = 60; // Cannot redeclare block-scoped variable 'c'. Identifier 'c' has already been declared
}

console.log(a); // 50
console.log(b); // 40

console.log(c); // 80
console.log(d); // [Function: d]

console.log(e); // 10

console.log(f);