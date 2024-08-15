import React from 'react'
import './Rating_Reviews.css'
import {FaStar} from 'react-icons/fa'

const Rating_Reviews = () => {
    return (
        <div className='rating-reviews'>
            <div className="basic-details">
                <p>Ratings & Reviews</p>
                <div className="review-product">
                    <div>
                        <div className="name">boAt Rockerz 330 Pro Blue...</div>
                        <div className="rate-review">
                            <div className="rate">4.1 <FaStar /></div>
                            <div className="review">(86,157)</div>
                        </div>
                    </div>
                    <img src="https://rukminim2.flixcart.com/image/48/48/xif0q/headphone/k/e/k/rockerz-330-pro-boat-original-imah256ugbedyfww.jpeg?q=90" alt="" />
                </div>
            </div>
            <form className="rating-review-form"></form>
        </div>
    )
}

export default Rating_Reviews