import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) =>{
        setCart([...cart, product])
    }
    return (
        <div className='shop'>
            <div className='product-container'>
                {product.map((product, i) => <Product key={i} product={product} handleAddToCart={handleAddToCart}/>)}
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;