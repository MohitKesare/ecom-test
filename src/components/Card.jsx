// id: 14,
// category: "Shoes",
// name: "Sneakers 2",
// color: "Blue",
// size: "Medium",
// brand: "Brand B",
// rating: 4.1,
// availability: "In Stock",
// discount: 8,
// price: 80,

import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({
  id,
  category,
  name,
  brand,
  rating,
  availability,
  discount,
  price,
  size,
  color,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/${id}.jpeg`} />
      </div>
      <div className="card-content">
        <div className="card-name">
          {name}
          {availability === "In Stock" ? (
            <p>(available)</p>
          ) : (
            <p>({availability})</p>
          )}
        </div>
        <div className="card-brand">
          {brand} {category} ({color})
        </div>
        <div className="card-rating">
          {rating}
          <FaStar className="golden" />
        </div>
        <div className="card-price">
          ${price} M.R.P ({discount}% off)
        </div>
        <div className="card-size">size : {size ? size : "All"}</div>
      </div>
    </div>
  );
};

export default Card;
