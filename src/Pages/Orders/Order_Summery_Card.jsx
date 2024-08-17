import React from 'react'

const Order_Summery_Card = ({item}) => {
  return (
    <div className='cart-card'>
    <div className="left-side">
        <div className="cart-img">
            <img src={item.poster} alt="" />
        </div>
        <div className="cart-info">
            <div className="cart-title">{item.title}</div>
            <div className="cart-brand">{item.brand}</div>
            <div className="cart-price-box">
                <div className="cart-price">₹{item.price}</div>
                <div className="cart-discount-price">₹{item.discountPrice}</div>
                <div className="cart-discount">{item.discountedPersent}% Off</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Order_Summery_Card