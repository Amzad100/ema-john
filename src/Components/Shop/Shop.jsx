import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedCart = [];
        // step :1 get id
        for (const id in storeCart) {
            // step: 2 get the product by using id
            const addedProducts = products.find(product => product.id === id);
            // step:3: get quantity of the product
            if (addedProducts) {
                const quantity = storeCart[id];
                addedProducts.quantity = quantity;
                // step:4: add the added prodct to save cart
                savedCart.push(addedProducts);
            }
        }
        // step:5: set the cart
        setCart(savedCart);
    }, [products]);

    const AddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;