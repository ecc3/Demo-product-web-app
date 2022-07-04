import { Request, Response } from "express";
import products from "../Products";
import { v4 as uuidv4 } from "uuid";

export const getAllProducts = (req: Request, res: Response) => {
  const productsOverview = products.map(product => ({
    id: product.id,
    name: product.name
  }));

  return res.status(200).send({ products: productsOverview });
};

export const getProductById = (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = products.find(product => product.id === productId);

  if (product) return res.status(200).send({ product });
  else {
    return res.status(404).send();
  }
};

export const addProduct = (req: Request, res: Response) => {
  const { name, description, price, quantity } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, quantity };

  products.push(newProduct);
  return res.status(201).send({ product: newProduct });
};

export const updateProductById = (req: Request, res: Response) => {
  const { productId } = req.params;
  const { name, description, price, quantity } = req.body;
  const productToUpdate = products.find(product => product.id === productId);

  if (!name && !description && !price && !quantity)
    return res.status(400).send();

  if (productToUpdate) {
    if (name) productToUpdate.name = name;
    if (description) productToUpdate.description = description;
    if (price) productToUpdate.price = price;
    if (quantity) productToUpdate.quantity = quantity;

    return res.status(200).send({ product: productToUpdate });
  } else {
    return res.status(404).send();
  }
};

export const deleteProductById = (req: Request, res: Response) => {
  const { productId } = req.params;
  const productIndex = products.findIndex(product => product.id === productId);

  if (productIndex >= 0) {
    const deletedProduct = products.splice(productIndex, 1)[0];
    if (deletedProduct)
      return res.status(200).send({ product: deletedProduct });
  } else {
    return res.status(404).send();
  }
};
