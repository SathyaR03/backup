
import { Product, Store } from './product';
import { Customer } from './customer'; 

const store = new Store();

const product1 = new Product('Apple', 1.5, 'Fruits');
const product2 = new Product('Broccoli', 2.0, 'Vegetables');
const product3 = new Product('Milk', 1.2, 'Dairy');

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

const customer = new Customer('John Doe', 'john.doe@example.com');

customer.addPurchasedProduct(product1);
customer.addPurchasedProduct(product3);

customer.listCustomerPurchases();
