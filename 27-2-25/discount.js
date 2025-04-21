"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discounts = void 0;
var Discounts;
(function (Discounts) {
    function calculateDiscount(category) {
        switch (category.toLowerCase()) {
            case 'fruits':
                return 0.10;
            case 'vegetables':
                return 0.05;
            case 'dairy':
                return 0.08;
            default:
                return 0;
        }
    }
    Discounts.calculateDiscount = calculateDiscount;
    function applyDiscount(price, category) {
        var discountPercentage = calculateDiscount(category);
        return price - (price * discountPercentage);
    }
    Discounts.applyDiscount = applyDiscount;
})(Discounts || (exports.Discounts = Discounts = {}));
