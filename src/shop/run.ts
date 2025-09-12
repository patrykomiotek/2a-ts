import { Product } from "./Product";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

const shop = new Shop();

const product1 = new Product({
  id: 1,
  name: "Klawiatura",
  price: 123,
  status: "in-stock",
});

const product2 = new Product({
  id: 2,
  name: "Myszka",
  price: 12,
  status: "sold",
});
const product3 = new Product({
  id: 3,
  name: "Monitor",
  price: 678,
  status: "unavailable",
});

shop.addProduct(product1);
shop.addProduct(product2);
shop.addProduct(product3);
shop.addProduct({
  id: 123,
  name: "Test",
  price: 56,
  status: "sold", // ProductStatus.SOLD
  description: "Lorem ipsum",
});
shop.listProducts();

const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product3);
console.log("Basket items: ");
cart.listProducts();
console.log(cart.sumAmount());
cart.removeProduct(1);
console.log("Basket items: ");
cart.listProducts();
console.log(cart.sumAmount());
