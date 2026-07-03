// Immediately Invoked Function Expression (IIFE)

(function(){
    console.log("IIFE");
})();

( ()  => {              // parameter then arrow function then body of the function
    console.log("IIFE");
})()   