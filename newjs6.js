/*Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array 
let mixedArray = ['Abhinav',45,35,"Boyle",49,"Tanmoy",'true'];
function filterNumbers(arr){
  return arr.filter((item)=>{
    return typeof item ==="number";
  });
}
console.log(filterNumbers(mixedArray));
*/
let mixedArray = ['Abhinav',45,35,"Boyle",49,"Tanmoy",'true'];
function filterNumbers (arr){
  return arr.filter (function (items){
    //return arr.filter((item)=>{
      // return type of items === "number
      // "})
    return typeof items === 'number'
  });
}
//console.log(filterNumbers(mixedArray));



/*Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array
*/

function reverseArray(arr){
  return arr.reverse();
}
//console.log(reverseArray([1,3,5,7,9]));


/*Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array


function findMax(arr){
  return Math.max(...arr)
}
console.log(findMax([2,4,6,7,9]));
*/

/*Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/

function removeDuplicates (arr){
  return [...new Set(arr)];
}
//console.log(removeDuplicates([2,4,6,9,2,4,47,4]));


/*Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array.
*/

function flattenArray(arr){
  return arr.flat(Infinity)
}
//console.log(flattenArray([2,[3,8],[56],4,9,[8],3]));






