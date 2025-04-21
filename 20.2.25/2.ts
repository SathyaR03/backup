interface Car {
    make: string;
    model: string;
    year: number;
    drive(): void;
  }
  
  class CarClass implements Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    drive(): void {
      console.log(`The ${this.make} ${this.model} is driving.`);
    }
  }
  
  const car = new CarClass("Audi", "A7", 2022);
  car.drive();