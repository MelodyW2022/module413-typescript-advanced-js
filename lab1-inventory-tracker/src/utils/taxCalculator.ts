import { PhysicalProduct } from "../models/PhysicalProduct";
import { Product } from "../types/Product";
export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
