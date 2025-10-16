// -----------------------------------------------------------
// Simple Object
// -----------------------------------------------------------
// let book: { title: string; pages: number } = {
//   title: "Byomkesh Bokshi",
//   pages: 30,
// };

// console.log(`Book Name: ${book.title}, page: ${book.pages}`);

// book.pages = 550;
// console.log(`update: ${book.title} pages: ${book.pages}`);

// -----------------------------------------------------------
// Step 2: Class
// -----------------------------------------------------------

// class Student {
//   name: string;
//   grade: number;

//   constructor(n: string, g: number) {
//     this.name = n;
//     this.grade = g;
//   }
//   greet(): string {
//     return `Hello, Ami ${this.name}, class ${this.grade}!`;
//   }
// }

// let shuvo = new Student("Shuvo", 6);
// let sonia = new Student("sonia", 7);

// console.log(shuvo.greet());
// console.log(sonia.greet());

// -----------------------------------------------------------
// step 3 Access Modifiers  = public, private, protected
// -----------------------------------------------------------

class BankAccount {
  public balance: number = 1000;
  private pin: number = 1234;
  protected accountNumber: string = "ACC001";

  public getBalance(): number {
    return this.balance;
  }
  private checkPin(enteredPin: number): boolean {
    return enteredPin === this.pin;
  }

  public withdraw(amount: number, pin: number): string {
    if (this.checkPin(pin)) {
      this.balance -= amount;
      return `Withdraw: ${amount}, Due: ${this.balance}`;
    }
    return "Wrong Pin!";
  }
}

let myAccount = new BankAccount();
console.log(myAccount.getBalance());
console.log(myAccount.withdraw(200, 1234));
