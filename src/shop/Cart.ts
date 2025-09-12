import type { ProductType } from "./Product";

export class Cart {
  products: ProductType[] = [];

  addProduct(product: ProductType) {
    this.products.push(product);
  }

  listProducts() {
    this.products.forEach((product) => {
      console.log(JSON.stringify(product, null, 2));
    });
  }

  sumAmount() {
    const initialValue = 0;
    return this.products.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.price,
      initialValue
    );
  }

  removeProduct(id: number) {
    console.log({ id });
    this.products = this.products.filter((product) => {
      // this.products.filter
      console.log({ product });
      if (product.id !== id) {
        return product;
      }
    });
  }
}
