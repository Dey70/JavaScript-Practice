class Animals {
  sound() {
    return `Animals makes sound`;
  }
}
class Dogs extends Animals {
  sound() {
    return `Dogs Barks!!!`;
  }
}
class Cats extends Animals {
  sound() {
    return `Cat Meow!!!`;
  }
}

let obj1 = new Animals();
let obj2 = new Dogs();
let obj3 = new Cats();
console.log(obj1.sound());
console.log(obj2.sound()); 
console.log(obj3.sound());