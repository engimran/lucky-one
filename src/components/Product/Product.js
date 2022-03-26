import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, picture, price } = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <div className='btn-cart'>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;