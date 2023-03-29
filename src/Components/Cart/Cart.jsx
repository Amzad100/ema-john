import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total *7 /100;

    const GrantTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h1>Cart summary</h1>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${GrantTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;