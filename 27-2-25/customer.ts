import { Product } from './product'; 

export class Customer {
  name: string;
  email: string;
  purchasedProducts: Product[];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.purchasedProducts = [];
  }

  addPurchasedProduct(product: Product): void {
    this.purchasedProducts.push(product);
  }

  listCustomerPurchases(): void {
    if (this.purchasedProducts.length === 0) {
      console.log(`${this.name} has not purchased any products yet.`);
      return;
    }

    console.log(`${this.name}'s Purchased Products:`);
    this.purchasedProducts.forEach((product, index) => {
      console.log(
        `${index + 1}. Name: ${product.name}, Price: $${product.price}, Category: ${product.category}`
      );
    });
  }
}
