import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([])


    useEffect(() => {
        const databaseProduct = getDatabaseCart();
        const productsKeys = Object.keys(databaseProduct);
        const products = productsKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = databaseProduct[key];
            return product;
        })
        // console.log(products);
        setCart(products);
    }, [])
    // console.log(cart);

    const handleAddToCart = (product) => {
        const clickedProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        if(clickedProduct){
            count = product.quantity + 1;
            product.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            setCart([...others, product]);
        }else{
            product.quantity = 1;
            setCart([...cart, product])
        }
        addToDatabaseCart(product.key, count);

    }
    
    return (
        <div className='shop'>
            <div className='product-container'>
                {product.map((product, i) => <Product showAddToCartBtn={true} key={i} product={product} handleAddToCart={handleAddToCart} />)}

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;