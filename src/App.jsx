import Navbar from "./components/Navbar";
import DiscountCard from "./pages/DiscountCard";

import FlashSale from "./pages/FlashSale";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <DiscountCard />
      <FlashSale />
      <Products />
      {/* <Routes>
        <Route path="/" element={} />
        <Route path="/featured-category" element={} />
      </Routes> */}
    </>
  );
}

export default App;
