
/* Classes, Objects, and Inheritance

Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
*/

class Vehicle {
  constructor(make,model){
    this.make = make;
    this.model = model;
  }

  getDetails(){
    return`Make: ${this.make},Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  startEngine(){
  return `Engine started`;
  }
}

const myCar = new Car ('Toyota','Fortuner');
console.log(myCar.getDetails());
console.log(myCar.startEngine());

/*
Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
*/

class Vehicle {
  constructor(make,model){
    this.make = make;
    this.model = model;
  }
  getDetails(){
    return`Make: ${this.make},Model: ${this.model}`;
  }
  move(){
    return`The Vehicle is moving`;
  }
}
class Car extends Vehicle {
  move(){
    return`The car is driving`;
  }

  startEngine(){
  return `Engine started`;
  }
}

const myVehicle = new Vehicle ('Bus','Truck');
console.log(myVehicle.move());


const myCar = new Car ('Toyota','Fortuner');
console.log(myCar.move());


/*
Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

*/
class Vehicle {
  constructor(make,model){
    this.make = make;
    this.model = model;
  }
 static isVehicle(obj){
  return obj instanceof Vehicle;
 }
 move(){
    return `The Vehicle is moving`;
  }
}
class Car extends Vehicle {
  move(){
    return `The car is driving`;
  }
}

const myCar = new Car ('Toyota','Fortuner');
const simpleObj = {name:'Abhishek'}
console.log(Vehicle.isVehicle(myCar));
console.log(Vehicle.isVehicle(simpleObj));


/* Encapsulation, Polymorphism, Abstraction, and Getters/Setters


Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/


class BankAccount {
  constructor(intialBalance){
    this._balance = intialBalance>=0 ? intialBalance : 0;
  }
  get balance(){
    return this._balance;
  }
  set balance(amount){
    if(amount<0){
      throw new Error("Error: Balance should above to zero!");
    }
    else{
      this._balance = amount;
    }
  }
  deposit(amount){
    if(amount>0){
      this._balance = amount + this._balance
      console.log(`${amount} amount deposited your account, Your final balance is ${this._balance}`);
      
    }
  }
  withdraw(amount){
    if(amount>this._balance){
      throw new Error("Error: The amount is not available in your account");
    }
    else if(amount>0){
      this._balance = amount - this._balance
      console.log(`Your remaining balance is ${this._balance}`);
      
    }
  }
}
const myAcc = new BankAccount(1000);
console.log(myAcc.balance);
myAcc.withdraw(1500);
myAcc.deposit(500);
myAcc.withdraw(1500);
myAcc.balance= -500;


/*
Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. 
*/

class Shape{
  area(){
    return 0
  }
}
class Circle extends Shape{             
  constructor(radius){                
    super();                       
    this.radius = radius;
  }
  area(){
     return Math.PI * this.radius * this.radius;
  }
}

// JavaScript mein ek sakht rule hai: Agar koi bacha (Child class) apne paas constructor rakhta hai, toh usey sabse pehle apne Parent ke constructor ko salaam thokna padta hai (yani super() call karna padta hai). Jab aap class Circle extends Shape likhte ho, toh Circle, Shape ka hissa ban jata hai.
//super() likhne se Circle ke andar Shape wali saari khoobiyan (properties aur methods) load ho jati hain. Agar aap super() nahi likhoge, toh JavaScript ko pata hi nahi chalega ki Circle ko Shape se jodna kaise hai.

class Rectangle extends Shape{
  constructor(length,width){
    super();
    this.length = length;
    this.width = width;
  }
  area(){
    return (this.length * this.width);
  }
}
const myCircle = new Circle (5);
console.log("circle is:",myCircle.area().toFixed(2));

const myRectangle = new Rectangle (5,3);
console.log("Rectangel is:",myRectangle.area().toFixed(2));

const genericShape = new Shape();
console.log("Generic shape area:",genericShape.area());
