export function calculateDiscount(
  price: number,
  discountPercentage: number,
): number {
  // Calculate the discount amount
  // Example: 100 * 10% = 10
  return (price * discountPercentage) / 100;
}
