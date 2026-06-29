// function saymyname(){
//     console.log("S");
//     console.log("A");
//     console.log("M");
//     console.log("B");
//     console.log("I");
//     console.log("T");
// }
// saymyname();

function addTwoNumbers(number1,number2){  //inside bracket are parameters
    console.log(number1+number2);
}

// addTwoNumbers(4,5); // inside bracket are arguments


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return(`hello ${username} you have logged in`);

}

// console.log(loginUserMessage("sambit"));
// console.log(loginUserMessage());

function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(200,300,400));