import React from "react";
import { useStateValue } from "../StateProvider";
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
        <div className='modal'>
          <button className="close__modal" onClick={closeModal}>
            x
          </button>
          <div className="modalProduct__details">
            <img className={`${nightMode && 'image__night '}`} src={image} alt={title} />
            <div className="modalProduct__details__description">
              <p>
                <strong>{title}</strong>
              </p>
              <p className='modalProduct__description'>{description}</p>
              <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
                <button
                  className="modal__button"
                  onClick={() => {
                    addToBasket();
                    closeModal();
                  }}
                >
                  Add to Basket
                </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`product ${nightMode ? "product_night " : ""}`}>
          <div className="product__info">
            <p>{title}</p>

            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div>

          <img className={`${nightMode && 'image__night '}`} onClick={openModal} src={image} alt={title} />
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
