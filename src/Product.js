import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  //props

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating) //method to print the start dynamically
            .fill() //here firstly we create an array of size rating
            .map(
              (
                _,
                i //fill the array with the given
              ) => (
                <p>⭐</p> //with the star using map
              )
            )}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
