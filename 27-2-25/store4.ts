
import { Product, Store } from './product';
import { Inventory } from './inventry'; 

const store = new Store();

const product1 = new Product('Apple', 1.5, 'Fruits');
const product2 = new Product('Broccoli', 2.0, 'Vegetables');
const product3 = new Product('Milk', 1.2, 'Dairy');

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

const inventoryItem1 = new Inventory.InventoryItem(product1, 50); 
const inventoryItem2 = new Inventory.InventoryItem(product2, 30);
const inventoryItem3 = new Inventory.InventoryItem(product3, 100);
Inventory.addStock(inventoryItem1, 20);
Inventory.addStock(inventoryItem2, 10); 

console.log(`${product1.name} stock: ${Inventory.checkStock(inventoryItem1)} units`);
console.log(`${product2.name} stock: ${Inventory.checkStock(inventoryItem2)} units`);
console.log(`${product3.name} stock: ${Inventory.checkStock(inventoryItem3)} units`);
