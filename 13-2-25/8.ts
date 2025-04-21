function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(10, 20, 30, 40)); 
console.log(sumNumbers(5)); 
console.log(sumNumbers()); 