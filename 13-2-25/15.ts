interface addFunction {
    (num1: number, num2: number): number; 
}

const adds: addFunction = (num1, num2) => num1 + num2;

// Example usage:
console.log(adds(5, 10)); 
console.log(adds(3, 7)); 