const name = "shubham"
console.log(name)


console.log(`Hello ${name} ? How are you?`)

// ANOTHER WAY OF DECLARING A STRING 
const name2 = new String('shubhu')
console.log(name2)


/**
 * THERE ARE SEVVERAL MOST USED INBUILT METHOD IN STRING ARE :
 * 1:CharAt()=>  It returns the character at that particular index .
 * 2:indexOf() => Returns the index of the first occurrence of a specified value in a string.
 *                 If the value is not found, it returns -1.
 *   lastIndexOf() => The lastIndexOf() method returns the index of the last occurrence of 
 *                    a specified text in a string:
 *                    Both indexOf(), and lastIndexOf() return -1 if the text is not found.
 * 3:substring() =>Extracts a part of a string and returns it as a new string.
 *                 You can specify the start and end indexes.
 * 4:slice() =>Extracts a part of a string and returns it as a new string. 
 *             You can specify the start and end indexes. It is similar to substring() but also supports negative indexes.
 * 5:trim() => Removes whitespace from both ends of a string.
 *   trimStart()=> Removes whitespace from start  of a string.
 *   trimEnd() => Removes whitespace from end of a string.
 * 6:replace() => This method replaces a specified value with another 
 *                value in a string and return the new string.
 * 7:includes() => Determines whether a string contains the characters of a specified string.
 *                  Returns true or false.
 * 8:split() =>  Splits a string into an array of substrings, based on a specified separator string.
 * 9:toUpperCase() => A string is converted to upper case with toUpperCase():
 * 10:toLowerCase() => A string is converted to lower case with toLowerCase():
 * 
 */
// EXAMPLE:
let str1 = "Hello, World!";
let char1 = str1.charAt(7);
console.log(char1); // Output: "W"


let str2 = "Hello, World!";
let index2 = str2.indexOf("o");
console.log(index2); // Output: 4


let str3 = "Hello, World!";
let index3 = str3.indexOf("o");
console.log(index3); // Output: 4


let text = "Please locate where 'locate' occurs!";
let l_index = text.lastIndexOf("locate");
console.log(l_index)
let str4 = "Hello, World!";
let part4 = str4.substring(0, 5);
console.log(part4); // Output: "Hello"


let str5= "Hello, World!";
let part5 = str5.slice(0, 5);
console.log(part5); // Output: "Hello"
let partNegative6 = str5.slice(-6, -1);
console.log(partNegative6); // Output: "World"


let str6 = "   Hello, World!   ";
let trimmedStr6 = str6.trim();
console.log(trimmedStr6); // Output: "Hello, World!"


let str7 = "Hello, World!";
let newStr7 = str7.replace("World", "Universe");
console.log(newStr7); // Output: "Hello, Universe!"


let str8 = "Hello, World!";
let hasWorld8 = str8.includes("World"); 
console.log(hasWorld8); // Output: true


let str9 = "Hello, World!";
let parts9 = str9.split(", ");
console.log(parts9); // Output: ["Hello", "World!"]


