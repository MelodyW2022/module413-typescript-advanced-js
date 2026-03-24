import { fetchProducts, type ProductFromAPI } from "./services/apiService";
import { Product } from "./models/Product";
import { handleError } from "./utils/errorHandler";

async function main(): Promise<void> {
  try {
    // 1. Call API
    const rawProducts: ProductFromAPI[] = await fetchProducts();
    // 2. Convert raw data into Product instances
    const products: Product[] = rawProducts.map(
      (p) =>
        new Product(p.id, p.title, p.price, p.discountPercentage, p.category),
    );
    // 3. Loop through products and call methods
    for (const product of products) {
      product.displayDetails();
      console.log(
        "Discounted Price: $",
        product.getPriceWithDiscount().toFixed(2),
      );
      console.log(
        "Final Price (after tax): $",
        product.getFinalPrice().toFixed(2),
      );
      console.log("--------------------------------------------------");
    }
  } catch (error) {
    handleError(error);
  }
}
main();
