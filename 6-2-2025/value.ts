function getDataType(value: unknown): string {
    if (Array.isArray(value)) {
        return 'Array';
    } else if (value === null) {
        return 'Null';
    } else {
        return typeof value;
    }
}

console.log(getDataType(42));              
console.log(getDataType('Hello World'));   
console.log(getDataType([1, 2, 3]));       
console.log(getDataType({ name: 'John' })); 
console.log(getDataType(null));            
console.log(getDataType(true));            
console.log(getDataType(function() {}));   
