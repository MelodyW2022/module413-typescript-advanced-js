import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

// Create instances of PhysicalProduct and DigitalProduct
const physicalProduct1 = new PhysicalProduct("101", "Laptop", 999.99, 2);
const digitalProduct1 = new DigitalProduct("201", "E-book", 19.99, 80);
// Display details and prices with tax
const products: Product[] = [physicalProduct1, digitalProduct1];
for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Price with tax: $${product.getPriceWithTax().toFixed(2)}`);
  console.log("--------------------------------------------------");
}
