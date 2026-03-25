export interface DiscountableProduct {
  applyDiscount(discountPercent: number): number;
}
