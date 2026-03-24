import { AppError } from "../utils/errorHandler";
export type ProductFromAPI = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  category: string;
};
export async function fetchProducts(): Promise<ProductFromAPI[]> {
  try {
    // 1. Fetch data from DummyJSON API
    const response: Response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new AppError(
        `HTTP error: ${response.status} ${response.statusText}`,
      );
    }
    // 2. Convert response to JSON
    const data: { products: ProductFromAPI[] } = await response.json();
    // 3. Return the products array (data.products)
    return data.products;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    // Throw a custom AppError
    throw new AppError("Failed to fetch products");
  }
}
