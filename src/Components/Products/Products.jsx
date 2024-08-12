import React from 'react'
import Card from './Card'
import './Products.css'
import Heading from '../Heading/Heading'

const Products = ({ products }) => {
  return (
    <>
      <Heading heading={'Products'} />
      <div className='product-grid'>
        {
          products.map((item, index) => <Card item={item} key={index} />)
        }
      </div>
    </>
  )
}

export default Products