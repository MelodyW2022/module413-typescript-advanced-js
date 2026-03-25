import { DiscountableProduct } from "../interfaces/DiscountableProduct";
import { Product } from "./Product";

export class PhysicalProduct extends Product implements DiscountableProduct {
  //Add a private property weight to represent the weight of the physical product in kilograms.
  private _weight: number;
  //The constructor should take in the SKU, name, price, and weight of the product and initialize the corresponding properties.
  public constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this._weight = weight;
  }
  // Override the displayDetails() method to include the weight information in the product details string.
  public displayDetails(): string {
    return [super.displayDetails(), `Weight: ${this.weight}`].join("\n");
  }
  //Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
  public getPriceWithTax(taxRate: number = 0.1): number {
    return this.price * (1 + taxRate);
  }
  //Add a getter for the weight property that returns the weight in kilograms with one decimal place.
  public get weight(): string {
    return `${this._weight.toFixed(1)} kg`;
  }
  //Implement the applyDiscount() method from the DiscountableProduct interface to calculate a discounted price based on a given discount percentage.
  public applyDiscount(discountPercent: number): number {
    return this.price * (1 - discountPercent / 100);
  }
}
