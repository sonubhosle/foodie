import React from 'react';

import './Profile.css';
import Order_Card from '../Orders/Order_Card';
import { addresses } from '../../Components/Data/addresses';
import { cart } from '../../Components/Data/cart';
import '../Orders/Orders.css'
import Orders from '../Orders/Orders';
const Profile = () => {





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
          <div className="address_grid">
            {addresses.map((item, index) => (
              <div className="address_card" key={index}>
                <div className="user_name">Name : {item.firstName} {item.lastName}</div>
                <div className="email">Email : {item.email}</div>
                <div className="name">Mobile : {item.mobile}</div>
                <div className="name">Pincode : {item.zipCode}</div>
                <div className="name">Street : {item.streetAddress}</div>
                <div className="state_city">
                  <div className="city">City : {item.city}</div>
                  <div className="city">State : {item.state}</div>
                </div>
                <button>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>

        <Orders />
    </div>
  );
};

export default Profile;



