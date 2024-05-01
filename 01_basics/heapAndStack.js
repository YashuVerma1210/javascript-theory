// Primitive (Stack)

let my_name = "Yashu";
let my_name2 = my_name
my_name2 = "Verma"
console.log(my_name);
console.log(my_name2);

// copy by value

// Non Primitive (Heap)

let user = {
    name:"Yashu",
    lastname:"Verma"
}

let user_2 = user;
user_2.name = "Surender";

// copy by refernce

console.log(user);
console.log(user_2);