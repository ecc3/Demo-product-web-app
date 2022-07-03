import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/api";
import { MinimalProduct } from "../Types/Product";

export const AllProducts = () => {
  const [allProducts, setAllProducts] = useState<MinimalProduct[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await getAllProducts();
      if (products) setAllProducts(products);
    };
    fetchProducts();
  });

  return (
    <Box>
      <List>
        {allProducts?.map(product => (
          <ListItem key={product.id}>
            <ListItemText>{product.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
