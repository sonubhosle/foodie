import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, updateCartItem } from '../../State/Carts/Action'
import { toast } from 'react-toastify'

const Cart_Card = ({ item }) => {


    const dispatch = useDispatch()

    const handleUpdateCartItem = (num) => {
        const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id }
        dispatch(updateCartItem(data));

    }

    const handleRemoveCartItem = async () => {
        try {
            await dispatch(removeCartItem(item._id));
            toast.success('Cart item removed successfully');
        } catch (error) {
            toast.error('Something went wrong');
        }
    }


    return (
        <div className='cart-card'>
            <div className="left-side">
                <div className="cart-img">
                    <img src={item.product?.image} alt="" />
                    <div className="cart-update-btns">
                        <button onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => handleUpdateCartItem(1)}>+</button>
                    </div>
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
            <div className="right-side">
                Delivery by Sat Aug 17 / <p>Free</p>
                <button className="remove-cart" onClick={handleRemoveCartItem}>Remove</button>

            </div>
        </div>
    )
}

export default Cart_Card