function concat(param1: string | number, param2: string | number): string {
    return `${param1}${param2}`;
}

console.log(concat("Hello, ", "World!")); 
console.log(concat(10, 20)); 
console.log(concat("The answer is: ", 42)); 