import React, { useState, useEffect } from "react";
import sampleProducts from "./data";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Card from "./Card";

// const sampleProducts = [
//   { id: 1, category: 'Dresses', name: 'Dress 1', color: 'Red', size: 'Small', brand: 'Brand A', rating: 4.5, availability: 'In Stock', discount: 10, price: 80 },
//   { id: 2, category: 'Shoes', name: 'Shoes 1', color: 'Blue', size: 'Medium', brand: 'Brand B', rating: 3.8, availability: 'Out of Stock', discount: 0, price: 60 },
//   { id: 3, category: 'Electronics', name: 'Phone 1', color: 'Black', brand: 'Brand C', rating: 4.2, availability: 'In Stock', discount: 15, price: 500 },
//   // Add more products as needed
// ];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [discountFilter, setDiscountFilter] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    // Fetch data from your backend API
    // For this example, we'll use sample data
    setProducts(sampleProducts);
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = [...products]; // Create a shallow copy

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (priceRangeFilter !== "") {
      const [min, max] = priceRangeFilter.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseInt(min) && product.price <= parseInt(max)
      );
    }

    if (colorFilter !== "all") {
      filtered = filtered.filter((product) => product.color === colorFilter);
    }

    if (sizeFilter !== "all") {
      filtered = filtered.filter((product) => product.size === sizeFilter);
    }

    if (brandFilter !== "all") {
      filtered = filtered.filter((product) => product.brand === brandFilter);
    }

    if (ratingFilter > 0) {
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    if (availabilityFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.availability === availabilityFilter
      );
    }

    if (discountFilter !== "all") {
      filtered = filtered.filter((product) => product.discount > 0);
    }

    // Apply sorting
    if (sortOption === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-high") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "new-arrivals") {
      // Implement your logic for sorting by new arrivals
    } else if (sortOption === "best-sellers") {
      // Implement your logic for sorting by best sellers
    }

    setFilteredProducts(filtered);
  }, [
    categoryFilter,
    priceRangeFilter,
    colorFilter,
    sizeFilter,
    brandFilter,
    ratingFilter,
    availabilityFilter,
    discountFilter,
    sortOption,
    products,
  ]);

  return (
    <div className="main-container">
      <div>
        <Navbar />
      </div>
      {/* Filters Section */}
      <div className="container ">
        <div className="leftsidebar">
          <Filter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priceRangeFilter={priceRangeFilter}
            setPriceRangeFilter={setPriceRangeFilter}
            colorFilter={colorFilter}
            setColorFilter={setColorFilter}
            sizeFilter={sizeFilter}
            setSizeFilter={setSizeFilter}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            availabilityFilter={availabilityFilter}
            setAvailabilityFilter={setAvailabilityFilter}
            discountFilter={discountFilter}
            setDiscountFilter={setDiscountFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          {/* Sort Options Section */}
        </div>

        {/* Product List Section */}
        <div className="main-product-container">
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="single-outcard">
              <Card
                id={product.id}
                name={product.name}
                category={product.category}
                brand={product.brand}
                rating={product.rating}
                availability={product.availability}
                discount={product.discount}
                price={product.price}
                size={product.size}
                color={product.color}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
