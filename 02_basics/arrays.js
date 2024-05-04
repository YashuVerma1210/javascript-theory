// arrays

const arr = [1,2,3,4,5] // are resizable

// indexing starts with 0

// array copies create shallow copies

// Shallow copies - which share the same references
// Depp copies - which does not share same references

// methods related to array

 arr.push(6)
//  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

 arr.pop()
//  console.log(arr); // [ 1, 2, 3, 4, 5 ]

 arr.unshift(45)
//  console.log(arr); // [ 45, 1, 2, 3, 4, 5 ]

 arr.shift()
//  console.log(arr); // [ 1, 2, 3, 4, 5 ]

//  console.log(arr.includes(6)); // false
//  console.log(arr.indexOf(6)); // -1
//  console.log(arr.join()); // 1,2,3,4,5

 // slice , splice

 const ar1 = [1,2,3,4,5,6]

 console.log(ar1); // [ 1, 2, 3, 4, 5, 6 ]

 const ar2 = ar1.slice(1,4) // incldes 1 but not 4, create a copy, means original array wont be changed

 console.log(ar2); // [ 2, 3, 4 ]
 console.log(ar1); // [ 1, 2, 3, 4, 5, 6 ]

 const ar3 = ar1.splice(1,4) // incldes 1 and 4, original array will be changed

 console.log(ar3); // [ 2, 3, 4, 5 ]
 console.log(ar1); // [ 1, 6 ]