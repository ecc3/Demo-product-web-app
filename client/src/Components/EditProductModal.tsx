import { Button, Modal, TextField, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { UpdateProduct } from "../Types/Product";

export const EditProductModal = ({
  open,
  onClose,
  submit
}: {
  open: boolean;
  onClose: () => void;
  submit: (updatedProduct: UpdateProduct) => void;
}) => {
  const [newName, setNewName] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [newPrice, setNewPrice] = useState<string>("");
  const [newQuantity, setNewQuantity] = useState<string>("");

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <TextField
            label="Name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
          <TextField
            label="Description"
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
          />
          <TextField
            label="Price"
            value={newPrice}
            onChange={e => setNewPrice(e.target.value)}
          />
          <TextField
            label="Quantity"
            value={newQuantity}
            onChange={e => setNewQuantity(e.target.value)}
          />
          <Button
            onClick={() =>
              submit({
                name: newName,
                description: newDescription,
                price: newPrice,
                quantity: newQuantity
              })
            }
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};
