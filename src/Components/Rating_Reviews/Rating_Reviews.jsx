import React, { useEffect, useState } from 'react';
import './Rating_Reviews.css';
import { FaStar } from 'react-icons/fa';
import Stars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, getAllReviews } from '../../State/Reviews/Action';
import { createRating, getAllRatings } from '../../State/Rating/Action';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import axios from 'axios';

const Rating_Reviews = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewDescription, setReviewDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const ratings = useSelector((state) => state.ratings.ratings);
    const reviews = useSelector((state) => state.reviews.reviews);

    // Compute the average rating from the ratings array
    const calculateAverageRating = (ratings) => {
        if (ratings.length === 0) return 0;
        const totalRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
        return (totalRating / ratings.length).toFixed(1);
    };

    const averageRating = calculateAverageRating(ratings);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const reviewData = {
            title: reviewTitle,
            description: reviewDescription
        };

        try {
            await dispatch(createReview(productId, reviewData));
            await dispatch(createRating({ productId, rating }));

            toast.success('Review and rating added successfully');

            // Fetch updated data
            dispatch(getAllReviews(productId));
            dispatch(getAllRatings(productId));

            // Reset form fields
            setRating(0);
            setReviewTitle('');
            setReviewDescription('');
        } catch (err) {
            toast.error(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/products/id/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
        };

        fetchProduct();
        dispatch(getAllRatings(productId));
        dispatch(getAllReviews(productId));
    }, [dispatch, productId]);

    if (loading) return <Loader />;

    return (
        <div className='rating-reviews'>
            <div className="basic-details">
                <p>Ratings & Reviews</p>
                <div className="review-product">
                    <div>
                        <div className="name">{product.title}</div>
                        <div className="rate-review">
                            <div className="rate">
                                {averageRating} <FaStar size={14} />
                            </div>
                            <div className="review">({reviews.length} reviews)</div>
                        </div>
                    </div>
                    <img src={product.image} alt={product.title} />
                </div>
            </div>
            <div className="rating-review-form">
                <div className="rating-stars">
                    <h1>Rate this product</h1>
                    <Stars
                        count={5}
                        size={35}
                        isHalf={true}
                        value={rating}
                        onChange={handleRatingChange}
                    />
                </div>
                <div className="review-section">
                    <h1 className='mb'>Review this product</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-rating">
                            <div className="input-fields">
                                <div className="label">Description</div>
                                <textarea
                                    className='big-input'
                                    value={reviewDescription}
                                    onChange={(e) => setReviewDescription(e.target.value)}
                                    placeholder='Description'
                                />
                            </div>
                            <div className="input-fields border-top">
                                <div className="label">Title (Optional)</div>
                                <input
                                    value={reviewTitle}
                                    onChange={(e) => setReviewTitle(e.target.value)}
                                    placeholder='Title'
                                />
                            </div>
                        </div>
                        <button type="submit" className='review-submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Rating_Reviews;
