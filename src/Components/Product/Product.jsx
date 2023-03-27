import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, ratings, price, img, seller } = props.products;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button className='btn-card'>Add to card</button>
        </div>
    );
};

export default Product;