import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
};

const setUpProduct: () => Product = () => ({
  id: uuidv4(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  quantity: faker.random.numeric(2)
});

const setUpProducts: () => Product[] = () => {
  let products: Product[] = [];
  let productsCount = 10;
  while (productsCount > 0) {
    const newProduct = setUpProduct();
    console.log(newProduct.id);
    products.push(newProduct);
    productsCount--;
  }

  return products;
};

export default setUpProducts();
