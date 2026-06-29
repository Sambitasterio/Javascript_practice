let a = 10;
const b = 20;
var c = 30;


if(true){
    let a = 40; //this is a block scoped variable
    const b = 30; // this is a block scoped variable
    var c = 60; // this is a function scoped variable
}

console.log(a); // this will print 40
console.log(b); // this will print 30
console.log(c); // this will print 60