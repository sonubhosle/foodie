import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOrder } from '../../State/Orders/Action';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';

const Order_Card = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderClick = (orderId) => {
    navigate(`/account/order/${orderId}`);
  };

  const handleRating = (productId) => {
    navigate(`/product/${productId}/reviews-ratings`);
  };

  const getStatusColor = (status) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case 'delivered':
        return 'green';
      case 'cancelled':
        return 'red';
      case 'shipped':
        return 'blue';
      case 'placed':
        return 'orange';
      case 'pending':
        return 'yellow';
      default:
        return 'grey';
    }
  };

  const handleDeleteClick = (orderId) => {
    dispatch(deleteOrder(orderId));
    toast.success('Order deleted successfully!');
  };

  // Function to format the date as 'MMM DD'
  const formatDate = (date) => {
    const options = { month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {order?.orderItems?.length ? (
        order.orderItems.map((orderItem) => (
          <div className='order-card' key={orderItem.product.id || orderItem.product._id} >
            <div className="order-left">
              <img src={orderItem.product.image} alt={orderItem.product.title} />
              <div className="order-info">
                <div className="order-brand">{orderItem.product.brand}</div>
                <div className="order-title" onClick={() => handleOrderClick(order._id)}>{orderItem.product.title}</div>
                <button className='red' onClick={() => handleDeleteClick(order._id)}>Cancel</button>

              </div>
            </div>
            <div className="order-price">₹{orderItem?.discountedPrice}</div>
            <div className="order-status">
              <div className="status">
                <div className="dot" style={{ backgroundColor: getStatusColor(order.orderStatus) }}></div>
                {order.orderStatus.toUpperCase()} on {formatDate(order.deliveryDate || order.orderDate)}
              </div>
              {order.orderStatus === 'DELIVERED' && <span>Your item has been delivered</span>}
              <div className="rating-button" onClick={() => handleRating(orderItem.product._id)}>
                <FaStar /> Rate & Review Product
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No order items available.</p>
      )}
    </>
  );
};

export default Order_Card;
