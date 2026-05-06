// Higher-Order Functions and Arrow Functions

/*
Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions
*/

 const squareNumbers = (arr) => {
  return arr.map(num => num * num);
 };
 //console.log(squareNumbers([3,4,6]));
 

/*
Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions
*/

const filterEvenNumbers = (arr) => {
  return arr.filter(num => num%2===0);

};
//console.log(filterEvenNumbers([2,3,4,5,6]));

// Another way of writing code
/*
const filterEvenNumbers = arr => arr.filter(n => n % 2 === 0);

console.log(filterEvenNumbers([2,3,4,5,6,8]));
*/

/*
Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
*/

let sumPositiveNumbers = (arr) => {
  return arr
  .filter(num => num > 0)
  .reduce((acc,num)=> acc + num ,0);
};
  //console.log(sumPositiveNumbers([2,-5,3,2,-3]));

/*
Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
*/

let getNames = (arr)=> {
  return arr.map(item => item.name);
};
  let users = [
  {id : 1 , name : 'Abhishek'},
  {id : 2 , name : 'Aditya'},
  {id : 3 , name : 'Anurag'},
  {id : 4 , name : 'Aman'}
  ];
//console.log(getNames(users));

/*
Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
*/

let findLongestWord = (arr) => {
  return arr.reduce((longest, current) => {
    if (current.length > longest.length) {
      return current; 
    } else {
      return longest; 
    }
  }, ""); 
};

console.log(findLongestWord(['Abhinav', 'Kaushal','JavaScript'])); 
