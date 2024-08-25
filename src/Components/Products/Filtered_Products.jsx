import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
import './Products.css'
import Heading from '../Heading/Heading';
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Products/Action';
const Filtered_Products = () => {

  const { name } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(findProducts())
  }, [])

  const filtered_Products = products?.content?.filter(product => product.category === name);

  return (
    <>
      <Heading heading={'Filterd Products'} />
      <div className='product-grid '>
        {filtered_Products?.length > 0 ? (
          filtered_Products?.map((item, index) => <Card item={item} key={index} />)
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