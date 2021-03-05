import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {key} = useParams();
    const product = fakeData.find(pd => pd.key === key);
    return (
        <div>
            <h1>{key} Details</h1>
            <Product showAddToCartBtn={false} product={product}/>
        </div>
    );
};

export default ProductDetails;