import { Shop } from "./Shop.js";
import { Cart } from "./Cart.js";

const shop = new Shop();
const product1 = {
  id: 1,
  name: "Klawiatura",
  price: 123,
};
const product2 = {
  id: 2,
  name: "Myszka",
  price: 12,
};
const product3 = {
  id: 3,
  name: "Monitor",
  price: 678,
};

shop.addProduct(product1);
shop.addProduct(product2);
shop.addProduct(product3);
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
