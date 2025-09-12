import { Product } from "./Product.js";
import { Shop } from "./Shop.js";
import { Cart } from "./Cart.js";

const shop = new Shop();

const product1 = new Product({
  id: 1,
  name: "Klawiatura",
  price: 123,
})
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });

const product2 = new Product({
  id: 2,
  name: "Myszka",
  price: 12,
});
const product3 = new Product({
  // id: 3,
  // name: "Monitor",
  sdhdskjhfkhj: 123,
  dshkldsfhdfs: "sdfsdfsd",
  // price: 678,
});

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
