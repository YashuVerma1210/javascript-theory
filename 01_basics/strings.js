// string interpolation - modern syntax

const my_name = "Yashu"

const lastname = "Verma"

console.log(`Hi ! My name is ${my_name} ${lastname}`);

console.log(my_name.toUpperCase()); // conerts in to upper case but won't change the original value
// because string is a primitivite data type, stored in stack, operations performed will be on copy of value not reference

const obj = {
    firstname:"Yashu"
}

console.log(obj.firstname.toUpperCase());
// it won't change the value as well
console.log(obj);

// in subString you cany give negative values
// in slice negative values can be given

console.log(my_name.substring(0,2));
console.log(my_name.slice(-4,2));

console.log("    Yashu    ".trim());