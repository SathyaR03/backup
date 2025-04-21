"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
var discount_1 = require("./discount");
function calculateTotal(products) {
    var total = 0;
    products.forEach(function (product) {
        var discountedPrice = discount_1.Discounts.applyDiscount(product.price, product.category);
        total += discountedPrice;
    });
    return total;
}
