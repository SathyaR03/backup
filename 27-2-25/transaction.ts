
import { Product } from './product';
import { Discounts } from './discount';

export function calculateTotal(products: Product[]): number {
  let total = 0;

  products.forEach(product => {
    const discountedPrice = Discounts.applyDiscount(product.price, product.category);
    total += discountedPrice;
  });

  return total;
}
