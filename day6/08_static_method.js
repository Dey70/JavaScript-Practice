class CallName {
  static myName() {
    return "Hello, I'm Static!";
  }
}

let obj = new CallName();
console.log(CallName.myName());
console.log(obj.myName());
console.log(obj.myName()); // This will throw an error since myName is static


class Calculator{
    static add(a,b){
        return a + b;
    }
    
}

let obj = new Calculator();
console.log(Calculator.add(5,10));
// console.log(obj.add()); // This will throw an error since add is static