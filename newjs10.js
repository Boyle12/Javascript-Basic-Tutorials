function Animal(species){
  this.species= species;
}
Animal.prototype.sound = function(){
  return `${this.species} make a sound`
}
let dog = new Animal ('Dog');
//console.log(dog.sound());

let cat = new Animal ('Cat');
//console.log(cat.sound());
/*
function Drink (name){
  if (!new.target){
    throw new Error('Drink must be called with new keyword');
  }
  this.name = name;
}
let tea = new Drink ('tea');
let coffee =  Drink ('coffee');

*/

/* object literals: Ise aap tab use karte hain jab aapko sirf ek hi cheez banani ho (jaise aapki ek personal car).Agar aapko 10 aur cars banani hain, toh aapko pura code 10 baar copy-paste karna padega, jo ki bahut bura tarika hai.
*/

// object literals

let car = {
make: "Toyota",
model: "Camry",
year: 2020,
start: function () {
return `${this.make} car got started in ${this.year}`;
},
};
//console.log(car.start()); 

/*constructor function: Ise aap tab use karte hain jab aapko ek hi tarah ke bahut saare objects banane hon (jaise ek college mein hazaron students),Aapne ek baar Person define kar diya, ab aap new keyword se hazaron log bana sakte hain bina code repeat kiye.
*/

// constructor function

function Person(name, age) {
this.name = name;
this.age = age;
}
let john = new Person("John Doe", 20);
//console.log(john.name);

// Prototype or prototypal chain:

/* javaScript mein har function ke saath ek chupa hua object aata hai jise Prototype kehte hain. Yeh ek "Common Storage" ki tarah hota hai. Jo bhi cheez aap isme daalte hain, wo us function se banne wale saare objects ko mil jaati hai.
*/

function Animal(type) {
this.type = type;
}
Animal.prototype.speak = function(){
return `${this.type} makes a sound`;
};
Array.prototype.hitesh = function() {
   //Array.prototype.hitesh ek Custom Prototype Method hai
return `Custom method ${this}`;
};
let myArray = [1,2,3];
//console.log(myArray.hitesh());


// Topic : class

class vehicle {
  constructor (model, make){
    this.model = model
    this.make = make
  }
  start (){
    return `${this.model} is a car from ${this.make}`;
  }
}

// Topic : inheritence

class Car extends vehicle{
  drive(){
    return `${this.make} : This is an inheritence example`;
  }
}
let myCar = new Car ('Toyota' ,'corolla')
//console.log(myCar.start());
//console.log(myCar.drive());

let vehOne = new vehicle('Toyota','corolla');
//console.log(vehOne.make);

// Encapsulation

class BankAccount{
  #balance = 0;
  deposit (amount){
    this.#balance += amount
    return this.#balance
  }
  getBalance(){
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
//console.log(account.getBalance());

// Abstraction

class coffeeMachine{
  start(){
    // call db
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee(){
    // complex calculation
    return `BrewingCoffee`;
  }
  PressStartButton(){
  let msgOne = this.start()
  let msgTwo = this.brewCoffee()
  return `${msgOne} + ${msgTwo}`;
 } 
}

let myMachine = new coffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
//console.log(myMachine.PressStartButton());

// Polymorphism

class Bird {
  fly(){
    return 'Flying...';
  }
}
 class Penguin extends Bird {
  fly (){
    return "Penguin can't fly";
  }
}
 let bird = new Bird ();
 let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());
 
// Static method

class Calculator{
  static add (a, b){
    return a + b
  }
}
//console.log(Calculator.add(2,4));

// Getters and setters

class Employee{
  constructor (name, salary){
    this.name = name;
    this._salary = salary;
  }
  get salary(){
    return `you are not allowed to see the salary`;
  }
  set salary(value){
    if (value < 0) {
      console.error("Invalid salary")
    }else{
      this._salary = value
    }
  }
}
let emp = new Employee ("Alice",50000);
console.log(emp.salary);

