import React, { useEffect, useState } from 'react';
import { assets } from '../../Assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Card = ({ item }) => {
    const navigate = useNavigate();

    const navigateDetails = () => {
        navigate(`/product/${item._id}`);
    };


    return (
        <div className='product-card' onClick={navigateDetails}>
            <div className="poster">
                <img src={item.image} alt={item.brand} />
                <div className="pluse">
                    <img src={assets.add_icon_green} alt="" />
                </div>
            </div>
            <div className="product-info">
                <div className="brand">{item.brand}</div>
                <div className="title">{item.title}</div>
                <div className="price-info">
                    <div className="discountPrice">₹{item.discountedPrice}</div>
                    <div className="price">₹{item.price}</div>
                    <div className="discountPersent">{item.discountPersent}% Off</div>
                </div>
                <div className="rating_quantity">
                    {item.numRatings > 0 && (
                        <div className="ratings">
                            {item.numRatings} <FaStar size={14} />
                        </div>
                    )}
                    {item.numReviews > 0 && (
                        <div className="ratings">
                            {item.numReviews} <FaStar size={14} />
                        </div>
                    )}
                    <div className="quantity">
                        {item.quantity > 0 ? (
                            <p className='in-stock'>In Stock</p>
                        ) : (
                            <p className='out-of-stock'>Out of Stock</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
