function getFullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(getFullName("John", "Doe"));
console.log(getFullName("Alice"));
console.log(getFullName("Bob", "Smith"));