"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
exports.Product = Product;
var Store = /** @class */ (function () {
    function Store() {
        this.products = [];
    }
    Store.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Store.prototype.listProducts = function () {
        if (this.products.length === 0) {
            console.log("No products available.");
            return;
        }
        console.log("List of Products:");
        this.products.forEach(function (product, index) {
            console.log("".concat(index + 1, ". Name: ").concat(product.name, ", Price: $").concat(product.price, ", Category: ").concat(product.category));
        });
    };
    return Store;
}());
exports.Store = Store;
