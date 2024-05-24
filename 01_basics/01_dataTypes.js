// "use strict"; // Treat all JS code as a newer version .
// alert(3+3); //We are using Node js not a browser so we can not test right now as alert.
a=8
console.log(a);

/**
 * impact of the use strict for undeclared variable in previous version works fine,
 * But when we write this after the  use of "use strict" it throws error  it means 
 * what ever the code you have written will now work according to the new version of js .
 */


let name = "shubham"
let age = 23
let isloggin = true

// PRIMITIVE DATATYPE 
                    //number => 2^53   ie ramnge 
                    //bigint  // we dont use often such a large number ie  used in trading 
                    // string => "" or '' but prefer double string 
                    // boolean => true / false
                    //null  => standalone value 
                    // undefined =>  abhi value assign nahi hui hai 
                    // symabol => They are used to represent unique values that 
                    // can be used as identifiers or keys in objects.

// NOTE : When adding a number and a string, JavaScript will treat the number as a string.
// let  str= 23+"shubhu"
// console.log(str);

// DatatType Check
// 1> typeof or typeof() => this is basically used for checking the datatype 

console.log(typeof undefined);//undefined basically khud me hi type hai 
// output:undefined 
console.log(typeof null); // null  is basically a object 
//output : object


 