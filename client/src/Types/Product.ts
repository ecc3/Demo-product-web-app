export type Product = {
  id: string | null;
  name: string;
  description: string;
  price: string;
  quantity: string;
};

export type UpdateProduct = {
  name?: string;
  description?: string;
  price?: string;
  quantity?: string;
};

export type MinimalProduct = {
  id: string;
  name: string;
};
