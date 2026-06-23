//Object Literals

const mysym = Symbol("id");

const JsUser = {
    name:"Sambit",
    "full name": "Sambit Behera",
    [mysym]:"1234",
    age: 23,
    email: "Sambit@gmail.com",
    Location:"Bhilai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
//console.log(JsUser.full name); // it will give error because full name is not a valid property name
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "sambit.behera8587@gmail.com";
console.log(JsUser.email);


JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
