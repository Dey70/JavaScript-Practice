
// Prototypes in JavaScript
// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

// Step 1: Animal constructor
function Animal() {}

Animal.prototype.speak = function () {
    return "Animal speaking";
};

// Step 2: Dog constructor
function Dog() {}

// Step 3: Inherit Animal using prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Step 4: Add Dog's own method
Dog.prototype.bark = function () {
    return "Woof!";
};

// Test
let obj1 = new Animal();
let obj2 = new Dog();

console.log(obj1.speak()); // Animal speaking
console.log(obj2.speak()); // Animal speaking (inherited)
console.log(obj2.bark());  // Woof!