import React, { Suspense, lazy } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader';
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Rating_Reviews = lazy(() => import('./Components/Rating_Reviews/Rating_Reviews'));
const Checkout = lazy(() => import('./Components/Checkout/Checkout'));
const Order_Details = lazy(() => import('./Pages/Orders/Order_Details'));
const Product_Details = lazy(() => import('./Pages/Product_Details/Product_Details'));
const Filtered_Products = lazy(() => import('./Components/Products/Filtered_Products'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Orders = lazy(() => import('./Pages/Orders/Orders'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
import Payments  from  './Components/Payment/Payments';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Home />} />
        <Route path='/signup' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account/orders' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/products/:name" element={<Filtered_Products />} />
        <Route path='/product/:productId' element={<Product_Details />} />
        <Route path='/product/:productId/reviews-ratings' element={<Rating_Reviews />} />
        <Route path='/checkout/' element={<Checkout />} />
        <Route path='/account/order/:orderId' element={<Order_Details />} />
        <Route path='/:orderId' element={<Payments />} />
      </Routes>
      <Footer />
      < ToastContainer />
    </Suspense>
  )
}

export default App