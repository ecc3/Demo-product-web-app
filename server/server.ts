import cors from "cors";
import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById
} from "./controllers/productsController";

const port = 8080;
const host = "0.0.0.0";
const app = express();

app.use(cors());
app.use(express.json({ type: "*/*" }));

app.get("/api/products", getAllProducts);
app.get("/api/product/:productId", getProductById);
app.post("/api/product", addProduct);
app.put("/api/product/:productId", updateProductById);
app.delete("/api/product/:productId", deleteProductById);

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
