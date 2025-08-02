// loops_03.js [Level - Hard]

/*  
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai".  

Store all teas before `"chai"` in a new array named `SelectTea`.

*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log("Selected Teas: ", selectedTeas);

/*  
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris".  

Store the other cities in a new array named `visitedCities`.  

*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

console.log("Visited Cites: ", visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.

Store the numbers before `4` in an array named `smallNumbers`.
*/ 

const num = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let i of num) {
  if (i === 4) {
    break;
  }
  smallNumbers.push(i);
}

console.log("Small Numbers: ", smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array `["chaɪ", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.

Store the other teas in an array named `preferredTeas`.
*/ 

let indian_teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (let tea of indian_teas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

console.log("Preferred Tea: ", preferredTeas);

/*  
5. Use a `for-in` loop to loop through an object containing city populations.  

Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.  

let citiesPopulation = {  
    "London": 8900000,  
    "New York": 8400000,  
    "Paris": 2200000,  
    "Berlin": 3500000};  

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};

for (let key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityPopulations[key] = citiesPopulation[key];
}
console.log("City Populations : ", cityPopulations);

/*  
6. Use a `for-in` loop to loop through an object containing city populations.  

Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.  

let worldCities = {  
    "Sydney": 5000000,  
    "Tokyo": 9000000,  
    "Berlin": 3500000,  
    "Paris": 2200000};  

*/  
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (let city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log("Large City with large population: ", largeCities);

/*  
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.  

- Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.  

*/  

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teaCollection.forEach(function (teas) {
  if (teas === "chai") {
    return;
  }
  availableTeas.push(teas);
});

console.log("Available Teas: ", availableTeas);

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.  

- Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.  
*/


let Cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

Cities.forEach(function (City) {
  if (City === "Sydney") {
    return;
  }
  traveledCities.push(City);
});

console.log("Traveled Cities: ", traveledCities);