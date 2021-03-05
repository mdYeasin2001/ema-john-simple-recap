import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-data'>
                <h4><Link to={`/shop/${key}`}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} available in stock - order now</small></p>
                {props.showAddToCartBtn && <button className="main-button" onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;