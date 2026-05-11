/* Prototypes in JavaScript

Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

*/

function Animal (){}
  Animal.prototype.speak=function(){
    return `Animal speaking`;
  }

function Dog (){}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  return`woof!`;
};
const myDog = new Dog();

console.log(myDog.bark());
console.log(myDog.speak());


/* Functional Constructor and Errors:


Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
*/

function person(name,age){
  this.name = name;
  this.age = age;
  this.greet = function(){
  return`Hello, my name is ${this.name}`;
};
}
const Abhinav = new person('Abhinav',23);
console.log(Abhinav.greet());


/*
Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.
 */


function Person(name,age){
  if(age<=0){
    throw Error('Please enter valid age')
  }
  this.name = name;
  this.age = age;

  this.greet = function(){
    return `Hello my name is ${this.name}`
  }
}
// Extra code only for understanding.

try{
const data = new Person ('Abhinav',-23);
console.log(data.greet());
//console.log('Age:',data.age);
}
catch(error){
  console.log("Correct your details",error.message);
  
  const data2 = new Person('Yamraj',5);
  console.log("Naam:",data2.name);
  console.log("age:",data2.age);
  
  console.log("Advise: please correct your details,",error.message);
  }

