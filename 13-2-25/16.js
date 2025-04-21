var PersonGreeter = /** @class */ (function () {
    function PersonGreeter() {
    }
    PersonGreeter.prototype.greet = function () {
        return "Hello, world!";
    };
    return PersonGreeter;
}());
var greeter = new PersonGreeter();
console.log(greeter.greet());
