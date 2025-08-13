class BankAccount {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return ` Balance: $${this.#balance}`;
  }
}
let acc = new BankAccount("Shlok Mottherchd");
acc.deposit(10);
console.log(acc.getBalance());
