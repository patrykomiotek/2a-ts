import { ProductType } from "./Product";

export class Shop {
  products: ProductType[] = [];

  addProduct(product: ProductType) {
    this.products.push(product);
  }

  listProducts() {
    this.products.forEach((product) => {
      console.log(JSON.stringify(product, null, 2));
    });
  }
}
