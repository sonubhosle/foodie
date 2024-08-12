import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../Data/products';
import Card from './Card';
import './Products.css'
import Heading from '../Heading/Heading';
const Filtered_Products = () => {
    const { name } = useParams();

    const filtered_Products = products.filter(product => product.category === name);
    console.log(filtered_Products)

    return (
        <>
            <Heading heading={'Filterd Products'} />
            <div className='product-grid '>
                {filtered_Products.length > 0 ? (
                    filtered_Products.map((item, index) => <Card item={item} key={index} />)
                ) : (
                    <div className='no-products'>
                        <p>Product Not Found</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Filtered_Products