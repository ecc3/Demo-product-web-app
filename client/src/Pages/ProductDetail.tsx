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
import { getProduct, deleteProduct, updateProduct } from "../Services/api";
import { Product, UpdateProduct } from "../Types/Product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EditProductModal } from "../Components/EditProductModal";

export const ProductDetail = ({
  refetchProducts
}: {
  refetchProducts: () => void;
}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isDeleted, setIsDeleted] = useState<boolean>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
    const quantityInt = parseInt(product?.quantity ?? "0");
    if (quantityInt === 0) return "Out of stock";
    else if (quantityInt < 10) return "Low availability";
    else return "Good availability";
  };

  const handleDeleteItem = async () => {
    if (productId) {
      const deleted = await deleteProduct(productId);
      if (deleted) setIsDeleted(true);
      refetchProducts();
    }
  };

  const handleSubmitModal = async (updatedProduct: UpdateProduct) => {
    if (productId) {
      const { product: fetchedProduct } = await updateProduct(
        productId,
        updatedProduct
      );
      setProduct(fetchedProduct);
    }
    setModalOpen(false);
  };

  return (
    <Box sx={{ mt: 15, display: "flex", justifyContent: "center" }}>
      <IconButton sx={{ alignSelf: "flex-start" }}>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
      </IconButton>
      <Card sx={{ maxWidth: 345 }}>
        {isDeleted ? (
          <Typography sx={{ p: 2 }}>This product has been deleted.</Typography>
        ) : (
          <>
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
              <Button size="small" onClick={() => setModalOpen(true)}>
                Update
              </Button>
              <Button size="small" onClick={handleDeleteItem}>
                Delete
              </Button>
            </CardActions>
          </>
        )}
      </Card>
      <EditProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        submit={handleSubmitModal}
      />
    </Box>
  );
};
