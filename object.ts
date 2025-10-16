// Simple Object
let book: { title: string; pages: number } = {
  title: "Byomkesh Bokshi",
  pages: 30,
};

console.log(`Book Name: ${book.title}, page: ${book.pages}`);

book.pages = 550;
console.log(`update: ${book.title} pages`);
