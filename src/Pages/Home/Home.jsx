import React from 'react'
import Categories from '../../Components/Categories/Categories'
import { category } from '../../Components/Data/cat'
import './Home.css'
import Bannner from '../../Components/Banner/Bannner'
import Products from '../../Components/Products/Products'
import { products } from '../../Components/Data/products'
const Home = () => {
  return (
    <div className='home-section'>
      <Categories category={category} />
      <Bannner />
      <Products products={products} />
    </div>
  )
}

export default Home