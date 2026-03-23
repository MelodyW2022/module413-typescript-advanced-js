export function calculateTax(price: number, category: string): number {
  // Default tax rate: 4.75%
  // If category === "groceries", use 3%
  let taxRate;
  if (category === "groceries") {
    taxRate = 0.03;
  } else {
    taxRate = 0.0475;
  }
  return price * taxRate;
}
