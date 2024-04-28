// types of data 
// based on how data type is stored in memory

// primitive or call by value - 7 types

// string
// number
// boolean
// null
// undefined
// symbol - makes value unique
// bigInt - typeof is bigint

let id = Symbol('123')
let id2 = Symbol('123')

const bigNumber = 21828328428462846n;
console.log(typeof bigNumber);

// id != id2 

// non primitive or reference type

// array - object
// object - object
// functions - typeof object function

// JS is dynamically typed language

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object