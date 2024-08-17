import React from 'react'

const Address_Card = ({ addr, index, selectedAddress, handleAddressSelect,navigate }) => {



    return (
        <div key={index} className="address_card">
            <label htmlFor={`address-${index}`} className="custom-radio-label">
                <div className="custom-radio-indicator"></div>
                <div className="address_details">
                    <div className="user_name">Name: {addr.firstName} {addr.lastName}</div>
                    <div className="email">Email: {addr.email}</div>
                    <div className="mobile">Mobile: {addr.mobile}</div>
                    <div className="pincode">Pincode: {addr.zipCode}</div>
                    <div className="street">Street: {addr.streetAddress}</div>
                    <div className="state_city">
                        <div className="city">City: {addr.city}</div>
                        <div className="state">State: {addr.state}</div>
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
                <button className="deliver-button" onClick={() => console.log({ address: addr, navigate })}>
                    Deliver Here
                </button>
            </div>
        </div>
    )
}

export default Address_Card