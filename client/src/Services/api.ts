import { Product, UpdateProduct } from "../Types/Product";

const apiUrl = "http://0.0.0.0:8080/api";

export const getAllProducts = () => {
  return fetch(`${apiUrl}/products`).then(rsp => {
    if (!rsp.ok) throw new Error("An error occurred fetching the products");
    return rsp.json();
  });
};

export const getProduct = (productId: string) => {
  return fetch(`${apiUrl}/product/${productId}`).then(rsp => {
    if (!rsp.ok) throw new Error("An error occurred fetching the product");
    return rsp.json();
  });
};

export const addProduct = (product: Product) => {
  return fetch(`${apiUrl}/product`, {
    method: "POST",
    body: JSON.stringify(product)
  }).then(rsp => {
    if (!rsp.ok) throw new Error("An error occurred adding the product");
    return rsp.json();
  });
};

export const updateProduct = (
  productId: string,
  updateProduct: UpdateProduct
) => {
  return fetch(`${apiUrl}/product/${productId}`, {
    method: "PUT",
    body: JSON.stringify(updateProduct)
  }).then(rsp => {
    if (!rsp.ok) throw new Error("An error occurred updating the product");
    return rsp.json();
  });
};

export const deleteProduct = (productId: string) => {
  return fetch(`${apiUrl}/product/${productId}`).then(rsp => {
    if (!rsp.ok) throw new Error("An error occurred fetching the product");
    return rsp.json();
  });
};
