import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";

export class Product {
  // Define properties based on API data
  // id, title, price, discountPercentage, category
  private id: number;
  private title: string;
  private price: number;
  private discountPercentage: number;
  private category: string;

  constructor(
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    category: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
  }

  displayDetails(): void {
    // Log product information to console
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Discount Percentage: ${this.discountPercentage}%`);
    console.log(`Category: ${this.category}`);
  }

  getPriceWithDiscount(): number {
    // 1. Call discountCalculator
    // 2. Return discounted price
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage,
    );
    return this.price - discountAmount;
  }

  getFinalPrice(): number {
    // 1. Call taxCalculator
    // 2. Return final price (after tax)
    const discountedPrice = this.getPriceWithDiscount();
    const taxAmount = calculateTax(discountedPrice, this.category);
    return discountedPrice + taxAmount;
  }
}
