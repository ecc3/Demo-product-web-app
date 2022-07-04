import { Box } from "@mui/material";
import { AllProducts } from "./Pages/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./Pages/ProductDetail";
import { useEffect, useState } from "react";
import { getAllProducts } from "./Services/api";
import { MinimalProduct } from "./Types/Product";

function App() {
  const [allProducts, setAllProducts] = useState<MinimalProduct[]>([]);

  const fetchProducts = async () => {
    const { products } = await getAllProducts();
    if (products) setAllProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Box sx={{ height: 1 }}>
        <Routes>
          <Route
            path="/product/:productId"
            element={<ProductDetail refetchProducts={fetchProducts} />}
          />
          <Route
            path="/"
            element={
              <AllProducts
                allProducts={allProducts}
                setAllProducts={setAllProducts}
              />
            }
          />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
