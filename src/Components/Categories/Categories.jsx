import React from 'react'
import './Category.css'
import { useNavigate } from 'react-router-dom';
const Categories = ({ category }) => {

    const navigate = useNavigate(); 

    const handleCategoryClick = (name) => {
        navigate(`/products/${name}`);
    };
    return (
        <div className='category'>
            {
                category.map((item, index) => {
                    return (
                        <div className="card" key={index} onClick={() => handleCategoryClick(item.name)}>
                            <img src={item.poster} alt="" />
                            <div className="name">{item.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories