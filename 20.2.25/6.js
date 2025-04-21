var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    Book.prototype.read = function () {
        console.log("Reading the book: ".concat(this.title));
    };
    Book.prototype.write = function () {
        console.log("Writing the book: ".concat(this.title));
    };
    return Book;
}());
var book = new Book("Master Mind");
book.read();
book.write();
