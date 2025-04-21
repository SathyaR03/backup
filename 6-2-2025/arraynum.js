var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function processArray(arr) {
    // 1. Sum of all values
    var sum = arr.reduce(function (acc, val) { return acc + val; }, 0);
    // 2. Difference of first four values (if there are at least four values)
    var difference = 0;
    if (arr.length >= 4) {
        difference = arr[0] - arr[1] - arr[2] - arr[3];
    }
    else {
        var difference_1 = null; // If there are less than 4 values, set difference to null
    }
    // 3. Ascending and descending order of the values
    var ascending = __spreadArray([], arr, true).sort(function (a, b) { return a - b; }); // Ascending order
    var descending = __spreadArray([], arr, true).sort(function (a, b) { return b - a; }); // Descending order
    // Return the result as an object
    return {
        sum: sum,
        difference: difference,
        ascending: ascending,
        descending: descending
    };
}
// Example usage:
var numbers = [10, 20, 30, 40, 50];
var result = processArray(numbers);
console.log("Sum:", result.sum); // Sum of all values
console.log("Difference:", result.difference); // Difference of first 4 values
console.log("Ascending Order:", result.ascending); // Ascending order
console.log("Descending Order:", result.descending); // Descending order
