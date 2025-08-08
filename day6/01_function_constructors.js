function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, I'm ${name} and my age is ${age}`;
  };
}

let raj = new Person("Rajdeep", 20);
console.log(raj);
console.log(raj.greet());

let deep = new Person("deep", 20);
console.log(r);
