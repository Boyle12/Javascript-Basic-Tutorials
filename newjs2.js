/*
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum`.


let i = 1;
let sum = 0;
while (i<=5) {
  sum = sum + i;
  i++;
}
console.log(sum);
*/

/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.


let countdown = [];
let n = 5;
let i = 0;
while (n>0) {
  countdown[i] = n;
  n--;
  i++;
}
console.log(countdown);

// or

let countdown = [];
let i = 5;
while (i>0) {
  countdown.push(i);
  i--;
}
console.log(countdown);
*/

/*
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
Store each tea type in an array named `teaCollection`.


let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
  if (tea !== "stop") {
  teaCollection.push(tea);
  }
}
  while (tea !== "stop");
  console.log(teaCollection);
*/
  
  /*
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
Store each tea type in an array named `teaCollection`.


let teaCollection = [];
let tea;
do{
  tea = prompt (`Enter your favorite tea (Type stop to finish)`);
  if (tea!=="stop") {
    teaCollection.push(tea);
  }
}while (tea!=="stop") {
  console.log(teaCollection);
}
*/

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.


let total = [];
let i = 1;
do {
  total.push(i);
  i++;
}while (i<=3) {
  console.log(total);
  
}
*/
/*
5. Write a `for` loop that multiplies each element in the array [2, 4, 6]`by 2 and stores the results in a new array named `multipliedNumbers`.

let e = [2,4,6];
let multipliedNumbers = [];
let i = 0;
for (let i = 0; i < e.length; i++) {
  const results = e[i]*2;
  multipliedNumbers.push(results);
}
console.log(multipliedNumbers);
*/


/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.


let cities =["Paris", "New York", "Tokyo", "London"];
let cityList =[];
for (let j = 0; j < cities.length; j++) {
  const result = cities[j];
  cityList.push(cities[j]);
}
console.log(cityList);

*/