"use strict";
// store.ts
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var discount_1 = require("./discount");
var store = new product_1.Store();
var product1 = new product_1.Product('Apple', 1.5, 'Fruits');
var product2 = new product_1.Product('Broccoli', 2.0, 'Vegetables');
var product3 = new product_1.Product('Milk', 1.2, 'Dairy');
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
console.log("Products before applying discount:");
store.listProducts();
store.addProduct(new product_1.Product('Apple', discount_1.Discounts.applyDiscount(product1.price, product1.category), product1.category));
store.addProduct(new product_1.Product('Broccoli', discount_1.Discounts.applyDiscount(product2.price, product2.category), product2.category));
store.addProduct(new product_1.Product('Milk', discount_1.Discounts.applyDiscount(product3.price, product3.category), product3.category));
console.log("\nProducts after applying discount:");
store.listProducts();
