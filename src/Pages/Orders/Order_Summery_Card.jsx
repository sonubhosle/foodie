import React from 'react'

const Order_Summery_Card = ({ item }) => {
    return (
        <div className='cart-card'>
            <div className="left-side">
                <div className="cart-img">
                    <img src={item.product?.image} alt="" />
                </div>
                <div className="cart-info">
                    <div className="cart-title">{item.product?.title}</div>
                    <div className="cart-brand">{item.product?.brand}</div>
                    <div className="cart-price-box">
                        <div className="cart-price">₹{item.product?.price}</div>
                        <div className="cart-discount-price">₹{item.product?.discountedPrice}</div>
                        <div className="cart-discount">{item.product?.discountPersent}% Off</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order_Summery_Card