import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../State/Orders/Action'

const Address_Card = ({ addr, index, selectedAddress, dispatch, handleAddressSelect, navigate }) => {

    return (
        <div key={index} className="address_card">
            <label htmlFor={`address-${index}`} className="custom-radio-label">
                <div className="custom-radio-indicator"></div>
                <div className="address_details">
                    <div className="user_name">Name: {addr.name} {addr.surname}</div>
                    <div className="email">Email: {addr.email}</div>
                    <div className="mobile">Mobile: {addr.mobile}</div>
                    <div className="pincode">Pincode: {addr.pincode}</div>
                    <div className="street">Street: {addr.landmark}</div>
                    <div className="state_city">
                        <div className="city">City: {addr.city}</div>
                        <div className="state">State: {addr.state}</div>
                        <div className="state">State: {addr.country}</div>
                    </div>
                </div>
            </label>
            <div className="btns">
                <div className="radio border">
                    <input type="radio" id={`address-${index}`} name="address" value={JSON.stringify(addr)}
                        checked={JSON.stringify(addr) === JSON.stringify(selectedAddress)}
                        onChange={handleAddressSelect}
                        className="custom-radio-input"
                    />
                </div>
                <button className="deliver-button" type='submit' onClick={() => dispatch(createOrder({ address: addr, navigate }))}>
                    Deliver Here
                </button>
            </div>
        </div>
    )
}

export default Address_Card