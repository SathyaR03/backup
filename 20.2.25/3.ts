class Animal {
    name: string;
    sound: string;
  
    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound(): void {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name, "Woof!");
    }
  
    makeSound(): void {
      console.log(`The ${this.name} says Woof!`);
    }
  }
  
  const dog = new Dog("Man");
  dog.makeSound();