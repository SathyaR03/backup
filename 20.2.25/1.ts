class Person {
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    intro(): void {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("sathya", "R", 21);
  person.intro();
  