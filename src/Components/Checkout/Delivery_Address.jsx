
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import Address_Card from '../Address/Address_Card';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../State/Orders/Action';
import axios from 'axios'
const Delivery_Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(addresses.length === 0);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const userId = auth?.user?._id;
  const jwt = localStorage.getItem("jwt");

  // Fetching User Addresses

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/addresses/${userId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setAddresses(response.data);
        console.log("Fetched addresses:"); // Log fetched addresses
      } catch (error) {
        console.log(error.message);
      }
    };

    if (userId && jwt) {
      fetchAddresses();
    }
  }, [userId, jwt]);


  const handleAddressSelect = (e) => {
    setSelectedAddress(JSON.parse(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let address;
    if (selectedAddress) {
      address = selectedAddress;
    } else {
      const data = new FormData(e.currentTarget);
      address = {
        name: data.get('name'),
        surname: data.get('surname'),
        landmark: data.get('address'),
        city: data.get('city'),
        state: data.get('state'),
        pincode: data.get('pincode'),
        mobile: data.get('mobile'),
        email: data.get('email'),
        country: data.get('country')
      };
    }

    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };

  return (
    <>
      <div className='address-heading'>Select Address</div>
      {addresses.length > 0 && (
        <div className='address-grid'>
          {addresses.map((addr, index) => (
            <Address_Card addr={addr} index={index} dispatch={dispatch} selectedAddress={selectedAddress} handleAddressSelect={handleAddressSelect} navigate={navigate} />
          ))}
        </div>
      )}

      {showForm && (
        <>
          <div className='address-heading  margin'>Select Address</div>
          <div className='address-form'>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="fields">
                  <label htmlFor='firstName'>Name</label>
                  <input required type='text' id='name' name='name' placeholder='Enter your first name' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='lastName'>Surname</label>
                  <input required type='text' id='surname' name='surname' placeholder='Enter your last name' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='mobile'>Phone Number</label>
                  <input required type='text' id='mobile' name='mobile' placeholder='Enter mobile number here' disabled={!!selectedAddress} />
                </div>
              </div>
              <div className="form-group">
                <div className="fields">
                  <label htmlFor='city'>City</label>
                  <input required type='text' id='city' name='city' placeholder='Enter city here' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='state'>State/Province/Region</label>
                  <input required type='text' id='state' name='state' placeholder='Enter state here' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='country'>Country</label>
                  <input required type='text' id='country' name='country' placeholder='Enter pincode here' disabled={!!selectedAddress} />
                </div>
              </div>
              <div className="form-group">
                <div className="fields">
                  <label htmlFor='email'>Email</label>
                  <input required type='email' id='email' name='email' placeholder='Enter email here' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='zip'>Zip Code/Postal Code</label>
                  <input required type='text' id='pincode' name='pincode' placeholder='Enter pincode here' disabled={!!selectedAddress} />
                </div>
              </div>
              <div className="form-group">
                <div className="fields-2">
                  <label htmlFor='address'>Address</label>
                  <textarea required id='address' name='address' placeholder='Enter address here' rows={3} disabled={!!selectedAddress}></textarea>
                </div>
              </div>
              <button type='submit' className="deliver-button">
                Deliver Here
              </button>
            </form>
          </div>
        </>
      )}

      {addresses.length > 0 && !showForm && (
        <button className="add-address-button" onClick={() => setShowForm(true)}>
          Add New Address
        </button>
      )}
    </>
  );
};

export default Delivery_Address;
