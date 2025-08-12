class Robot {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }
  info() {
    return `This robot, ${this.name}, was manufactured in ${this.year} by ${this.brand}`;
  }
}

let robo1 = new Robot("X", "Y", 2000);
console.log(robo1.name);
console.log(robo1.year);
console.log(robo1.info());
