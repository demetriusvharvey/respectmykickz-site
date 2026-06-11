import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SellTrade from "./pages/SellTrade";
import Contact from "./pages/Contact";

// Placeholder pages (will be built out next)
function NewArrivals() {
  return <Shop />;
}
function Brands() {
  return <Shop />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/sell-trade" element={<SellTrade />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
