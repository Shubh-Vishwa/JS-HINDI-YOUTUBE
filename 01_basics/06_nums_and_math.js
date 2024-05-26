//NUMBER 
/**
 * There are two ways of declaring the number :
 * 1: const num = 34
 * 2: const num = new Number(34)
 */


const score = 400
console.log(score);//400

const balance = new Number(100)// it will always give the object .
console.log(balance);//[Number: 100]
console.log(typeof balance); //object

console.log(balance.toString().length);
console.log(typeof balance)

let num = balance.toFixed(1)
console.log(typeof num) // return typw will bw of string 
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

// various number operation
/**
 * 1:toString() => Converts a number to a string representation but doesnot  effect hte original number.
 * 2:toFixed() => Formats a number to a specified number of decimal
 *               places and rounds the decimal and returns it as a string.
 *               if we pass 0 inside this then it returns the only integer part of the number.
 * 3:toPrecision() => Formats a number to a specified length (number
 *                    of significant digits) and returns it as a string.
 * 4:toLocalString()  => Converts a number to a string, 
 *                       using locale-specific settings to format the number (e.g., adding commas as thousands separators). 
 */

// EXAMPLE:
// let num = 123;
// let str = num.toString();
// console.log(str); // Output: "123"
// console.log(typeof str); // Output: "string"




// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// Math.random()  :=> It always gives the value in between the 0 and 1 .
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//THIS IS THE APPROACH FOR TO   GENERATE THE RANDOM NUMBER BETWEEN THE GIVEN MAX AND MIN  NUMBER .
