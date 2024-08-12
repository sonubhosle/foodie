import React, { Suspense, lazy } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader';
import Footer from './Components/Footer/Footer';
const Filtered_Products = lazy(() => import('./Components/Products/Filtered_Products'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Orders = lazy(() => import('./Pages/Orders/Orders'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/products/:name" element={<Filtered_Products />} />
  
      </Routes>
  <Footer/>
    </Suspense>
  )
}

export default App