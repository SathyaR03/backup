"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, email) {
        this.name = name;
        this.email = email;
        this.purchasedProducts = [];
    }
    Customer.prototype.addPurchasedProduct = function (product) {
        this.purchasedProducts.push(product);
    };
    Customer.prototype.listCustomerPurchases = function () {
        if (this.purchasedProducts.length === 0) {
            console.log("".concat(this.name, " has not purchased any products yet."));
            return;
        }
        console.log("".concat(this.name, "'s Purchased Products:"));
        this.purchasedProducts.forEach(function (product, index) {
            console.log("".concat(index + 1, ". Name: ").concat(product.name, ", Price: $").concat(product.price, ", Category: ").concat(product.category));
        });
    };
    return Customer;
}());
exports.Customer = Customer;
