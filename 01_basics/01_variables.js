const accountId = 1234567890;
let accountEmail = "user@example.com"
var accountPassword = "1234"
accountCity = "Delhi"


//accountId = 2
accountEmail = "abcd1234@gmail.com";
accountPassword = "abcd"
accountCity = "Mumbai"

/*
Dont use var for variable declaration as it is function scoped and can lead to unexpected behavior. Use let or const instead, which are block scoped and provide better control over variable scope and immutability.
*/

console.log(accountId);
console.log([accountEmail, accountPassword, accountCity]);