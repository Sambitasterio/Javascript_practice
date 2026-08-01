const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sambit" , email: "sambit.behera8587@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})