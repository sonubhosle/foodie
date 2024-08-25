import { api } from '../../Config/apiConfig';
import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_ALL_REVIEWS_REQUEST, GET_ALL_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAILURE,
} from './Types';

// Create Review
export const createReview = (productId, reviewData) => async (dispatch) => {
    dispatch({ type: CREATE_REVIEW_REQUEST });

    try {
        const { data } = await api.post('/api/reviews', {
            ...reviewData,
            productId,
        });
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error creating review:", error); // Log the error
        dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
    }
};

// Get All Reviews
export const getAllReviews = (productId) => async (dispatch) => {
    dispatch({ type: GET_ALL_REVIEWS_REQUEST });
    console.log(productId)
    try {
        const { data } = await api.get(`/api/reviews/${productId}`);
        console.log(data)
        
        dispatch({ type: GET_ALL_REVIEWS_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching reviews:", error); // Log the error
        dispatch({ type: GET_ALL_REVIEWS_FAILURE, payload: error.message });
    }
};
