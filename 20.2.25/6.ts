interface Readable {
    read(): void;
  }
  
  interface Writable {
    write(): void;
  }
  
  class Book implements Readable, Writable {
    title: string;
  
    constructor(title: string) {
      this.title = title;
    }
  
    read(): void {
      console.log(`Reading the book: ${this.title}`);
    }
  
    write(): void {
      console.log(`Writing the book: ${this.title}`);
    }
  }
  
  const book = new Book("Master Mind");
  book.read();
  book.write();