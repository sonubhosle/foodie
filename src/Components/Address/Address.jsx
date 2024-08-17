import React from 'react'

const Address = ({ address }) => {
    return (
            <div className="address_card" >
                <div className="user_name">Name : {address?.firstName} {address?.lastName}</div>
                <div className="email">Email : {address?.email}</div>
                <div className="name">Mobile : {address?.mobile}</div>
                <div className="name">Pincode : {address?.zipCode}</div>
                <div className="name">Street : {address?.streetAddress}</div>
                <div className="state_city">
                    <div className="city">City : {address?.city}</div>
                    <div className="city">State : {address?.state}</div>
                </div>

            </div>
    )
}

export default Address