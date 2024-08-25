import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Products.css';
import Select_Dropdown from './Select_Dropdown';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Products/Action';
const Products = () => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState('Default');
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(findProducts())
  }, [])

  const categories = ['All', ...new Set(products?.content?.map(item => item.category))];

  // Filter products based on category and search term
  const filteredProducts = products?.content?.filter(item => category === 'All' || item.category.toLowerCase() === category.toLowerCase())
    .filter(item => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Sort products based on the selected option
  const sortedProducts = filteredProducts?.sort((a, b) => {
    if (sortOption === 'Low-To-High') {
      return a.price - b.price;
    } else if (sortOption === 'High-To-Low') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className="filtering">
        <h2>All Products</h2>
        <div className="filter-options">
          <div className="search">
            <FiSearch className='search-icon' />
            <input type="text" className='search-bar' placeholder="Search By Product Title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className='select'>
            <Select_Dropdown options={categories} value={category} onChange={(value) => setCategory(value)} />
            <Select_Dropdown options={['Default', 'Low-To-High', 'High-To-Low']} onChange={(value) => setSortOption(value)} />

          </div>
        </div>
      </div>
      <div className='product-grid'>
        {sortedProducts?.length > 0 ? (
          sortedProducts?.map((item) => <Card item={item} key={item._id} />)
        ) : (
          <div className='no-products'>
            <p>No Products Found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
