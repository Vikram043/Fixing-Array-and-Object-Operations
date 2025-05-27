const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      if (
        !book.title || typeof book.title !== 'string' || book.title.trim() === '' ||
        !book.author || typeof book.author !== 'string' || book.author.trim() === '' ||
        !Number.isInteger(book.year) || book.year <= 0
      ) {
        console.log("Book information is incomplete or invalid.");
        return false;  
      }
      this.books.push(book);
      return true; 
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        return true; 
      } else {
        console.log("Book not found.");
        return false; 
      }
    }
  };
  
 
  const added1 = library.addBook({ author: "George Orwell", year: 1949 });
  console.log("Added book 1:", added1);  
  
  
  const added2 = library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  console.log("Added book 2:", added2);  
  
  
  console.log("Total books:", library.books.length);  
  
  
  const foundBook = library.findBookByTitle("1984");
  console.log("Found book:", foundBook);
  
  
  const removed = library.removeBook("The Hobbit");
  console.log("Removed The Hobbit:", removed);

  console.log("Total books after removal:", library.books.length);
  