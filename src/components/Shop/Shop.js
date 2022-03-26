import React, { useEffect, useState } from 'react';
import Order from '../OrderSummary/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);


    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Chose Item</h3>
                {
                    cart.map(item => <Order key={item.id} item={item}></Order>)
                }
                <div>
                    <button>test</button>
                    <button>joei</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;