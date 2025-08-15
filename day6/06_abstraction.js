class CoffeeMachine {
  start() {
    return `Starting the Machine...`;
  }

  brewCoffee() {
    return `Brewing the coffee..`;
  }

  startButton() {
    let process1 = this.start();
    let process2 = this.brewCoffee();
    return `${process1} \n ${process2}`;
  }
}

let makeCoffee = new CoffeeMachine();
console.log(makeCoffee.startButton());
