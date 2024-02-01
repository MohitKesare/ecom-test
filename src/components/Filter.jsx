import React from "react";

const Filter = ({
  categoryFilter,
  setCategoryFilter,
  priceRangeFilter,
  setPriceRangeFilter,
  colorFilter,
  setColorFilter,
  sizeFilter,
  setSizeFilter,
  brandFilter,
  setBrandFilter,
  ratingFilter,
  setRatingFilter,
  availabilityFilter,
  setAvailabilityFilter,
  discountFilter,
  setDiscountFilter,
  sortOption,
  setSortOption,
}) => {
  return (
    <div className="filter-container">
      <h2 className="filter_heading">Filters</h2>
      {/* Category Filter */}
      <div className="single-label">
        <label htmlFor="categoryFilter" className="label">
          Category:
        </label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All Categories
          </option>
          <option value="Dresses" className="option">
            Dresses
          </option>
          <option value="Shoes" className="option">
            Shoes
          </option>
          <option value="Electronics" className="option">
            Electronics
          </option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="single-label">
        <label htmlFor="priceRangeFilter" className="label">
          Price Range:
        </label>
        <select
          id="priceRangeFilter"
          value={priceRangeFilter}
          onChange={(e) => setPriceRangeFilter(e.target.value)}
          className="select"
        >
          <option value="" className="option">
            All Prices
          </option>
          <option value="0-50" className="option">
            $0 - $50
          </option>
          <option value="50-100" className="option">
            $50 - $100
          </option>
          <option value="100-200" className="option">
            $100 - $200
          </option>
          {/* Add more price range options as needed */}
        </select>
      </div>

      {/* Color Filter */}
      <div className="single-label">
        <label htmlFor="colorFilter" className="label">
          Color:
        </label>
        <select
          id="colorFilter"
          value={colorFilter}
          onChange={(e) => setColorFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All Colors
          </option>
          <option value="Red" className="option">
            Red
          </option>
          <option value="Blue" className="option">
            Blue
          </option>
          <option value="Green" className="option">
            Green
          </option>
          {/* Add more color options as needed */}
        </select>
      </div>

      {/* Size Filter */}
      <div className="single-label">
        <label htmlFor="sizeFilter" className="label">
          Size:
        </label>
        <select
          id="sizeFilter"
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All Sizes
          </option>
          <option value="Small" className="option">
            Small
          </option>
          <option value="Medium" className="option">
            Medium
          </option>
          <option value="Large" className="option">
            Large
          </option>
          {/* Add more size options as needed */}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="single-label">
        <label htmlFor="brandFilter" className="label">
          Brand:
        </label>
        <select
          id="brandFilter"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All Brands
          </option>
          <option value="Brand A" className="option">
            Brand A
          </option>
          <option value="Brand B" className="option">
            Brand B
          </option>
          <option value="Brand C" className="option">
            Brand C
          </option>
          {/* Add more brand options as needed */}
        </select>
      </div>

      {/* Rating Filter */}
      <div className="single-label">
        <label htmlFor="ratingFilter" className="label">
          Rating:
        </label>
        <select
          id="ratingFilter"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
          className="select"
        >
          <option value="0" className="option">
            All Ratings
          </option>
          <option value="4" className="option">
            4 stars and above
          </option>
          <option value="3" className="option">
            3 stars and above
          </option>
          <option value="2" className="option">
            2 stars and above
          </option>
          <option value="1" className="option">
            1 star and above
          </option>
        </select>
      </div>

      {/* Availability Filter */}
      <div className="single-label">
        <label htmlFor="availabilityFilter" className="label">
          Availability:
        </label>
        <select
          id="availabilityFilter"
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All
          </option>
          <option value="In Stock" className="option">
            In Stock
          </option>
          <option value="Out of Stock" className="option">
            Out of Stock
          </option>
        </select>
      </div>

      {/* Discount Filter */}
      <div className="single-label">
        <label htmlFor="discountFilter" className="label">
          Discount:
        </label>
        <select
          id="discountFilter"
          value={discountFilter}
          onChange={(e) => setDiscountFilter(e.target.value)}
          className="select"
        >
          <option value="all" className="option">
            All
          </option>
          <option value="discounted" className="option">
            Discounted Items
          </option>
        </select>
      </div>
      <div className="single-label">
        <label htmlFor="sortOption" className="label">
          Sort By:
        </label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select"
        >
          <option value="default" className="option">
            Default
          </option>
          <option value="price-low" className="option">
            Price Low to High
          </option>
          <option value="price-high" className="option">
            Price High to Low
          </option>
          <option value="rating-high" className="option">
            Rating High to Low
          </option>
          <option value="new-arrivals" className="option">
            New Arrivals
          </option>
          <option value="best-sellers" className="option">
            Best Sellers
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
