import Star from "@mui/icons-material/Star";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Item.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Item = ({ buttons, id, title, image, price, rating, count }) => {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const increaseItem = () => {
    dispatch({
      type: "INCREASE_ITEM_COUNT",
      item: {
        id: id,
      },
    });
  };

  const decreaseItem = () => {
    if (count > 1) {
      dispatch({
        type: "DECREASE_ITEM_COUNT",
        item: {
          id: id,
        },
      });
    } else {
      removeFromBasket();
    }
  };

  return (
    <div className="item">
      <img className="Item__img" src={image} alt="" />
      <div className="Item__info">
        <p className="Item__title">{title}</p>
        <p className="Item__price">
          <strong>Unite price:</strong>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <strong>Total price:</strong>
        <small>$</small>
        <strong>{(price * count).toFixed(2)}</strong>
        <div className="Item__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star key={i} className="star" />
            ))}
        </div>

        <button onClick={removeFromBasket} style={buttons ? {} : { display: "none" }}>Remove From Basket</button>
        <div className="Item__counter" >
          <span className="Item__counterDecrease" onClick={decreaseItem} style={buttons ? {} : { display: "none" }}>
            {" "}
            <RemoveCircleIcon />{" "}
          </span>
          <span className="Item__counterLabel">{count}</span>
          <span className="Item__counterIncrease" onClick={increaseItem} style={buttons ? {} : { display: "none" }}>
            {" "}
            <AddCircleIcon />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
