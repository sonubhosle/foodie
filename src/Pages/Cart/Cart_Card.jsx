import React from 'react'

const Cart_Card = ({item}) => {
  return (
    <div className='cart-card'>
        <div className="left-side">
            <div className="cart-img">
                <img src={item.poster} alt="" />
                <div className="cart-update-btns">
                    <button>-</button>
                    <p>5</p>
                    <button>+</button>
                </div>
            </div>
            <div className="cart-info">
                <div className="cart-title">{item.title}</div>
                <div className="cart-brand">{item.brand}</div>
                <div className="cart-price-box">
                    <div className="cart-price">₹{item.price}</div>
                    <div className="cart-discount-price">₹{item.discountPrice}</div>
                    <div className="cart-discount">{item.discountedPersent}% Off</div>
                </div>
                <button className="remove-cart">Remove</button>
            </div>
        </div>
        <div className="right-side">
        Delivery by Sat Aug 17 / <p>Free</p>
        </div>
    </div>
  )
}

export default Cart_Card