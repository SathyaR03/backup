
import { Product, Store } from './product';
import { Discounts } from './discount';

const store = new Store();

const product1 = new Product('Apple', 1.5, 'Fruits');
const product2 = new Product('Broccoli', 2.0, 'Vegetables');
const product3 = new Product('Milk', 1.2, 'Dairy');

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

console.log("Products before applying discount:");
store.listProducts();

store.addProduct(new Product('Apple', Discounts.applyDiscount(product1.price, product1.category), product1.category));
store.addProduct(new Product('Broccoli', Discounts.applyDiscount(product2.price, product2.category), product2.category));
store.addProduct(new Product('Milk', Discounts.applyDiscount(product3.price, product3.category), product3.category));

console.log("\nProducts after applying discount:");
store.listProducts();


