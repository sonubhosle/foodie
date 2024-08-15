import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Order_Card = ({ item }) => {
  const navigate = useNavigate();

  const handleRating = () => {
    navigate('/product/review/rating');
  };

  // Function to determine dot color based on order status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'green';
      case 'Cancelled':
        return 'red';
      case 'Shipped':
        return 'blue';
      case 'Placed':
        return 'orange';
      case 'Pending':
        return 'yellow';
      default:
        return 'grey';
    }
  };

  return (
    <div className='order-card'>
      <div className='order-left'>
        <img src={item.poster} alt={item.title} className="order-img" />
        <div className="order-info">
          <div className="order-brand">{item.brand}</div>
          <div className="order-title">{item.title}</div>
        </div>
      </div>
      <div className="order-price">₹{item.discountPrice}</div>
      <div className="order-status">
        <div className="status">
          <div className="dot" style={{ backgroundColor: getStatusColor(item.orderStatus) }}></div>
          {item.orderStatus} on {item.deliveryDate || 'Aug 09'}
        </div>
        {item.orderStatus === 'Delivered' && <span>Your item has been delivered</span>}
        <div className="rating-button" onClick={handleRating}>
          <FaStar /> Rate & Review Product
        </div>
      </div>
    </div>
  );
};

export default Order_Card;
