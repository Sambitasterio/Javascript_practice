let a = 10;
const b = 20;
var c = 30;


if(true){
    let a = 40; //this is a block scoped variable
    const b = 30; // this is a block scoped variable
    var c = 60; // this is a function scoped variable
}

// console.log(a); // this will print 40
// console.log(b); // this will print 30
// console.log(c); // this will print 60

function one(){
    const username = "Sambit";

    function two(){
        const website = "Youtube";
        console.log(username); // it will print Sambit because username is defined in the local scope
    }
    // console.log(website); // it will print undefined because website is not defined in the global scope
    two(); // but if we remove this then sambit will not be printed

}

// one();


if(true){
    const username = "sambit";
    if(username==="sambit"){
        const website = "Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

/***************************************************************INTERESTING******************************************/

function addTwoNumbers(num){
    return num + 2;
    console.log(num);
}

console.log(addTwoNumbers(5));