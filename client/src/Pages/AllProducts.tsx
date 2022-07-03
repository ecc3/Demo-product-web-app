import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 1
      }}
    >
      <List>
        {allProducts?.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ListItem>
              <ListItemText>{product.name}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};
