// PRIMITIVE DATATYPE
/**
 * THERE ARE 7 PRIMITIVE DATATYPE 
 * String , Number, Boolean , null , undefined , Symbol,BigInt
 * 
 */

// THE DTATTYPES ARE DIFFERENTIATED ON BEHALF OF TWO THINGS :
/**
 * 1: How  the data is stored .
 * 2: How the data is accessed from the memory .
 */

// PRIMITIVE DATATYPE :
// 1:Immutable:   cannot be altered after creation.
// 2:Stored by Value: The actual value is stored directly in the variable.
// 3:Fixed Size: They are stored in a fixed-size memory location.

// EXAMPLE
let str = "Hello";
let newStr = str.toUpperCase(); // Operation on the string

console.log(str); // Output: "Hello" (original value remains unchanged)
console.log(newStr); // Output: "HELLO" (a new string is created)



//NON PRIMITIVE DATATYPE
/**
 * THERE ARE 3 NON PRIMITIVE DATATYPE 
 * Array , Objects , Functions .
 */

// NON PRIMITIVE DATATYPE : (OR REFERENCE TYPE)
// 1:Mutable: Values can be altered after creation.
// 2:Stored by Reference or Store by Address: The variable stores a reference (or address) to the memory location where the actual data is stored.
// 3:Variable Size: The size can change as the content changes.

// NOTE: A NON PRIMITIVE DATATYPE  ka return type hamesa object function ya object  hi hota hai .
// EXAMPLE
let obj = { name: "Alice" }; //object
let anotherObj = obj; // anotherObj references the same object  { name: "Alice" };
anotherObj.name = "Bob"; // Modify the object through another reference
console.log(obj.name); // Output: "Bob" (original object is changed)
console.log(anotherObj.name); // Output: "Bob" (same object is referenced)
console .log(typeof obj)

// NOTE :Javascript is a Dynamic type language because here we dont need to define the datatype .

const myFunction = function(){
    console.log("shubhu vishwu");
}

console.log(myFunction)

console.log(typeof myFunction)