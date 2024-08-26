import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Rating_Reviews.css'
const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/reviews/${productId}`);
        const data = response.data;
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false);
      } catch (err) {
        setError('Error fetching reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div className='review-card' key={review._id}>
            <div className="top-header">
              <div className="user-photo">
                <img src={review.user.photo} alt={review.user.name} />
              </div>
              <div className="user-details">
                <div className="name">{review.user.name}{review.user.surname}</div>
                <div className="date">
                  Created at: {new Date(review.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="reviews-box">
              <p className='description'>{review.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='no-review'>
          <p>No reviews available.</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
