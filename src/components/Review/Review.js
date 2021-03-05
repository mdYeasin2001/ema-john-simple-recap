import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart'
import happy from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderCompleted, setOrderCompleted] = useState(false);
    console.log(cart);
    useEffect(() => {
        const savedProduct = getDatabaseCart();
        const productKeys = Object.keys(savedProduct);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedProduct[key];
            return product;
        })
        setCart(cartProducts);
    }, []);
    const reviewStyle = {
        borderBottom: '1px solid gray',
        padding: '5px'

    }
    const removeItem = (key) => {
        const products = cart.filter(pd => pd.key !== key);
        removeFromDatabaseCart(key);
        setCart(products);
    }
    const placeOrder = () => {
        setCart([]);
        setOrderCompleted(true);
        processOrder();
    }
    
    return (
        <div className='shop'>
            <div className='product-container'>
                {cart.map(pd => 
                <div key={pd.key} style={reviewStyle}>
                    <h4 style={{color: 'blue', fontSize: '400'}}>{pd.name}</h4>
                    <img src={pd.img} alt=""/>
                    <p>Quantity: {pd.quantity}</p>
                    <p><small>${pd.price}</small></p>
                    <button onClick={() => removeItem(pd.key)} className="main-button">Remove</button>
                </div>)}
                {orderCompleted && 
                    <div>
                        <h1>Thanks for your order.</h1>
                        <img src={happy} alt=""/>
                    </div>}
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
                <button onClick={placeOrder} className="main-button">Place Order</button>
                    
                
            </div>
        </div>
    );
};

export default Review;