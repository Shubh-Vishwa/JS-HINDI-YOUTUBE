// Object

/**
 * Singelton object : An object that has only one instace  and that can be accessed from any where .
 */
// const tinderUser = new Object()
// console.log(tinderUser);

// const tinderUser = {}
// console.log(tinderUser)

// note : Both gives the same result but differnce is that first one is singelton object and 2nd one is non singelton.

const user1 = {
    name:"shuham",
    details:{
        class:"10th",
        school:"SJS PUBLIC SCHOOL",
        status : "Bachelor"
    },
    color:"fair"
}

console.log(user1);

console.log(user1.name)
console.log(user1.details)

const obj1= {1:"a" , 2:"b" , 3:"c"}

const obj2= {4:"d",5:"e"}

console.log(Object.assign({},obj1,obj2))
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }

// Object.assign():
/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to.

// @param source1 — The first source object from which to copy properties.

// @param source2 — The second source object from which to copy properties.
// It basically merging multiple objects into one.
 */

// we can also do this by spread operator ie by  the multiple object 
const ob1 = {1:"a",2:"b"}
const ob2 = {3:"c",4:"d"}
const ob3 = {5:"e"}

const newob  = {...ob1,...ob2 , ...ob3}
console.log(newob)

// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }

// HOW  TO ACCES THE KEYS AND VALUE OF OBJECTS:
// SUPPOSE THIS IS THE OBJECT 
const object1 = {
    name:"shubh",
    class:"10th",
    gender:"Male",
}

console.log(Object.keys(object1));//['name', 'class', 'gender']
console.log(Object.values(object1));//['shubh', '10th', 'Male']
//BOTH GIVES THE ARRAY AS AN OUTPUT THAT CONTAINS THE KEYS AND OBJECT.


// To convert an object to a Map using Object.entries().
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
const map = new Map(Object.entries(obj)); //{ 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(map); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }

// NOTE
/**
 * Object.entries() returns an array of a given object's own enumerable string-keyed
 *  property [key, value] pairs.
 */

// Map in js:
// CREATING A MAP IN JS
const mapObj = new Map()
mapObj.set('a', 1);
mapObj.set('b', 2);
mapObj.set('c', 3);

console.log(map); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }


// hasOwnProperty()
/**
 * hasOwnProperty() is a method in JavaScript that is used to check if an object 
 * has a property with a specified name as its own property.
 */
// Syntax
// object.hasOwnProperty(property)

// EXAMPLE
const person = {
firstName: 'John',
lastName: 'Doe'
};

console.log(person.hasOwnProperty('firstName')); // true
console.log(person.hasOwnProperty('age')); // false


// Objects destructuring 
const course = {
    coursename:"JS IN HINDI",
    price:"999",
    courseInstructor:"shubham"
}

course.courseInstructor


// JSON  : IN JSON THE KEY ARE IN STRING FORMAT 
// {
//     "name":"shubham",
//     "gender":"Boy",
//     "Age":"23"
// }