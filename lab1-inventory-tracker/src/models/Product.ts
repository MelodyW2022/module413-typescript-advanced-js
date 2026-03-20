export class Product {
  sku: string;
  name: string:
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) -$${this.price.toFixed(2)}`;
  }
  getPriceWithTax(taxRate: number = 0.08): number {
    return this.price * (1+taxRate);
  }
}
