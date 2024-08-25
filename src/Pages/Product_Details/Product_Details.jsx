import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { images } from '../../Components/Data/products';
import Heading from '../../Components/Heading/Heading';
import './Product_Details.css'
import { FiChevronRight } from "react-icons/fi";
import Card from '../../Components/Products/Card';
import '../../Components/Products/Products.css'
import '../../Components/Offers/Offers.css';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../State/Products/Action';
import axios from 'axios'
import { addItemToCart } from '../../State/Carts/Action';
import { toast } from 'react-toastify'
import { FaStar } from 'react-icons/fa';
import Reviews from '../../Components/Rating_Reviews/Reviews';

const Product_Details = () => {

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const products = useSelector(state => state.products);





    const handleAddTocart = () => {
        const data = { productId: params.productId };
        dispatch(addItemToCart(data))
            .then(() => {
                toast.success('Cart added successfully!');
                navigate('/cart');
            })
            .catch(() => {
                toast.error('Failed to add to cart!');
            });
    };

    useEffect(() => {
        const data = { productId: params.productId };
        dispatch(findProductsById(data));
    }, [params.productId, dispatch]);












    useEffect(() => {
        const fetchRelated = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/products/${params.productId}/related`);
                setRelatedProducts(response.data); // Directly use response.data
            } catch (error) {
                alert('Failed to fetch related products.');
            }
        };

        fetchRelated();
    }, [params.productId]);


    return (
        <>
            <Heading heading={'Product Details'} />
            <div className='producd-details'>
                <div className="product">
                    {products.product ? (
                        <>
                            <div className="image-section">
                                <div className="main-image">
                                    <img src={products?.product.image} alt={products?.product.title} />
                                </div>

                                {/* Related Images */}
                                <div className='gallary' >
                                    {
                                        images.map((item, index) => (<img key={index} src={item.image} className='related-images' />))
                                    }
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
                                    <Link>{products?.product.title}</Link>
                                </div>
                                <div className="info">
                                    <p className='brand'>{products?.product.brand}</p>
                                    <p className='title'>{products?.product.title}</p>
                                    <div className="heading-2">Price</div>
                                    <div className="price-box">
                                        <p className='discount-price'>₹{products?.product.price}</p>
                                        <p className=' price'>₹{products?.product.discountedPrice}</p>
                                        <p className='discount'>{products?.product.discountPersent}% Off</p>
                                    </div>
                                    <div className="heading-2">Rating & Reviews</div>
                                    <div className="rating-reviews">

                                        <div className="reviews">Reviews : {products?.product.numReviews}  </div>
                                        <div className="rating">
                                            {products?.product.numRatings} <FaStar size={14} />
                                        </div>
                                    </div>
                                    <div className="heading-2">Available</div>
                                    <div className='stock'>{products?.product.quantity > 0 ? <div className="in-stock">In Stock</div> : <div className='out-of-stock'>Comming Soon</div>}</div>
                                    <div className="heading-2">Description</div>
                                    <p className='desc'> <span> {products?.product.description}</span></p>
                                    <div className="checkout-btn" onClick={handleAddTocart}>Add To Cart</div>
                                </div>

                            </div>
                        </>
                    ) : (
                        <div className='no-products'>
                            <p>Product Not Found</p>
                        </div>
                    )}
                </div>

            </div>


            {/* Reviews */}
            <Heading heading={'Reviews'} />
            <Reviews  productId={params.productId} />
            {/* Related Products */}
            <Heading heading={'Related Products'} />
            <div className="product-grid">
                {
                    relatedProducts?.map((item, index) => <Card item={item} key={index} />)
                }
            </div>
        </>
    );
}

export default Product_Details;
