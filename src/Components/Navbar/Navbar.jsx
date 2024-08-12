import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUser, FaRegUser } from 'react-icons/fa'
import { GiBeachBag } from "react-icons/gi";
import { MdOutlineEventNote } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <p>Foodie<span>.in</span></p>
            </Link>
            <div className="right">
                <div className="profile">
                    {
                        true ? (
                            <div className="auth-btn"><FaUser size={20} /> Login / Signup </div>
                        ) : (
                            <div className="dropdown">
                                <button className='open-btn' onClick={toggleDropdown}>
                                    S
                                </button>

                                <div className={`menu ${isOpen ? 'open' : ''}`}>
                                    <Link to='/profile'><p><FaRegUser /></p> Profile</Link>
                                    <Link to='/cart'><p><GiBeachBag /></p> Carts</Link>
                                    <Link to="/orders"><p><MdOutlineEventNote /></p> Orders</Link>
                                    <Link to='/'> <p><MdCardGiftcard /></p> Gift Cards</Link>
                                    <div className="hr-line"></div>
                                    <Link><p><RiLogoutBoxRLine /></p> Logout</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="line"></div>
                <div className="cart-btn">
                    <p><GiBeachBag size={25} /></p>
                    <div className="item">0</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar