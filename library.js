"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() { this.isIssued = true; }
  returnBook() { this.isIssued = false; }
}

const books = [
  new Book("Atomic Habits", "James Clear", "1111"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "2222"),
  new Book("The Alchemist", "Paulo Coelho", "3333"),
  new Book("JavaScript Guide", "MDN", "4444", true)
];

console.log("Available Books:");
console.log(books.filter(b => !b.isIssued));

function issueByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book && !book.isIssued) {
    book.issueBook();
    console.log(book.title + " issued.");
  } else {
    console.log("Book not found or already issued.");
  }
}

issueByISBN("2222");
