import { Shop } from "./Shop.js";

const shop = new Shop();
shop.addProduct({
  id: 1,
  name: "Klawiatura",
  price: 123,
});
shop.addProduct({
  id: 2,
  name: "Myszka",
  price: 12,
});
shop.addProduct({
  id: 3,
  name: "Monitor",
  price: 678,
});
shop.listProducts();
