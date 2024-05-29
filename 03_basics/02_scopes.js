// let a =1
// const b = 2
// var c = 3

// console.log(a)//1
// console.log(b)//2
// console.log(c)//3

if(true){
    let a =1
    const b = 2
    var c = 3     
}

// console.log(a)//ERROR
// console.log(b)//ERROR
console.log(c)//3
// SO THIS IS THE CASE WHERE var CREATES AN ISSUE SO THATS WHY WE AVOID THE USE OF VAR BECAUSE IT CREATES PROBLEM IN SCOPE AS PER THIS IF  BLOCK THE VALUE OF THE C SHOULD NOT GET PRINTED.

// GLOBAL SCOPE
var globalVar = "I am a global variable";

function displayGlobalVar() {
  console.log(globalVar); // Accessible
}

displayGlobalVar();
console.log(globalVar); // Accessible


// EXAMPLE
let a = 10
const b = 3
if(true){
    let a =  2
}

console.log(a)
console.log(b)



// nested scope 
function one(){
    const username = "shubham"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)// ReferenceError: website is not defined  since access outside the function.
    two()
}


one()

// CLOSURE
// A closure is created when a function is defined within another function,
//  and the inner function retains access to the outer function’s variables

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  




//   ====================================================================================================================================
// console.log(addnnum(2,4))//6 // function called 

// function addnnum(a,b){ // function decleratiion
//     return a+b;
// }


// console.log(addnum(2,4))// function called   
// const addnum = function(a,b){//function decleration
//     return a+b;
// }
// NOTE :
/**
 * IN THIS WAY OF DECLARING FUNCTION  IF THE FUNCTION IS CALLED BEFORE IT  IS DECLARED THEN IT WILL GIVE  YOU ERROR  AS ReferenceError: Cannot access 'addnum' before initialization
 */

const addnum = function(c,d){//function decleration ke sath sath usko ek variable me hold kar diya hai .
    return c+d;
}
console.log(addnum(2,4))// function called 
