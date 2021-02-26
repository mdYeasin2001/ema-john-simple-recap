import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-data'>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} available in stock - order now</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;