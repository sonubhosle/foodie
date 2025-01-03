import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../State/Orders/Action'
import { updatePayment } from '../../State/Payments/Action'
import Track_Orders from '../../Pages/Orders/Track_Orders'
import './Payments.css'
import { MdOutlineCelebration } from "react-icons/md";

const Payments = () => {
    const [paymentId, setPaymentId] = useState()
    const [referenceId, setReferenceId] = useState()
    const [paymentStatus, setPaymentStatus] = useState()
    const { orderId } = useParams()
    const dispatch = useDispatch()

    const { order } = useSelector(store => store)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setPaymentId(urlParams.get("razorpay_payment_link_id"));
        setPaymentStatus(urlParams.get("razorpay_payment_link_status"))
    }, [])

    useEffect(() => {
        const data = { orderId, paymentId }
        dispatch(getOrderById(orderId))
        dispatch(updatePayment(data))
    }, [orderId, paymentId])

    // Map order status to step index
    const getStepIndex = (status) => {
        switch (status) {
            case 'PLACED':
                return 0;
            case 'CONFIRMED':
                return 1;
            case 'SHIPPED':
                return 2;
            case 'DELIVERED':
                return 3;
            default:
                return 0;
        }
    }

    const activeStep = getStepIndex(order?.order?.orderStatus);

    return (
        <>
            <div className='payment-success'>
                <div className="icon"><MdOutlineCelebration size={35} color='#019031' /></div>
                <div className='success'>Payment Success</div>
                <p>Congratulations, your order is placed!</p>
            </div>

            <Track_Orders activeStep={activeStep} />

            <div className="payment-orders">
                {order.order?.orderItems?.map((item, index) => (
                    <div className='order-card' key={index}>
                        <div className="left-side">
                            <div className="order-img">
                                <img src={item.product?.image} alt={item.product?.title} />
                            </div>
                            <div className="order-info">
                                <div className="order-title">{item.product?.title}</div>
                                <div className="order-brand">{item.product?.brand}</div>
                                <div className="order-price-box">
                                    <div className="order-price">₹{item.product?.price}</div>
                                    <div className="order-discount-price">₹{item.product?.discountedPrice}</div>
                                    <div className="order-discount">{item.product?.discountPersent}% Off</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Payments;
