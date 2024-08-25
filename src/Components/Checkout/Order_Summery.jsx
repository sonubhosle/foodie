import React, { useEffect } from 'react'
import Address from '../Address/Address'
import { addresses } from '../Data/addresses'
import Order_Summery_Card from '../../Pages/Orders/Order_Summery_Card'
import '../../Pages/Cart/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../State/Orders/Action'

const Order_Summery = () => {

  const dispatch = useDispatch();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const orderId = searchParams.get('order_id');
  const { order } = useSelector(store => store)


  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  return (
    <div className='order-summery'>
      <Address address={order.order?.shippingAddress} />

      <div className='cart margin-0'>
        <div className="cart-items">
          <div className="delivery-address">
            <p>Order Summry</p>
            <div className="btn-pincode">Your Orders</div>
          </div>
          {order.order?.orderItems.map((item, index) => (<Order_Summery_Card item={item} key={index} />))}
        </div>
        <div className="cart-details">
          <h3>Price details</h3>
          <div className="cart-values">
            <div className="item-box">
              <div className="label">Price </div>
              <div className="value">{order.order?.totalPrice}</div>
            </div>
            <div className="item-box">
              <div className="label">Discount</div>
              <div className="value green">− ₹{order.order?.discount}</div>
            </div>
            <div className="item-box">
              <div className="label">Delivery Charges</div>
              <div className="value green">Free</div>
            </div>
            <div className="line"></div>
            <div className="item-box">
              <div className="label bold">Total Amount</div>
              <div className="value bold">₹{order.order?.totalDiscountPrice}</div>
            </div>
            <div className="line"></div>
            <p className='green bold-xl'>You will save ₹{order.order?.discount} on this order</p>

            <div className="checkout-btn" >Checkout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order_Summery