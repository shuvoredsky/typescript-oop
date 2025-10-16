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
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 1000;
        this.pin = 1234;
        this.accountNumber = "ACC001";
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.checkPin = function (enteredPin) {
        return enteredPin === this.pin;
    };
    BankAccount.prototype.withdraw = function (amount, pin) {
        if (this.checkPin(pin)) {
            this.balance -= amount;
            return "Withdraw: ".concat(amount, ", Due: ").concat(this.balance);
        }
        return "Wrong Pin!";
    };
    return BankAccount;
}());
var myAccount = new BankAccount();
console.log(myAccount.getBalance());
console.log(myAccount.withdraw(200, 1234));
