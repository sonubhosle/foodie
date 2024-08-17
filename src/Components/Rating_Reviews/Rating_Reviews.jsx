import React from 'react'
import './Rating_Reviews.css'
import { FaStar } from 'react-icons/fa'
import image2 from '../../Assets/food_2.png'
import Stars from 'react-rating-stars-component'

const Rating_Reviews = () => {
    return (
        <div className='rating-reviews'>
            <div className="basic-details">
                <p>Ratings & Reviews</p>
                <div className="review-product">
                    <div>
                        <div className="name">Lorem ipsum dolor sit.</div>
                        <div className="rate-review">
                            <div className="rate">4.1 <FaStar size={14} /></div>
                            <div className="review">(86,157)</div>
                        </div>
                    </div>
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="rating-review-form">
                <div className="rating-stars">
                    <h1>Rate this product</h1>
                    <Stars classNames={'stars'} count={5} size={35} isHalf={true} />
                </div>
                <div className="review-section">
                    <h1 className='mb'>Review this product</h1>
                    <form >
                        <div className="form-group">
                            <div className="input-fields">
                                <div className="label">Description</div>
                                <textarea className='big-input' name="" id="" placeholder='Description' />
                            </div>
                            <div className="input-fields border-top">
                                <div className="label">Title (Optional)</div>
                                <input name="" id="" placeholder='Title' />
                            </div>
                        </div>
                        <button type="submit" className='review-submit'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Rating_Reviews