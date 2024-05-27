//shallow copy
/**
 *  shallow copy of an object is a copy whose properties share the same references (point to the same memory locations)
 *  as those of the original object.
 */


//deep copy
/**
 * A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects 
 * or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect 
 * the original object.
 */


//array :
// JavaScript arrays are resizable and can contain a mix of different data types.
const myArr =[0,1,2,4,5]
const myHeros = ['shaktiman' , "naagraj" , "Hatim" , "Dodo"]

console.log(myArr[0])

// methods in array
/**
 * 1:=>length
 * 2:=>push
 * 3:=>pop
 * 4:=>shift 
 * 5:=>unshift
 * 6:=>sort
 * 7:=>reverse
 * 8:=>splice => in this method arr.splice(x,y,a,b,c) => x and y is the starting and ending index and a, b ,c is the value that need to be filled in between the array of these index.
 * 9:=>concat
 * 10:=>includes
 * 11:=>indexof
 * 12:=>lastIndexOf
 * 13:=>join
 * 14:=>slice
 * 15:=>toString
 * 16:=>map
 */

// example:
let arr1 = [1, 2, 3];
console.log(arr1.length); // Output: 3

let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]

let arr3 = [1, 2, 3];
let lastElement = arr3.pop();
console.log(lastElement); // Output: 3
console.log(arr3); // Output: [1, 2]

let arr4 = [1, 2, 3];
let firstElement = arr4.shift();
console.log(firstElement); // Output: 1
console.log(arr4); // Output: [2, 3]

let arr5= [1, 2, 3];
arr5.unshift(0);
console.log(arr5); // Output: [0, 1, 2, 3]

let arr6 = [1, 2, 3, 4];
arr6.splice(1, 2, 'a', 'b');
console.log(arr6); // Output: [1, 'a', 'b', 4]

let arr7 = [3, 1, 4, 2];
arr7.sort();
console.log(arr7); // Output: [1, 2, 3, 4]

let arr8 = [1, 2, 3];
arr8.reverse();
console.log(arr8); // Output: [3, 2, 1]

let arrr1 = [1, 2];
let arrr2 = [3, 4];
let newArray = arrr1.concat(arrr2);
console.log(newArray); // Output: [1, 2, 3, 4]

let arr9 = [1, 2, 3];
console.log(arr9.includes(2)); // Output: true

let arr10 = [1, 2, 3];
console.log(arr10.indexOf(2)); // Output: 1

let arr12 = [1, 2, 3, 2];
console.log(arr12.lastIndexOf(2)); // Output: 3

let arr13 = [1, 2, 3];
console.log(arr13.join('-')); // Output: "1-2-3"

let arr14= [1, 2, 3, 4];
let newArray1 = arr14.slice(1, 3);
console.log(newArray1); // Output: [2, 3]

let arr15 = [1, 2, 3];
console.log(arr15.toString()); // Output: "1,2,3"

let arr16 = [1, 2, 3];
let newArrr = arr16.map(x => x * 2);
console.log(newArrr); // Output: [2, 4, 6]

let arr71 = [1, 2, 3, 4];
arr71.splice(1, 2, 'a', 'b','c');
console.log(arr71); // Output: [1, 'a', 'b', 4]'

