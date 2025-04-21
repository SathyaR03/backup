function greetUser(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}


console.log(greetUser("sathya")); 
console.log(greetUser("Akash", "Hi")); 