import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaRegUser } from 'react-icons/fa';
import { GiBeachBag } from 'react-icons/gi';
import { MdOutlineEventNote, MdCardGiftcard } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Auth_Modal from '../Auth/Auth_Model';
import { Menu } from '@mui/material';
import { getUser, logout } from '../../State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCart } from '../../State/Carts/Action'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openAuthModel, setAuthModel] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)
    const openUserMenu = Boolean(anchorEl);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseUserMenu = (e) => {
        setAnchorEl(null)
    }

    const handleOpen = () => {
        setAuthModel(true)
    }

    const handleClose = () => {
        setAuthModel(false);
    }




    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));

        }

    }, [jwt, auth.jwt])

    useEffect(() => {

        if (auth.user) {
            handleClose()
        }
        if (location.pathname === "/login" || location.pathname === '/signup') {
            navigate(-1)
        }

    }, [auth.user])


    const handleLogout = () => {
        dispatch(logout());
        handleCloseUserMenu();
        toast.success(' Logout Successfully');
    }

    const handleCart = () => {
        navigate('/cart')
    }

    useEffect(() => {
        dispatch(getCart());
    }, [])

    return (
        <>
            <div className='navbar'>
                <Link to='/' className='logo'>
                    <p>Foodie<span>.in</span></p>
                </Link>
                <div className="right">
                    <div className="profile">
                        {
                            auth.user?.name ? (
                                <div>
                                    <div className='open-btn' onClick={handleUserClick} aria-controls={openUserMenu ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={openUserMenu ? 'true' : undefined}>
                                        <img src={auth.user?.photo} alt={auth.user?.name} />
                                       <div>
                                       <p>Welcome</p>
                                        <div className="name">{auth.user?.name}</div>
                                       </div>
                                    </div>

                                    <Menu id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openUserMenu}
                                        onClose={handleCloseUserMenu}
                                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                                        className="custom-menu"
                                        PaperProps={{
                                            style: {
                                                marginTop: '15px',
                                                padding: "0px",
                                                width: '200px',
                                                borderRadius: "3px",
                                                boxShadow: "rgba(0, 0, 0, 0.051) 0px 5px 15px 0px",

                                            },
                                        }}
                                    >
                                        {/* onClick={handleCloseUserMenu} */}
                                        <Link to='/profile' className="menu-link" onClick={() => handleLinkClick('/profile')}>
                                            <p className="menu-item"><FaRegUser className="menu-icon" /> Profile</p>
                                        </Link>
                                        <Link to='/cart' className="menu-link" onClick={() => handleLinkClick('/cart')}>
                                            <p className="menu-item"><GiBeachBag className="menu-icon" /> Cart</p>
                                        </Link>
                                        <Link to="/account/orders" className="menu-link" onClick={() => handleLinkClick('/account/orders')}>
                                            <p className="menu-item"><MdOutlineEventNote className="menu-icon" /> Orders</p>
                                        </Link>
                                        <Link to='/' className="menu-link" onClick={() => handleLinkClick('/')}>
                                            <p className="menu-item"><MdCardGiftcard className="menu-icon" /> Gift Cards</p>
                                        </Link>
                                        <div className="hr-line"></div>
                                        <Link className="menu-link" onClick={handleLogout}>
                                            <p className="menu-item"><RiLogoutBoxRLine className="menu-icon" /> Logout</p>
                                        </Link>
                                    </Menu>
                                </div>
                            ) : (
                                <div className="auth-btn" onClick={handleOpen}><FaUser size={20} /> Login / Signup </div>
                            )
                        }
                    </div>
                    <div className="line"></div>
                    <div className="cart-btn">
                        <p><GiBeachBag onClick={handleCart} size={25} /></p>
                        <div className="item">{cart.cartItems?.length}</div>
                    </div>
                </div>
            </div>
            <Auth_Modal handleClose={handleClose} open={openAuthModel} />
        </>
    );
};

export default Navbar;
