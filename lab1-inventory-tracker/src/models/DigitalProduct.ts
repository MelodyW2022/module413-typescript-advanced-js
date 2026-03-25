import { Product } from "./Product";
export class DigitalProduct extends Product {
  private _fileSize: number;
  public constructor(
    sku: string,
    name: string,
    price: number,
    fileSize: number,
  ) {
    super(sku, name, price);
    this._fileSize = fileSize;
  }

  public displayDetails(): string {
    return [super.displayDetails(), `File Size: ${this.fileSize}`].join("\n");
  }
  public getPriceWithTax(): number {
    // Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
    return this.price;
  }

  public get fileSize(): string {
    return `${this._fileSize.toFixed(1)} MB`;
  }
}
