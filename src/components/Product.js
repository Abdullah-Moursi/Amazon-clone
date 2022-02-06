import React from "react";
import { useStateValue } from "../StateProvider";
import Modal from "./Modal";
import "./Product.css";

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  nightMode,
  openModal,
  closeModal,
  modal,
  description,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <>
      {modal ? (
        <Modal
          nightMode={nightMode}
          closeModal={closeModal}
          addToBasket={addToBasket}
          image={image}
          title={title}
          description={description}
          price={price}
        />
      ) : (
        <div className={`product ${nightMode ? "product_night " : ""}`}>
          <div className="product__info">
            <p>{title}</p>

            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
           
          </div>
 <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          <img
            className={`${nightMode && "image__night "}`}
            onClick={openModal}
            src={image}
            alt={title}
          />
          <button
            onClick={() => {
              addToBasket();
            }}
          >
            Add to Basket
          </button>
        </div>
      )}
    </>
  );
};

export default Product;
