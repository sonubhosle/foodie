import React from 'react'

const Offer_Card = ({ item }) => {
  return (
    <div className='offer-card'>
      <img src={item.image} alt={item.off} />
      <div className="overlay">
      <div className="offer">{item.off}</div>
      </div>
      
    </div>
  )
}

export default Offer_Card