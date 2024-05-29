//arrow function 
// An arrow function in JavaScript is a shorter way to write a function.
// SYNTAX:Syntax: (parameters) => expression
// EXAMPLE:

// Traditional function
function add(a, b) {
    return a + b;
  }
console.log(add(9,3)); // 12
  
//   Arrow function
// const add = (a, b) => a + b;
// console.log(add(9,3))

// this keyword in JSN 
const  username = {
  name:"sachin",
  class: function(){
    console.log(`${this.name},is a good boy`);
  }
}

username.class()

// HERE THIS REFER TO THE CURRENT CONTEXT .

function Person(name) {
  this.name = name;
}

const person1 = new Person('Bob');
console.log(person1.name); // Output: Bob





// const chai = function () {
//   let username = "histesh"
//   console.log(this);
// }

// chai()//undefined



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))//{ username: 'hitesh' }

//object ko return karne ke liye hame ushe paranthesis me wrap karna hin padega.Agar ham nahi karnege to vo undefined  dega .

const addTwo1 = (num1, num2) => {username: "hitesh"}
console.log(addTwo1(3, 4))// undefined

