import React from 'react'
import ProductsCModified from '../components/ProductsCModified';
import  "./Shop.css";
import { Helmet } from 'react-helmet';

const Shop = () => {
    return (
        <div className = 'shoppage'>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <ProductsCModified />
        </div>
    )
}

export default Shop
