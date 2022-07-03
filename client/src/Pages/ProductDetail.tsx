import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../Services/api";
import { Product } from "../Types/Product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const { product: fetchedProduct } = await getProduct(productId);
        if (fetchedProduct) setProduct(fetchedProduct);
      }
    };
    fetchProduct();
  }, [productId]);

  const getAvailability = () => {
    if (product?.quantity === "0") return "Out of stock";
    // else if (product?.quantity < 10) return "Low availability";
    else return "Good availability";
  };

  return (
    <Box sx={{ mt: 15, display: "flex", justifyContent: "center" }}>
      <IconButton sx={{ alignSelf: "flex-start" }}>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
      </IconButton>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h4">{product?.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product?.description}
          </Typography>
          <Typography variant="h4">&euro;{product?.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {getAvailability()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Update</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
