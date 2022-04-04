import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerReviews.css';
import useReview from '../../hooks/useReview';


const CustomerReviews = () => {
    const [reviews] = useReview();

    return (
        <div className='customer-reviews'>
            <h1>Customer Reviews</h1>
            <div className="cards">
                {
                    reviews.slice(0,3).map(review =>
                        <div className="card">
                        <h1>{review.name}</h1>
                        <p>{review.review}</p>
                        <small>{review.rating}</small>
                    </div>
                        )
                }
               
                
            </div>

            <Link to="/reviews" className='link'>See all reviews</Link>
            
        </div>
    );
};

export default CustomerReviews;