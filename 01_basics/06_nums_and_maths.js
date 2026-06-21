const score = 400;

console.log(score);
console.log(typeof score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.956;
console.log(otherNumber.toPrecision(3)); // it will round the number to 3 decimal places and output will be 124 as 123.9 will be rounded to 124


const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));


//************************************Maths************************************ */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,5,6,7));
console.log(Math.max(3,4,5,6,7));
console.log(Math.random());
console.log((Math.random()*10)+1);