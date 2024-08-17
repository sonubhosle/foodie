import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../../Components/Data/products';
import Heading from '../../Components/Heading/Heading';
import './Product_Details.css'
import { FiChevronRight } from "react-icons/fi";
import Card from '../../Components/Products/Card';
import '../../Components/Products/Products.css'
import { offer } from '../../Components/Data/offers';
import '../../Components/Offers/Offers.css';
import Stars from 'react-rating-stars-component'

const Product_Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((item) => item.id === parseInt(id));
    const [mainImage, setMainImage] = useState(product ? product.poster : '');

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);

    };

    const handleCart = () => {
        navigate('/cart')
    }


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    const best_offers = offer.slice(0, 2)

    return (
        <>
            <Heading heading={'Product Details'} />
            <div className='producd-details'>
                <div className="product">
                    {product ? (
                        <>
                            <div className="image-section">
                                <div className="main-image">
                                    <img src={mainImage} alt={product.title} />
                                </div>

                                {/* Related Images */}
                                <div className='gallary' >
                                    {product.images.map((image, index) => (
                                        <img key={index} src={image.image} alt={`Related ${index}`} onClick={() => handleImageClick(image.image)} className='related-images' />))}
                                </div>
                            </div>
                            <div className="details">
                                <div className="breadcrumb">
                                    <Link>Home</Link>
                                    <p><FiChevronRight /></p>
                                    <Link>Products</Link>
                                    <p><FiChevronRight /></p>
                                    <Link>Product</Link>
                                    <p><FiChevronRight /></p>
                                    <Link>{product.title}</Link>
                                </div>
                                <div className="info">
                                    <p className='brand'>{product.brand}</p>
                                    <p className='title'>{product.title}</p>
                                    <div className="heading-2">Price</div>
                                    <div className="price-box">
                                        <p className='discount-price'>₹{product.price}</p>
                                        <p className=' price'>₹{product.discountPrice}</p>
                                        <p className='discount'>{product.discountedPersent}% Off</p>
                                    </div>
                                    <div className="heading-2">Rating & Reviews</div>
                                    <div className="rating-reviews">

                                        <div className="reviews">Reviews : 1,200 </div>
                                        <div className="rating">
                                            Rating :  <Stars classNames={'stars'} count={5} size={26} onChange={ratingChanged} isHalf={true} />
                                        </div>
                                    </div>
                                    <div className="heading-2">Available</div>
                                    <div className='stock'>{product.quantity > 0 ? <div className="in-stock">In Stock</div> : <div className='out-of-stock'>Comming Soon</div>}</div>
                                    <div className="heading-2">Description</div>
                                    <p className='desc'> <span> {product.description}</span></p>
                                    <div className="checkout-btn" onClick={handleCart}>Add To Cart</div>
                                </div>

                            </div>
                        </>
                    ) : (
                        <div className='no-products'>
                            <p>Product Not Found</p>
                        </div>
                    )}
                </div>
                {/* Offfers Section */}
                <div className="offer-section">
                    <div className="offer-grid min-width">
                        {
                            best_offers.map((item, index) => (
                                <div className="offer-item" key={index}>
                                    <img src={item.image} alt={item.off} />
                                    <div className="offer-discout">
                                        <p>{item.off}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>


            {/* Reviews */}
            <Heading heading={'Give Review'} />
            <div className="review-section">
                <div className="user-details">
                    <div className="user-image">
                        <img src={product.poster} alt="" />
                    </div>
                    <div className="user-detils">
                        <div className="user-name">Sonu Bhosle</div>
                        <div className="date">Date : 24 Aug 2024</div>
                    </div>
                </div>

                <form className="review-form">
                    <input type="text" name="" id="" placeholder='Enter Your Review' />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            {/* Related Products */}
            <Heading heading={'Related Products'} />
            <div className="product-grid">
                {
                    products.map((item, index) => <Card item={item} key={index} />)
                }
            </div>
        </>
    );
}

export default Product_Details;
