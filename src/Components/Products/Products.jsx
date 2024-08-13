import React, { useState } from 'react';
import Card from './Card';
import './Products.css';
import Select_Dropdown from './Select_Dropdown';
import {FiSearch} from 'react-icons/fi'

const Products = ({ products }) => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  // Extract unique categories from products
  const categories = ['All', ...new Set(products.map(item => item.category))];

  // Filter products based on category and search term
  const filteredProducts = products
    .filter(item => category === 'All' || item.category.toLowerCase() === category.toLowerCase())
    .filter(item => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()));


  // Sort products based on the selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
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
          <FiSearch  className='search-icon'/>
          <input type="text" className='search-bar' placeholder="Search By Product Title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Select_Dropdown options={categories} value={category} onChange={(value) => setCategory(value)} />
          <Select_Dropdown options={['Default', 'Low-To-High', 'High-To-Low']} value={sortOption} onChange={(value) => setSortOption(value)} />
        </div>
      </div>
      <div className='product-grid'>
        {
          sortedProducts.length > 0 ? (
            sortedProducts.map((item, index) => <Card item={item} key={index} />)
          ) : (
            <div className='no-products'>
              <p>No Products Found</p>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Products;
