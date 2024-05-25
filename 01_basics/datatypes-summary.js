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

// NOTE: A NON PRIMITIVE DATATYPE  ka return type hamesa function Object ya Object  hi hota hai .
// EXAMPLE
let obj = { name: "Alice" }; //object
let anotherObj = obj; // anotherObj references the same object  { name: "Alice" };
anotherObj.name = "Bob"; // Modify the object through another reference
console.log(obj.name); // Output: "Bob" (original object is changed)
console.log(anotherObj.name); // Output: "Bob" (same object is referenced)
console .log(typeof obj)

// NOTE :Javascript is a Dynamic type language because here we dont need to define the datatype .

const myFunction = function(){
    // console.log("shubhu vishwu");
    return "shubhu vishwu";
}

console.log(myFunction())
console.log(typeof myFunction) // return type is  function  ie function object  ham kah sakte hai.



// =================================================================================================================================================
// Stack (Primitive)  , Heap (Non Primitive)

/**
 * In stack we always get the reference of the copy value not the originnal value.
 * But In Heap we get the refrence of the original value .
 * This is the reason why in case of primitive datatype when we change the value  in assign varible the original 
 * variable value remains unchanged but  in case of Non primitive the refrence of the original value is given to the 
 * another variable  so when we change the value in another variable  the change is reflected in the original value .
 */

// EXAMPLE
let youtubename = "ITBOOM CHANGER"
let anotherYoutubename = youtubename 
anotherYoutubename = "BROCODE"
console.log(`youtubename:${youtubename}` , `anotherYoutubename:${anotherYoutubename}`)

// since here the original vlaue remains uneffected this is because the copy va;ue refrence is given to the another variable.

//EXAMPLE
let user1 = {name:"shubhu"}
let user2 = user1
user2.name= "aman"
console.log(`user1:${user1.name}`,`user2:${user2.name}`)

// So here the original value refernce is given to the user2 due to which the change in original vlaue is seen .

