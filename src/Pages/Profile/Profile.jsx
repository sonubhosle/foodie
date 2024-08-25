import React, { useEffect, useState } from 'react';
import './Profile.css';
import '../Orders/Orders.css'
import Orders from '../Orders/Orders';
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../State/Authentication/Action'
import axios from 'axios';
const Profile = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(state => state.auth);
  const [addresses, setAddresses] = useState([]);

  const userId = auth.user?._id;

  useEffect(() => {
    if (auth.user && auth.user.address) {
      setAddresses(auth.user.address);
    }
  }, [auth.user]);

  const deleteAddress = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/address/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      const updatedAddresses = addresses.filter(address => address._id !== id);
      setAddresses(updatedAddresses);
      toast.success('Address deleted successfully!');
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Failed to delete address.');
    }
  };

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/user/addresses/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setAddresses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      fetchAddresses();
    }
  }, [jwt, dispatch, userId]);

  const handleLogout = () => {
    dispatch(logout());
  };




  return (
    <div className='user_profile'>
      <h6>Sonu's Profile & Addresses ({addresses.length})</h6>
      <div className="user_details">
        <div className="user_box">
          <div className="item">
            <div className="name">Username :</div> <p>Sonu Bhosle</p>
          </div>
          <div className="item">
            <div className="name"> Email :</div> <p>sbhosle1011@gmail.com</p>
          </div>
          <div className="item">
            <div className="name"> Mobile: </div><p>8080987767</p>
          </div>
          <button className='logout_btn'>
            Logout
          </button>
        </div>
        <div className="user_address">
  {addresses.length > 0 ? (
    <div className="address_grid">
      {addresses.map((item, index) => (
        <div className="address_card" key={index}>
          <div className="user_name">Name: {item.name} {item.surname}</div>
          <div className="email">Email: {item.email}</div>
          <div className="name">Mobile: {item.mobile}</div>
          <div className="name">Pincode: {item.pincode}</div>
          <div className="name">Street: {item.landmark}</div>
          <div className="state_city">
            <div className="city">City: {item.city}</div>
            <div className="city">State: {item.state}</div>
            <div className="city">State: {item.country}</div>
          </div>
          <button onClick={() => deleteAddress(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  ) : (
    <div className="no-address">
      <p>Address not found</p>
    </div>
  )}
</div>

      </div>

      <Orders />
    </div>
  );
};

export default Profile;



