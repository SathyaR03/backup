export class Product {
    name: string;
    price: number;
    category: string;
  
    constructor(name: string, price: number, category: string) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  }
  
  export class Store {
    private products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    listProducts(): void {
      if (this.products.length === 0) {
        console.log("No products available.");
        return;
      }
  
      console.log("List of Products:");
      this.products.forEach((product, index) => {
        console.log(
          `${index + 1}. Name: ${product.name}, Price: $${product.price}, Category: ${product.category}`
        );
      });
    }
  }
  