import React, { useEffect, useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import { category } from '../../Components/Data/cat'
import './Home.css'
import Bannner from '../../Components/Banner/Bannner'
import Products from '../../Components/Products/Products'
import Offers from '../../Components/Offers/Offers'
const Home = () => {

 

  return (
    <div className='home-section'>
      <Categories category={category} />
      <Bannner />
      <Products />
      <Offers />
    </div>
  )
}

export default Home