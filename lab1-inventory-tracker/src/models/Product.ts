export class Product {
  protected sku: string;
  protected name: string;
  protected price: number;

  public constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  public displayDetails(): string {
    return [
      `SKU: ${this.sku}`,
      `Name: ${this.name}`,
      `Price: $${this.price.toFixed(2)}`,
    ].join("\n");
  }
  public getPriceWithTax(taxRate: number = 0.08): number {
    return this.price * (1 + taxRate);
  }
}
