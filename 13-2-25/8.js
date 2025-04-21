function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(10, 20, 30, 40));
console.log(sumNumbers(5));
console.log(sumNumbers());
