import React from 'react';
import './Modal.css'

const Modal = ({closeModal, nightMode, image, title, description, price, addToBasket}) => (
    <div className='modal__container'>
          <button className="close__modal" onClick={closeModal}>
            x
          </button>
          <div className="modalProduct__details">
            <img className={`${nightMode && 'image__night '}`} src={image} alt={title} />
            <div className="modalProduct__details__description">
              <p className='modalProduct__details__description__title'>
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
)

export default Modal;
