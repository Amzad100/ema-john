import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const { name, ratings, price, img, seller } = props.product;

    const AddToCart = props.AddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button onClick={() => AddToCart(props.product)} className='btn-card'>Add to Cart   <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;