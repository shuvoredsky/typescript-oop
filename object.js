// Simple Object
// let book: { title: string; pages: number } = {
//   title: "Byomkesh Bokshi",
//   pages: 30,
// };
// console.log(`Book Name: ${book.title}, page: ${book.pages}`);
// book.pages = 550;
// console.log(`update: ${book.title} pages: ${book.pages}`);
// Step 2: Class
var Student = /** @class */ (function () {
    function Student(n, g) {
        this.name = n;
        this.grade = g;
    }
    Student.prototype.greet = function () {
        return "Hello, Ami ".concat(this.name, ", class ").concat(this.grade, "!");
    };
    return Student;
}());
var shuvo = new Student("Shuvo", 6);
var sonia = new Student("sonia", 7);
console.log(shuvo.greet());
console.log(sonia.greet());
