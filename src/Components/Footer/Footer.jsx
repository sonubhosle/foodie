import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const footer = [
  {
    "id": 1,
    "heading": "Company",
    links: [
      {
        "name": "About Us"
      },
      {
        "name": "Contact Us"
      },
      {
        "name": "Offer"
      },
      {
        "name": "FAQs"
      },
    ]
  },
  {
    "id": 2,
    "heading": "Account",
    links: [
      {
        "name": "My Orders "
      },
      {
        "name": "Wishlist"
      },
      {
        "name": "Shopping Cart"
      },
      {
        "name": "Saved Address"
      },
    ]
  },
  {
    "id": 3,
    "heading": "Useful links",
    links: [
      {
        "name": "Blogs "
      },
      {
        "name": "Login"
      },
      {
        "name": "Register"
      },
      {
        "name": "Profile"
      },
      {
        "name": "Settings"
      },
    ]
  },
  {
    "id": 4,
    "heading": "Top Brands",
    links: [
      {
        "name": "PizzaBoy "
      },
      {
        "name": "SalaDish"
      },
      {
        "name": "IecPops"
      },
      {
        "name": "Maxican Hoy"
      },
      {
        "name": "La Foodies"
      },
    ]
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="left_sect">
          <Link to='/' className='logo-2'>
            <div>Foodie<span>.in</span></div>
          </Link>
          <p>Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of your own home.</p>
          <div className="footer_icons">
            <Link><CgFacebook /></Link>
            <Link><IoLogoTwitter /></Link>
            <Link><FaLinkedinIn /></Link>
            <Link><AiFillInstagram /></Link>
            <Link><FaYoutube /></Link>
          </div>
        </div>
        <div className="grid_section">
          {
            footer.map((item,index) => {
              return (
                <div className="grid_box" key={index}>
                  <div className="heading"> <div className="line"></div> <h2>{item.heading}</h2> </div>
                  {
                    item.links.map((name) => <Link>{name.name}</Link>)
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer