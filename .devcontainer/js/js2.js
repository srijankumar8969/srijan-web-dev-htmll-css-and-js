"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")
//primary objects are given memory in stack and are accessed as copy every time

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
//---------------------------objects-------------------------------
//non-primary objects are given memory in heap and ther reference provided eveery time

let shyam={
    name:"Srijan",
    rollno:"23AG10043",
    Department:"Agriculture"
}
console.log(shyam);
console.log(shyam.name);
console.log(shyam["name"]);//  upar wale ki tarah hi kaam karta hai
shyam["favourite"]="Bhindi";
console.log(shyam);
shyam.friend="Tuhina Rai";
console.log(shyam);