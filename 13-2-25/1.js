function greetUser(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetUser("sathya"));
console.log(greetUser("Akash", "Hi"));
