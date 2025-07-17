let mixed = ["Raj", 20, true];
console.log(mixed);

console.log(mixed[0]); 
console.log(mixed[1]);
console.log(mixed[2]);

mixed[1] = 25; // Update the second element
console.log(mixed[1]); // Output: 25
console.log(mixed);

console.log(mixed.length);
console.log()
console.log()
console.log()
console.log()

//Task1
let teaFlavours = ["Green Tea", "Black Tea", "Oolong Tea"];
const firstTea = teaFlavours[0];
console.log(firstTea);

console.log();
//Task2
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);

console.log();
//Task3
let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1]= "Jasmine tea"; 
console.log(teaTypes);

console.log();
//Task4
let citiesVisited = ["Mumbai", "Delhi"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

console.log();
//Task5
let teaOrders = ["Chai", "iced Tea", "macha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(lastOrder); // Output: earl grey

console.log();
//Task6
let popularTeas = ["Green Tea", "Oolong Tea", "Chai"];
let softCopy = popularTeas;
popularTeas.pop();
console.log(softCopy); 
console.log(popularTeas); 

console.log();
//Task7
let topCities = ["New York", "Tokyo", "Paris"];
const hardCopy = [...topCities];
console.log(hardCopy); 

console.log();
//Task8
let europeanCitites = ["Berlin", "Madrid", "Rome"];
let asianCities = ["Tokyo", "Beijing", "Seoul"];
let mergedCities = europeanCitites.concat(asianCities);
console.log(mergedCities);

console.log();
//Task9
let teaMenu = ["Green Tea", "Black Tea", "Oolong Tea"];
const menuLength = teaMenu.length;
console.log(menuLength);

console.log();
//Task10
let cityBucketList = ["London", "Tokyo", "Paris", "New York", "Sydney"];
const isLondonList = cityBucketList.includes("London");
console.log(isLondonList); 