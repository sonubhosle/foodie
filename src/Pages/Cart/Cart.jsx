import React, { useEffect } from 'react'
import { cart } from '../../Components/Data/cart'
import Cart_Card from './Cart_Card'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../State/Carts/Action'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)


  const handleCheckout = () => {
    navigate('/checkout?step=2');
  }


  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem, dispatch])


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="delivery-address">
          <p>From Saved Address </p>
          <div className="btn-pincode">Enter Delivery Pincode</div>
        </div>
        {cart.cart?.cartItems.length > 0 ? (
          cart.cart.cartItems.map((item, index) => <Cart_Card item={item} key={index} />)
        ) : (
          <div className="cart-not-found">
            <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
            <p>Your cart is empty!</p>
            <span>Add items to it now.</span>
            <button className="shop-now" onClick={() => navigate('/')}>Shop now</button>
          </div>
        )}
        <div className="place-order">
          <p>Place Your Order </p>
          <div className="btn">Place Order</div>
        </div>
      </div>
      <div className="cart-details">
        <h3>Price details</h3>
        <div className="cart-values">
          <div className="item-box">
            <div className="label">Price </div>
            <div className="value">₹{cart.cart?.totalPrice}</div>
          </div>
          <div className="item-box">
            <div className="label">Discount</div>
            <div className="value green">-₹{cart.cart?.discount}</div>
          </div>
          <div className="item-box">
            <div className="label">Delivery Charges</div>
            <div className="value green">Free</div>
          </div>
          <div className="line"></div>
          <div className="item-box">
            <div className="label bold">Total Amount</div>
            <div className="value bold">₹{cart.cart?.totalDiscountPrice}</div>
          </div>
          <div className="line"></div>
          <p className='green bold-xl'>You will save ₹{cart.cart?.discount} on this order</p>

          <div className="checkout-btn" onClick={handleCheckout} >Checkout</div>
        </div>
      </div>
    </div>
  )
}

export default Cart