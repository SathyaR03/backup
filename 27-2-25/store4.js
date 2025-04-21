"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var inventry_1 = require("./inventry");
var store = new product_1.Store();
var product1 = new product_1.Product('Apple', 1.5, 'Fruits');
var product2 = new product_1.Product('Broccoli', 2.0, 'Vegetables');
var product3 = new product_1.Product('Milk', 1.2, 'Dairy');
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
var inventoryItem1 = new inventry_1.Inventory.InventoryItem(product1, 50);
var inventoryItem2 = new inventry_1.Inventory.InventoryItem(product2, 30);
var inventoryItem3 = new inventry_1.Inventory.InventoryItem(product3, 100);
inventry_1.Inventory.addStock(inventoryItem1, 20); // Add 20 more Apples
inventry_1.Inventory.addStock(inventoryItem2, 10); // Add 10 more Broccolis
console.log("".concat(product1.name, " stock: ").concat(inventry_1.Inventory.checkStock(inventoryItem1), " units"));
console.log("".concat(product2.name, " stock: ").concat(inventry_1.Inventory.checkStock(inventoryItem2), " units"));
console.log("".concat(product3.name, " stock: ").concat(inventry_1.Inventory.checkStock(inventoryItem3), " units"));
