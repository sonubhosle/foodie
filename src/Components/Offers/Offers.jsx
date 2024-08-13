import React from 'react'
import './Offers.css'
import { offer } from '../Data/offers'
import Offer_Card from './Offer_Card'
import Heading from '../Heading/Heading'


const Offers = () => {
  return (
  <>
  <Heading heading={'Top Offers'} />
    <div className='offer-grid'>
        {offer.map((item,index) => <Offer_Card item={item}  key={index}/>)}
    </div>
  </>
  )
}

export default Offers