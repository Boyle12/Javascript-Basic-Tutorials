/*
1. Write a `for` loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
Store all teas before `"chai"` in a new array named `selectedTeas`.


let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let j = 0; j < tea.length; j++) {
  if (tea[j]==="chai") {
    break;
  }
  selectedTeas.push(tea[j]);
  
}
console.log(selectedTeas);
*/

/*
2. Write a `for` loop that loops through the array ["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
Store the other cities in a new array named `visitedCities`.


let cityName = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
  for (let k = 0; k < cityName.length; k++) {
    if (cityName[k]==="Paris") {
      continue;
    }
    visitedCities.push(cityName[k]);
}
console.log(visitedCities);*/


/*
3. Use a `for-of` loop to iterate through the array `[1,
2, 3, 4, 5]` and stop when the number `4` is found. Store the numbers before `4`in an array named `smallNumbers`.


let myNumber = [1,2,3,4,5];
let smallNumbers = [];
for (let num of myNumber){
  if (num === 4){
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
*/

/*
4. Use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"]` and skip "herbal tea"`.
Store the other teas in an array named `preferredTeas`.


let myTea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(let num of myTea){
  if(num === "herbal tea"){
    continue;
  }
  preferredTeas.push(num);
}
console.log(preferredTeas);

*/

/*

5. Use a `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.
I let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};
*/

/*
let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
}
let cityPopulations ={}
for(let country in citiesPopulation){
  if (country === "Berlin"){
    break;
  }
  cityPopulations[country] = citiesPopulation[country];
}
console.log(cityPopulations);

*/ 
/* Kuch important baatein:
ques) Bracket [] kyun?
Ans ) Kyunki country ek variable hai. Agar cityPopulations.country likhte, toh JavaScript naye object mein "country" naam ki key dhoondta, "London" ya "Paris" nahi. Variable ki value use karne ke liye [] zaroori hai.

*/

/*
6. Use a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};


let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
let largeCities = {};
for(let citiesPopulation in worldCities){
  if(worldCities[citiesPopulation] < 3000000){
    continue;
  }
largeCities[citiesPopulation] = worldCities[citiesPopulation];
}
console.log(largeCities);
*/

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
Stop the loop when "chai" is found, and store all previous tea types in an array named `availableTeas`.


let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teas.forEach(function(tea) {
  if(tea === "chai"){
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

// Using Another Way Of Function

let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teas.forEach(tea => {
  if(tea === "chai"){
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

*/


/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. Skip "Sydney" and store the other cities in a new array named `traveledCities`.
*/

let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
cities.forEach(city => {
  if(city !== "Sydney"){
    traveledCities.push(city);
  }
});
//console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array [2, 5, 7, 9]`.
Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.


let numbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let num = 0; num < numbers.length; num++) {
  //const element = array[num];
  if(numbers[num]==7){
    continue;
  }
  doubledNumbers.push(numbers[num]*2);
}
console.log(doubledNumbers);



// Another way : currentValue = numbers[num];

let numbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let num = 0; num < numbers.length; num++) {
  let currentValue = numbers[num];
  if(currentValue === 7){
    continue;
  }
  doubledNumbers.push(currentValue*2);
}
console.log(doubledNumbers);

*/

/*
10. Use a `for-of` loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/

let currentTea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for(let tea of currentTea){
  if(tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);


