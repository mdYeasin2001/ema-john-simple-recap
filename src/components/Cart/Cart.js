import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    cart.map(product => total += product.price * product.quantity);
    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }else if(total > 50){
        shipping = 4.99;
    }else if(total > 30){
        shipping = 9.99;
    }else if(total > 0){
        shipping = 14.99;
    }
    const tax = total * 0.1;
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Grand Total: {total + shipping + tax}</p>
            {props.children}
        </div>
    );
};

export default Cart;