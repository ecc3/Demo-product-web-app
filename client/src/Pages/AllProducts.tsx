import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../Services/api";
import { MinimalProduct, UpdateProduct } from "../Types/Product";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { EditProductModal } from "../Components/EditProductModal";

export const AllProducts = ({
  allProducts,
  setAllProducts
}: {
  allProducts: MinimalProduct[];
  setAllProducts: React.Dispatch<React.SetStateAction<MinimalProduct[]>>;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleSubmitModal = async (newProduct: UpdateProduct) => {
    const { product: addedProduct } = await addProduct(newProduct);
    setAllProducts(currentProducts => [...currentProducts, addedProduct]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 1
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <List>
            {allProducts?.map(product => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <ListItem>
                  <ListItemIcon>
                    <CategoryOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>{product.name}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </CardContent>
      </Card>
      <Button
        startIcon={<AddOutlinedIcon />}
        onClick={() => setModalOpen(true)}
      >
        Add new product
      </Button>
      <EditProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        submit={handleSubmitModal}
      />
    </Box>
  );
};
