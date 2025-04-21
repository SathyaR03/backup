function convertToUpperCase(arr: string[]): string[] {
    return arr.map(str => str.toUpperCase());
}

const strings = ['hello', 'world', 'typescript', 'rocks'];
const upperCaseStrings = convertToUpperCase(strings);

console.log(upperCaseStrings); 