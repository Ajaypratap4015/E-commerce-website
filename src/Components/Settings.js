// Settings.js
import React,{useState} from "react";
import "./Settings.css";

const Settings = ({ settings, onSettingsChange }) => {
  // Destructure settings
  const [tempSettings, setTempSettings]  = useState(settings);

  // Function to handle changes in navigation bar setting
  const handleNavigationBarChange = (e) => {
    setTempSettings({
      ...tempSettings,
      navigationBar: e.target.value,
    });
  };

  // Function to handle changes in product card variant setting
  const handleProductCardVariantChange = (e) => {
    setTempSettings({
      ...tempSettings,
      productCardVariant: e.target.value,
    });
  };

  // Function to handle changes in catalog display option setting
  const handleCatalogDisplayOptionChange = (e) => {
    setTempSettings({
      ...tempSettings,
      catalogDisplayOption: e.target.value,
    });
  };
  const applyChanges = () => {
    onSettingsChange(tempSettings);
  };

  return (
    <div className="settings-container">
      <h2 className="settings-heading">Settings</h2>
      {/* Navigation Bar setting */}
      <div className="settings-select">
        <label className="settings-label">Navigation Bar:</label>
        <select value={tempSettings.navigationBar} onChange={handleNavigationBarChange}>
          <option value="NavBar1">NavBar1</option>
          <option value="NavBar2">NavBar2</option>
        </select>
      </div>
      {/* Product Card Variant setting */}
      <div className="settings-select">
        <label className="settings-label">Product Card Variant:</label>
        <select value={tempSettings.productCardVariant} onChange={handleProductCardVariantChange}>
          <option value="ProductCard1">ProductCard1</option>
          <option value="ProductCard2">ProductCard2</option>
        </select>
      </div>
      {/* Catalog Display Option setting */}
      <div className="settings-select">
        <label className="settings-label">Catalog Display Option:</label>
        <select value={tempSettings.catalogDisplayOption} onChange={handleCatalogDisplayOptionChange}>
          <option value="carousel">Carousel</option>
          <option value="view_all">View All</option>
        </select>
      </div>
      <button className="settings-submit" onClick={applyChanges}>Apply</button>
    </div>
  );
};

export default Settings;
