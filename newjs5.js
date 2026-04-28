/* Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber (input){
  let conversion = Number(input);
if(isNaN(conversion)){
  return `Not a number`;
}else{
  return conversion;
}
}
console.log(stringToNumber("124"));
console.log(stringToNumber('asdf'));
console.log(stringToNumber('ab123'));

*/
/*
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean (input){
  return !Boolean(input);
}
console.log(flipBoolean(true));
console.log(flipBoolean(23));
console.log(flipBoolean(0));
*/

/*
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
*/
/*
function whatAmI(input){
  if(typeof input === 'number'){
    return "I'm a number";
  }
  else{
    if(typeof input === 'string'){
      return "I'm a string";
    }
  }

}
console.log(whatAmI(120));
console.log(whatAmI("Abhinav"));

*/

/*
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.


function isItTruthy(input){
  if(input){
  return "It's truthy!"
  }
  else{
      return "It's is falsey!"
    }
  }
console.log(isItTruthy(true));
console.log(isItTruthy(false));
console.log(isItTruthy("Hello"));
console.log(isItTruthy(0));         
console.log(isItTruthy(""));
*/

/* Perform the following mathematical operations
on the provided variables a and b where const a = 18;
and const b = 24;
1.Add
2.Subtract
3.Multiply
4.Divide
5.Increment
6.Decrement
7.Reminder
*/
function addition(){
  const a = 18;
  const b = 24;
  return b + a;
}
//console.log(addition());

function subtract(){
  const a = 18;
  const b = 24;
  return b - a;
}
//console.log(subtract());

function Multiply(){
  const a = 18;
  const b = 24;
  return a * b;
}
//console.log(Multiply());

function Divide (){
  const a = 18;
  const b = 24;
  return b / a;
}
//console.log(Divide());
 
function Increment(){
  const a = 18;
  const b = 24;
  return [a+1,b+1]; 
}
//console.log(Increment());

function decrement(){
  const a = 18;
  const b = 24;
  return [a-1,b-1];
}
//console.log(decrement());

function Reminder (){
  const a = 18;
  const b = 24;
  return b % a;
}
console.log(Reminder());
