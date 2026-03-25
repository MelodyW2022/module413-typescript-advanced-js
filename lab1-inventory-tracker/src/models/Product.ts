export abstract class Product {
  protected sku: string;
  protected name: string;
  protected price: number;

  //abstract class can have constructor and method that must be implemented by subclasses, but cannot be instantiated directly.
  public constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  //method with implementation, can be used by subclasses as is or overridden if needed.
  public displayDetails(): string {
    return [
      `SKU: ${this.sku}`,
      `Name: ${this.name}`,
      `Price: $${this.price.toFixed(2)}`,
    ].join("\n");
  }
  //method with no implementation, must be implemented by subclasses.
  public abstract getPriceWithTax(): number;
}
