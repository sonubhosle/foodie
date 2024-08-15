import React from 'react'
import { assets } from '../../Assets/assets'
import { useNavigate } from 'react-router-dom'

const Card = ({ item }) => {

    const navigate = useNavigate();

    const navigateDetails = () => {
        navigate(`/product/${item.id}}`)
    }

    return (
        <div className='product-card' onClick={navigateDetails}>

            <div className="poster">
                <img src={item?.poster} alt={item.brand} />
                <div className="pluse">
                    <img src={assets.add_icon_green} alt="" />
                </div>
            </div>
            <div className="product-info">
                <div className="brand">{item.brand}</div>
                <div className="title">{item.title}</div>
                <div className="price-info">
                    <div className="discountPrice">₹{item.discountPrice}</div>
                    <div className="price">₹{item.price}</div>
                    <div className="discountPersent">{item.discountedPersent}% Off</div>
                </div>
                <div className="quantity">
                    {item.quantity > 0 ? (
                        <p className='in-stock'>In Stock</p>
                    ) : (
                        <p className='out-of-stock'>Out of Stock</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card