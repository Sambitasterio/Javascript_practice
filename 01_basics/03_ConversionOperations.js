let score = "19";// but if score is "19a" then it will be NaN (Not a Number) because it cannot be converted to a number and if null or undefined is converted to a number then it will be 0 and if true is converted to a number then it will be 1 and if false is converted to a number then it will be 0

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"19" is a string and 19 is a number, so they are not strictly equal but they are loosely equal because JavaScript will convert the string to a number before comparing them
//"19a" is a string and NaN is a number, so they are not strictly equal and they are not loosely equal because JavaScript cannot convert the string to a number
//undefined it will give NaN because it cannot be converted to a number
//null it will give 0 because it can be converted to a number
//true it will give 1 because it can be converted to a number
//false it will give 0 because it can be converted to a number