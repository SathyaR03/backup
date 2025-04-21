"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory;
(function (Inventory) {
    var InventoryItem = /** @class */ (function () {
        function InventoryItem(product, stockQuantity) {
            if (stockQuantity === void 0) { stockQuantity = 0; }
            this.product = product;
            this.stockQuantity = stockQuantity;
        }
        return InventoryItem;
    }());
    Inventory.InventoryItem = InventoryItem;
    function addStock(inventoryItem, quantity) {
        inventoryItem.stockQuantity += quantity;
        console.log("".concat(quantity, " units of ").concat(inventoryItem.product.name, " added. New stock: ").concat(inventoryItem.stockQuantity));
    }
    Inventory.addStock = addStock;
    function checkStock(inventoryItem) {
        return inventoryItem.stockQuantity;
    }
    Inventory.checkStock = checkStock;
})(Inventory || (exports.Inventory = Inventory = {}));
