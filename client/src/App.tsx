import { Box } from "@mui/material";
import { AllProducts } from "./Pages/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./Pages/ProductDetail";

function App() {
  return (
    <Router>
      <Box sx={{ height: 1 }}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/" element={<AllProducts />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
