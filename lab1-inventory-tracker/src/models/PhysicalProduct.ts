import { Product } from "./Product";

export class PhysicalProduct extends Product {
  private _weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this._weight = weight;
  }
  getPriceWithTax(taxRate: number = 0.1): number {
    //Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    return this.price * (1 + taxRate);
  }

  public get weight(): string {
    return `${this._weight.toFixed(1)}kg`;
  }
}
