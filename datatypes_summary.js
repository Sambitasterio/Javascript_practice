//Primitive

//7 types of data : string, number, boolean, undefined, bigint, null, symbol

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id===anotherId); // it will give false because symbols are unique and even if they have the same description, they are not equal

//But why did it use === because when we use the == operator, JavaScript will convert the symbols to strings before comparing them, so they will be equal because they have the same description, but when we use the === operator, JavaScript will not convert the symbols to strings and will compare them as they are, so they are not equal


// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["Batman", "Superman", "Flash"];
let myObj = {
    name:"Sambit",
    age: 23,
}

const MyFunction = function(){
    console.log("Hello World");
}


//*******************************************************MEMORY ********************************************/

//stack (Primitives) and heap (Reference)

let myName = "Sambit";

let anotherName = myName; // it will create a copy of the value of myName and assign it to anotherName, so they are stored in different memory locations in the stack

anotherName = "Sam";

console.log(myName);
console.log(anotherName);


let userOne = {
    Name: "Sambit",
    Age:23
}
let userTwo = userOne; // it will create a reference to the same object in the heap, so they are stored in the same memory location in the heap

userTwo.Age  = 24;

console.log(userOne);
console.log(userTwo);