import React from "react";
import "./Product.css";
import Star from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the dataLayer
    const index = basket.findIndex((itemId) => itemId.id === id);
    if (index >= 0) {
      dispatch({
        type: "INCREASE_ITEM_COUNT",
        item: {
          id: id,
        },
      });
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          count: 1,
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    }
  };

  return (
      <div className="Product">
        <div className="product__info">
          <p> {title} </p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            <p>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <Star key={i} className="star" />
                ))}
            </p>
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket} className="add__button">Add to Basket</button>
      </div>
  );
};

export default Product;
