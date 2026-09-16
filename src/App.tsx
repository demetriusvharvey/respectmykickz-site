import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sneaker from "./pages/Sneaker";
import Cart from "./pages/Cart";
import SellTrade from "./pages/SellTrade";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/new-arrivals" element={<Shop />} />
      <Route path="/brands" element={<Shop />} />
      <Route path="/products/:handle" element={<Sneaker />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Navigate to="/cart" replace />} />
      <Route path="/sell-trade" element={<SellTrade />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
