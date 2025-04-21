function processData(num, callback) {
    return callback(num);
}
var double = function (n) { return n * 2; };
console.log(processData(5, double));
var square = function (n) { return n * n; };
console.log(processData(4, square));
