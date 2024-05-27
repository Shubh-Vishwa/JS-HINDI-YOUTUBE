const arr1 = ["shubham","sachin"]
const arr2 = ["saurabh"]

// console.log(arr1.concat(arr2)) // []
const arr3 = arr2.push(arr1) // returns 3
console.log(arr3) // 2 // return the length of the arr2 
console.log(arr2) // [ 'saurabh', [ 'shubham', 'sachin' ] ]


/**
 * flat(number):=> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Array  = another_Array.flat(Infinity) // we can also specify thee level of depth of spliting the  subarray.
console.log(real_another_Array)


// Array.isArray  :=> It is basically use dto check the ibject type weather it is an array  or not  and returns the boolean value .
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray('hello')); // Output: false
console.log(Array.isArray({a: 1, b: 2})); // Output: false
console.log(Array.isArray(undefined)); // Output: false

//Array.from  :=>  it is basically used to convert the any kind of object into the array.
const str = "hello";
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']
console.log(Array.from({name: "hitesh"}))//output :=> [] // interesting for the interview level.
/**
 * here it gives an  empty array because it could not specify  niether the key nor the value , So it return the empty array so here we need to  specify the key or value to
 *  convert them into array.
 */


