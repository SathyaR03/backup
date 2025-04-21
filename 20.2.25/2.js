var CarClass = /** @class */ (function () {
    function CarClass(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    CarClass.prototype.drive = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " is driving."));
    };
    return CarClass;
}());
var car = new CarClass("Audi", "A7", 2022);
car.drive();
