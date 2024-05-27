// Object 
/**
 * There is a two way of declaring the object ie by 
 * 1:literal 
 * 2: constructor 
 */

// NOTE : JAB BHI HAM LITERAL KE THROUGH  OBJECT KOM DECLARE KARTE HAI TAB singelton NAHI BANTA HAI .


// 1:Object Literal Syntax:
const person = {
    name: 'John',
    "sirname":"Vishwakarma",
    age: 30,
    city: 'New York'
  };

console.log(person)
console.log(person.name) // John
console.log(person["name"]) //John
// if the key is written in this way then we can not acces value of that key using dot  operator .
console.log(person['sirname'])
console.log(person.sirname)
// How ever both works fine 



// 2:Using a Constructor Function:
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  
  const person1 = new Person('John', 30, 'New York');
  const person2 = new Person('Jane', 25, 'San Francisco');
  



// 3:Using the new Object() Syntax:
const person3 = new Object();
person3.name = 'John';
person3.age = 30;
person3.city = 'New York';

console.log("person3 object",person3)



//Note:How to use symbol in objeccts 
const symb  = Symbol("key1")
const JsUser = {
    name: "shubham",
    [symb]:"myKey1",// we define symbol inside the square bracket .
    age:23,
    location:"Noida",
    email:"shubhamvishwu@gmail.com"
}
console.log(typeof JsUser[symb]); // since value is of type  string 
console.log(typeof symb);//Symbol since key is of type Symbol.


// NOte:We can also freeze the object value such that non user can change that particular value .
// Object.freeze(JsUser);
// JsUser.name= "SAKSHI CHOTA YOUTUBER"

console.log(JsUser);
// since the user is not able to change the value of the object 

// tom add the another element inside the object 
JsUser.class=10;
console.log(JsUser);
// OUTPUT
// {
//     name: 'shubham',
//     age: 23,
//     location: 'Noida',
//     email: 'shubhamvishwu@gmail.com',
//     class: 10,
//     [Symbol(key1)]: 'myKey1'
//   }


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);
//now the modified Object
// OUTPUT
// {
//     name: 'shubham',
//     age: 23,
//     location: 'Noida',
//     email: 'shubhamvishwu@gmail.com',
//     class: 10,
//     greeting: [Function (anonymous)],
//     greetingTwo: [Function (anonymous)],
  //   [Symbol(key1)]: 'myKey1'
  // }