// Simple Object
// let book: { title: string; pages: number } = {
//   title: "Byomkesh Bokshi",
//   pages: 30,
// };

// console.log(`Book Name: ${book.title}, page: ${book.pages}`);

// book.pages = 550;
// console.log(`update: ${book.title} pages: ${book.pages}`);

// Step 2: Class

class Student {
  name: string;
  grade: number;

  constructor(n: string, g: number) {
    this.name = n;
    this.grade = g;
  }
  greet(): string {
    return `Hello, Ami ${this.name}, class ${this.grade}!`;
  }
}

let shuvo = new Student("Shuvo", 6);
let sonia = new Student("sonia", 7);

console.log(shuvo.greet());
console.log(sonia.greet());
