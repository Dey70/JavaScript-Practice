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
