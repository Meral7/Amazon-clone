import React from 'react'
import { NumericFormat } from 'react-number-format'
import { useAuth } from '../context/GlobalState';
import { getBasketTotal } from '../context/AppReducer';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Subtotal() {
    const { basket } = useAuth();
    const Navigate = useNavigate();
   
    return (
        <div>
            <NumericFormat prefix="$" allowLeadingZeros thousandSeparator="," decimalScale={2} renderText={(value) => (
                <>
                    <p>
                        Subtotal({basket.length} items) :<strong>{value}</strong>
                    </p>
                </>
            )}
            value={getBasketTotal(basket)} // Assuming basket is an array of items with a price property
            displayType="text"
            />
            <small><input type='checkbox'/> This order contains a gift</small>
            <button onClick={()=>Navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}
