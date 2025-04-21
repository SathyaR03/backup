function getFullName(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
console.log(getFullName("John", "Doe"));
console.log(getFullName("Alice"));
console.log(getFullName("Bob", "Smith"));
