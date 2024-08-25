import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Orders.css';
import Order_Card from './Order_Card';
import { getAllOrders } from '../../State/Orders/Action';
import Heading from '../../Components/Heading/Heading';
import { FiSearch } from 'react-icons/fi';

const statusOptions = ['Delivered', 'Cancelled', 'Shipped', 'Placed', 'Pending'];

const Orders = () => {
  const [Statuses, setStatuses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const orders = useSelector(state => state.order.orders);
  const dispatch = useDispatch();
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = orders.filter(order => {
        const orderStatus = order.orderStatus ? order.orderStatus.toUpperCase() : '';
        const matchesStatus = Statuses.length === 0 || Statuses.includes(orderStatus);
        const matchesSearch = order.orderItems.some(item =>
          item.product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return matchesStatus && matchesSearch;
      });

      setFilteredOrders(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [Statuses, searchTerm, orders]);

  const handleStatusChange = (status) => {
    const formattedStatus = status.toUpperCase();
    setStatuses((prevSelected) => 
      prevSelected.includes(formattedStatus) ? [] : [formattedStatus]
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Heading heading={'My Orders'} />
      <div className='orders'>
        <div className="filter-orders">
          <h3>Filters</h3>
          <h2>Order Status</h2>
          {statusOptions.map((status, index) => (
            <div className="value" key={index}>
              <input
                type="checkbox"
                checked={Statuses.includes(status.toUpperCase())}
                onChange={() => handleStatusChange(status)}
              />
              <p>{status}</p>
            </div>
          ))}
        </div>
        <div className="my-orders">
          <div className="search-order">
            <input
              type="text"
              className="search-bar"
              placeholder="Search your orders here"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search"><FiSearch size={16} /> Search Orders</button>
          </div>
          {loading ? (
            <div className="no-products">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="order">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => <Order_Card key={order._id} order={order} />)
              ) : (
                <div className='no-products'>
                  <p>No orders found</p>
                </div>
              )}
            </div>
          )}
          <div className="show-more">Show More Orders</div>
        </div>
      </div>
    </>
  );
};

export default Orders;
