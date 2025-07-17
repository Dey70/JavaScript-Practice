// Check if a number is greater than another number
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

// Check if a string is equal to another string
let str1 = "Hello";
let str2 = "World";

if (str1 == str2) {
    console.log(`${str1} is equal to ${str2}`);
} else {
    console.log(`${str1} is not equal to ${str2}`);
}

//Check if a variable is a number ot not:
let variable = "123";
if (typeof variable === "number"){
    console.log(`${variable} is a number`);
} else {
    console.log(`${variable} is not a number`);
}

//check if a number is even or odd
let number = 4;
if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

//check if a boolean variable is true or false
let isRaining = true;
if (isRaining) {
    console.log("True, It is raining");
}
else {
    console.log("False, It is not raining");
}

//Check if a array is empty or not
let arr = [];
if (arr.length === 0) {
    console.log("The array is empty");
}
else {
    console.log("The array is not empty");
}