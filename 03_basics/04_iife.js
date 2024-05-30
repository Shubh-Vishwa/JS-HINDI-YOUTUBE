// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


// function name () {
//     console.log("shubham");
// }

// name(); // shubham



//to immediately invoke a function we can due this approach .(iife)
// it is  basically used to create a scope that limits variable access and avoids polluting the global namespace. 
(function name () {
    console.log("shubham");
})(); //shubham
// NOTE :SEMICOLON IS MANDATORY TO WRITE THE IIFE.


((name) => {
    console.log(`DB CONNECTED TEO ${name}`);
})();