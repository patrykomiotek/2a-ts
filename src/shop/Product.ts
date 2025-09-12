export type ProductType = {
  id: number;
  name: string;
  price: number;
  status: "in-stock" | "sold" | "unavailable";
  description?: string;
};

export class Product {
  id: ProductType["id"];
  name: ProductType["name"];
  price: ProductType["price"];
  status: ProductType["status"];

  constructor(product: ProductType) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.status = product.status;
  }
}
