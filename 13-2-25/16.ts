interface Greeter {
    greet(): string;
}

class PersonGreeter implements Greeter {
    greet(): string {
        return "Hello, world!";
    }
}

const greeter = new PersonGreeter();
console.log(greeter.greet()); 