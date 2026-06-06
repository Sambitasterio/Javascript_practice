"use strict"; // treat all JS code as newer version

//alert("Hello World!"); we are using node js, so we will use console.log instead of alert

let name = "Sambit" // string data type
let age  = 23 // number data type also 2 to the power of 53 -1
let isApproved = false // boolean data type
let firstName; // undefined data type, it means the variable has been declared but not assigned a value yet
let BigNumber = 9007199254740991n; // bigint data type, it is used to represent integers larger than 2^53 - 1
let CCID = null; // null data type, it represents the intentional absence of any object value
let symbol = Symbol("id"); // symbol data type, it is used to create unique identifiers for objects and mostly used in react js

console.log(typeof age);
console.log(typeof name);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof BigNumber);
console.log(typeof CCID);
console.log(typeof symbol);