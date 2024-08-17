import React from 'react'
import Address from '../Address/Address'
import { addresses } from '../Data/addresses'
import Order_Summery_Card from '../../Pages/Orders/Order_Summery_Card'
import { cart } from '../Data/cart'
import '../../Pages/Cart/Cart.css'
const Order_Summery = () => {
  return (
    <div className='order-summery'>
      {
        addresses.map((address, index) => <Address address={address} key={index} />)
      }
      <div className='cart margin-0'>
        <div className="cart-items">
        <div className="delivery-address">
          <p>Order Summry</p>
          <div className="btn-pincode">Your Orders</div>
        </div>
          {cart.map((item, index) => (<Order_Summery_Card item={item} key={index} />))}
        </div>
        <div className="cart-details">
          <h3>Price details</h3>
          <div className="cart-values">
            <div className="item-box">
              <div className="label">Price </div>
              <div className="value">₹3,598</div>
            </div>
            <div className="item-box">
              <div className="label">Discount</div>
              <div className="value green">− ₹2,840</div>
            </div>
            <div className="item-box">
              <div className="label">Delivery Charges</div>
              <div className="value green">Free</div>
            </div>
            <div className="line"></div>
            <div className="item-box">
              <div className="label bold">Total Amount</div>
              <div className="value bold">₹761</div>
            </div>
            <div className="line"></div>
            <p className='green bold-xl'>You will save ₹2,837 on this order</p>

            <div className="checkout-btn" >Checkout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order_Summery