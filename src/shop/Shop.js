export class Shop {
  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    this.products.forEach((product) => {
      console.log(JSON.stringify(product, null, 2));
    });
  }
}
