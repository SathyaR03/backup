function getDataType(value) {
    if (Array.isArray(value)) {
        return 'Array';
    }
    else if (value === null) {
        return 'Null';
    }
    else {
        return typeof value;
    }
}
// Example usage:
console.log(getDataType(42)); // "number"
console.log(getDataType('Hello World')); // "string"
console.log(getDataType([1, 2, 3])); // "Array"
console.log(getDataType({ name: 'John' })); // "object"
console.log(getDataType(null)); // "Null"
console.log(getDataType(true)); // "boolean"
console.log(getDataType(function () { })); // "function"
