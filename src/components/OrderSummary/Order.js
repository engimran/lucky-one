import React from 'react';
import './Order.css'

const Order = ({ item }) => {
    const { name, price, picture } = item;
    return (
        <div className='order'>
            <img src={picture} alt="" />
            <p>{item.name}</p>

        </div>
    );
};

export default Order;