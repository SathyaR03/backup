abstract class Shape {
    abstract area(): number;
  
    describe(): void {
      console.log("This is a shape.");
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(5, 7);
  console.log(rectangle.area());
  rectangle.describe();
  