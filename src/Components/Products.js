import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import ProductTitle from "./ProductTitle";
import { useDispatch, useSelector } from "react-redux";
import { filteredProductData, getProducts } from "./Redux/Actions";
import { LoadingSpinner } from "./LoadingSpinner";
import ProductCard2 from "./ProductCard2";

export default function Products(settings) {
  useEffect(() => {
    console.log("Settings in Products:", settings);
  }, [settings]);

  const ProductsData = useSelector((state) => state.reducer.products);
  const filteredData = useSelector((state) => state.reducer.filter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [productCardVariant, setProductCardVariant] = useState(settings.productCardVariant);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const Products = await fetch("https://fakestoreapi.com/products");
      const data = await Products.json();
      dispatch(getProducts(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Update product card variant when settings change
    setProductCardVariant(settings.productCardVariant);
  }, [settings.productCardVariant]);

  const getFiltered = (cat) => {
    if (cat === "All") {
      dispatch(getProducts(ProductsData));
    } else {
      const filterData = ProductsData.filter((el) => el.category === cat);
      dispatch(filteredProductData(filterData));
    }
  };

  return (
    <div className="products-container">
      <ProductTitle getFiltered={getFiltered} />
      <div className="products">
        {loading ? (
          <LoadingSpinner />
        ) : (
          filteredData.map((product) =>
            productCardVariant === "ProductCard1" ? (
              <ProductCard
                title={product.title}
                price={product.price}
                rating={product.rating}
                key={product.id}
                id={product.id}
                description={product.description}
                image={product.image}
              />
            ) : (
              <ProductCard
                title={product.title}
                price={product.price}
                rating={product.rating}
                key={product.id}
                id={product.id}
                description={product.description}
                image={product.image}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
