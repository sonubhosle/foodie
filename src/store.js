import { applyMiddleware, legacy_createStore, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './State/Authentication/Reducer';
import { productReducer } from './State/Products/Reducer';
import { cartReducer } from './State/Carts/Reducer';
import { orderReducer } from './State/Orders/Reducer';
import { reviewsReducer } from './State/Reviews/Reducer';
import { ratingsReducer } from './State/Rating/Reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart:cartReducer,
  order:orderReducer,
  reviews:reviewsReducer,
  ratings:ratingsReducer
})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));