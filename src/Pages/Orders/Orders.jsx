import React, { useState, useEffect } from 'react';
import './Orders.css';
import Heading from '../../Components/Heading/Heading';
import { cart } from '../../Components/Data/cart';
import Order_Card from './Order_Card';
import { FiSearch } from 'react-icons/fi';

const statusOptions = ['Delivered', 'Cancelled', 'Shipped', 'Placed', 'Pending'];

const Orders = () => {
  const [Statuses, setStatuses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(cart);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = cart.filter((order) => {
        const matchesStatus = Statuses.length === 0 || Statuses.includes(order.orderStatus);
        const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
      });

      setFilteredOrders(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [Statuses, searchTerm]);

  const handleStatusChange = (status) => {
    setStatuses((prevSelected) =>
      prevSelected.includes(status)
        ? prevSelected.filter((item) => item !== status)
        : [...prevSelected, status]
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
              <input type="checkbox" checked={Statuses.includes(status)} onChange={() => handleStatusChange(status)} />
              <p>{status}</p>
            </div>
          ))}
        </div>
        <div className="my-orders">
          <div className="search-order">
            <input type="text" className="search-bar" placeholder="Search your orders here" value={searchTerm} onChange={handleSearchChange} />
            <button className="search"><FiSearch size={16} /> Search Orders</button>
          </div>
          {loading ? (
            <div className="no-products">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="order">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((item, index) => (
                  <Order_Card item={item} key={index} />
                ))
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
