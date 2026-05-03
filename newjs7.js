/*
Loops


Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/
function sumOfN(n){
  return (n*(n+1))/2;
}
//console.log(sumOfN(10));

/*Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
*/

function printMultiplicationTable(n){
  let arr = [];
  for(let i = 1; i <= 10; i++){
    arr.push(`${n} * ${i} = ${n * i}`);
  }
  return arr;
}
//console.log(printMultiplicationTable(5));


/*Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

function countVowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
//console.log(countVowels('Hello Mr Boyle'));

