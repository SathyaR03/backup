function processData(num: number, callback: (n: number) => number): number {
    return callback(num);
}
const double = (n: number): number => n * 2;

console.log(processData(5, double)); 

const square = (n: number): number => n * n;

console.log(processData(4, square)); 