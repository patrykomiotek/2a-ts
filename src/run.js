import { Animal } from "./Animal.js";
import { Car } from "./Car.js";
import { Cart, Shop, Product } from "./shop/index.js";

const animal1 = new Animal("cat", 4);
const car1 = new Car("audi", 2000);

animal1.run();
car1.drive();
