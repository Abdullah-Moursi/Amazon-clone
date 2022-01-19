import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

const Subtotal = () => {
    // const getBasketTotal = (parameter) => {
    //     parameter.reduce()
    // }
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                
                <p>
                    {/* Subtotal ({basket.length} items): */}
                    Subtotal (0 items):

                    <strong>{` ${value}`}</strong>

                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
            )}
            decimalScale={2}
            // value={getBasketTotal(basket)}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix='$'
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
