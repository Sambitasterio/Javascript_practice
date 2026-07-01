const user = {
    username: "sambit",
    price: 999,
    welcomeMessage: function (){
        console.log(`Welcome ${this.username} , welcome to our website`); // this is used to refer current context
    }
}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

const addTwo = (num1,num2) =>{
    return num1 + num2;
} 

console.log(addTwo(4,5));

const addTwo2 = (num1,num2) => num1 + num2; // if we have only one line of code then we can remove the return and curly braces

console.log(addTwo2(4,5));