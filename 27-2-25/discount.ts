export namespace Discounts {
    export function calculateDiscount(category: string): number {
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
      export function applyDiscount(price: number, category: string): number {
      const discountPercentage = calculateDiscount(category);
      return price - (price * discountPercentage);

      }
}