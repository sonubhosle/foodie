import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_ALL_REVIEWS_REQUEST, GET_ALL_REVIEWS_SUCCESS, GET_ALL_REVIEWS_FAILURE,
} from './Types';

const initialState = {
    reviews: [],
    review: null,
    loading: false,
    error: null,
    success: false,
};

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
        case GET_ALL_REVIEWS_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_REVIEW_SUCCESS:
            return { ...state, loading: false, success: true, review: action.payload, error: null };

        case GET_ALL_REVIEWS_SUCCESS:
            return { ...state, loading: false, reviews: action.payload, error: null };

        case CREATE_REVIEW_FAILURE:
        case GET_ALL_REVIEWS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
