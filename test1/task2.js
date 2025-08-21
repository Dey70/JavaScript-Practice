// Question:

// Create a constructor function Vehicle that has a method drive() which returns "Vehicle is driving".

// Then create another constructor function Car that inherits from Vehicle using prototypes.

// The Car constructor should add a method honk() that returns "Beep beep!".

// Finally, demonstrate that a Car object can use both drive() (from Vehicle) and honk() (from Car) through prototype chaining.

function Vehicle() {}

Vehicle.prototype.drive = function () {
  return "Vehicle is driving!";
};

function Car() {}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  return "Beep beep!";
};

let obj1 = new Vehicle();
let obj2 = new Car();

console.log(obj2.drive());
console.log(obj2.honk());