/*
1. Write a ‘while’ loop that calculates the sum of all
numbers from 1 to 5 and stores the result in a variable
named ‘sum’.

*/
let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}
console.log("The sum is : ", sum);

/*  
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.  

*/ 

let j = 5;
let countdown = [];

while (j > 0) {
  countdown.push(j);
  j--;
}
console.log("Countdown : ", countdown);
/*  
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.  

Store each tea type in an array named `teaCollection`.  

*/  

let teaCollection = [];
let tea = "";
do {
  tea = prompt(`Enter your fav tea(type "stop" to finish): `);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

console.log("Tea Collections: ", teaCollection);

/*  
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.  

*/

let k = 1;
let total = 0;

do {
  total += k;
  k++;
} while (k < 4);

console.log("Result: ", total);

/*  
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.  
*/  

let arr = [2, 4, 6];
let multipliedNumbers = [];

for (let l = 0; l <= arr.length; l++) {
  result = arr[l] * 2;
  multipliedNumbers.push(result);
}

console.log("Result: ", multipliedNumbers);
/*  
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.  
*/  

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let m = 0; m < cities.length; m++) {
  list_result = cities[m];
  cityList.push(list_result);
}

console.log("City List: ", cityList);