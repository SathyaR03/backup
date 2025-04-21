function processArray(arr: number[]): { sum: number, difference: number, ascending: number[], descending: number[] } {
    const sum = arr.reduce((acc, val) => acc + val, 0);

    let difference = 0;
    if (arr.length >= 4) {
        difference = arr[0] - arr[1] - arr[2] - arr[3];
    } else {
       let difference = null; 
    }

    const ascending = [...arr].sort((a, b) => a - b); 
    const descending = [...arr].sort((a, b) => b - a); 

    return {
        sum,
        difference,
        ascending,
        descending
    };
}

const numbers = [10, 20, 30, 40, 50];

const result = processArray(numbers);
console.log("Sum:", result.sum);                 
console.log("Difference:", result.difference);  
console.log("Ascending Order:", result.ascending);
console.log("Descending Order:", result.descending);  
