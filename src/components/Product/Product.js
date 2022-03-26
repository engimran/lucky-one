import React from 'react';
import './Product.css'
import { BsCart4 } from 'react-icons/bs';

const Product = ({ product, handleAddToCart }) => {
    const { name, picture, price } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <div className='btn-cart'>
                <button className='btn-add-cart' onClick={() => handleAddToCart(product)}>Add to Cart <BsCart4 /></button>
            </div>
        </div>

    );
};

export default Product;