
import { Product } from './product'; 

export namespace Inventory {
  
  export class InventoryItem {
    product: Product;
    stockQuantity: number;

    constructor(product: Product, stockQuantity: number = 0) {
      this.product = product;
      this.stockQuantity = stockQuantity;
    }
  }

  export function addStock(inventoryItem: InventoryItem, quantity: number): void {
    inventoryItem.stockQuantity += quantity;
    console.log(`${quantity} units of ${inventoryItem.product.name} added. New stock: ${inventoryItem.stockQuantity}`);
  }

  export function checkStock(inventoryItem: InventoryItem): number {
    return inventoryItem.stockQuantity;
  }
}
