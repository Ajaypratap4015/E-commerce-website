import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Home from "./Components/Home";
import ProductDetals from "./Components/ProductDetals";
import Cart from "./Components/Cart";
import Settings from "./Components/Settings"; // Import the Settings component
import NavProducts from "./Components/NavProducts";
import Footer from "./Components/Footer";
import { Checkout } from "./Components/Checkout";
import { Orders } from "./Components/Orders";



function App() {
  const Products = useSelector((state) => state.reducer.products);
  const [settings, setSettings] = useState({
    navigationBar: "NavBar1",
    productCardVariant: "ProductCard1",
    catalogDisplayOption: "carousel",
  });

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <>
      {/* Render Navbar based on settings */}
      {settings.navigationBar === "NavBar1" ? (
        <Navbar />
      ) : (
        <nav className="ddd">
          {settings.navigationBar === "NavBar2" ? <Navbar2 /> : null}
        </nav>
      )}



      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<NavProducts />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/products/:id"
          element={
            Products.length !== 0 ? <ProductDetals /> : <Navigate to="/home" />
          }
        />
        {/* Pass settings and handler to Settings component */}
        <Route
          path="/settings"
          element={<Settings settings={settings} onSettingsChange={handleSettingsChange} />}
        />
        {/* Pass settings to Products component */}
        <Route
          path="/products"
          element={<Products settings={settings} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}

function ProductsWrapper({ settings, onSettingsChange }) {
  return <Products settings={settings} onSettingsChange={onSettingsChange} />;
}

export default App;
