let age = 33
console.log(typeof age)



let age1 = "34bfb" 
console.log(typeof age1);



let valueinnumber1 = Number(age1)
console.log(typeof valueinnumber1)
console.log(valueinnumber1)
// In this case the number get converted but it give NaN ie not a number 



let age2 = null
console.log(typeof age2); 



let valueinnumber2 = Number(age2)
console.log(typeof valueinnumber2)
console.log(valueinnumber2)


/**
 * SO we can get "33" => 33 ie an integer
 * true =>1 , false=> 0
 */
let isLoggesIn = 1
let booleanIsLoggedIn = Boolean(isLoggesIn)
console.log(booleanIsLoggedIn)



console.log(typeof booleanIsLoggedIn);
//AN EMPTY STRING OR ARRAY etc WHEN IT IS CONVERTED TO BOOLEAN THEN IT IS CONSIDERED TO BE OF TYPE BOOLEAN AS FALSE  



let str1= ""
console.log(Boolean(str1))



//A NON EMPTY STRING OR ARRAY etc WHEN IT IS CONVERTED TO BOOLEAN THEN IT IS CONSIDERED TO BE OF TYPE BOOLEAN AS TRUE 
let str2 = "shubhu"
console.log(Boolean(str2))



//CONVERTING A NUMBER TO STRING GIVES A STRING
let num = 34
let  numStr = String(num)
console.log(numStr);
console.log(typeof numStr);



//WHEN AN  INTEGER IS CONCATENATED TO STRING THEN FINAL RESULT WILL BE A STRING 
// EXAMPLE:
let n1 = 23
let name = "shubhu"
let userName = n1 + name
console.log(userName); // 23shubhu (which a typeof String)










