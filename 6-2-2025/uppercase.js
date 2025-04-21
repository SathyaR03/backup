function convertToUpperCase(arr) {
    // Use map to convert each string in the array to uppercase
    return arr.map(function (str) { return str.toUpperCase(); });
}
// Example usage:
var strings = ['hello', 'world', 'typescript', 'rocks'];
var upperCaseStrings = convertToUpperCase(strings);
console.log(upperCaseStrings); // Output: ['HELLO', 'WORLD', 'TYPESCRIPT', 'ROCKS']
