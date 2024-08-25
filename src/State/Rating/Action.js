// src/redux/ratings/actions.js
import { api } from '../../Config/apiConfig';
import {
    CREATE_RATING_REQUEST, CREATE_RATING_SUCCESS, CREATE_RATING_FAILURE,
    GET_ALL_RATINGS_REQUEST, GET_ALL_RATINGS_SUCCESS, GET_ALL_RATINGS_FAILURE, GET_RATING_BY_ID_REQUEST, GET_RATING_BY_ID_SUCCESS, GET_RATING_BY_ID_FAILURE,
} from './Types';

// Create Rating
export const createRating = (ratingData) => async (dispatch) => {
    dispatch({ type: CREATE_RATING_REQUEST });
    try {
        const { data } = await api.post('/api/rate/ratings', ratingData);
        dispatch({ type: CREATE_RATING_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_RATING_FAILURE, payload: error.message });
    }
};

// Get All Ratings for a Product
export const getAllRatings = (productId) => async (dispatch) => {
    dispatch({ type: GET_ALL_RATINGS_REQUEST });
    try {
        const { data } = await api.get(`/api/rate/ratings/${productId}`);
        dispatch({ type: GET_ALL_RATINGS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_RATINGS_FAILURE, payload: error.message });
    }
};

// Get Rating by ID
export const getRatingById = (ratingId) => async (dispatch) => {
    dispatch({ type: GET_RATING_BY_ID_REQUEST });
    try {
        const { data } = await api.get(`/api/rate/${ratingId}`);
        dispatch({ type: GET_RATING_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_RATING_BY_ID_FAILURE, payload: error.message });
    }
};