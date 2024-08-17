
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { addresses } from '../Data/addresses';
import Address_Card from '../Address/Address_Card';
import Heading from '../Heading/Heading'

const Delivery_Address = () => {

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(addresses.length === 0);
  const navigate = useNavigate()
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
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        streetAddress: data.get('address'),
        city: data.get('city'),
        state: data.get('state'),
        zipCode: data.get('zip'),
        mobile: data.get('phoneNumber'),
        email: data.get('email'),
      };
    }

    const orderData = { address, navigate };
    console.log(orderData);
  };

  return (
    <>
      <div className='address-heading'>Select Address</div>
      {addresses.length > 0 && (
        <div className='address-grid'>
          {addresses.map((addr, index) => (
            <Address_Card addr={addr} index={index} selectedAddress={selectedAddress} handleAddressSelect={handleAddressSelect} navigate={navigate} />
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
                  <label htmlFor='firstName'>First Name</label>
                  <input required type='text' id='firstName' name='firstName'  placeholder='Enter your first name' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='lastName'>Last Name</label>
                  <input required type='text' id='lastName' name='lastName' placeholder='Enter your last name' disabled={!!selectedAddress} />
                </div>
                <div className="fields">
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input required type='text' id='phoneNumber' name='phoneNumber' placeholder='Enter mobile number here' disabled={!!selectedAddress} />
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
                  <label htmlFor='zip'>Zip Code/Postal Code</label>
                  <input required type='text' id='zip' name='zip' placeholder='Enter pincode here' disabled={!!selectedAddress} />
                </div>
              </div>
              <div className="form-group">
                <div className="fields">
                  <label htmlFor='email'>Email</label>
                  <input required type='email' id='email' name='email' placeholder='Enter email here' disabled={!!selectedAddress} />
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
