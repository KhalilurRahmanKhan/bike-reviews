import React from 'react';
import useReview from '../../hooks/useReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div className='reviews'>
        <h1>Customer Reviews</h1>
        <div className="cards">
            {
                reviews.map(review => 
                    <div className="card">
                    <h1>{review.name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid.</p>
                    <small>4.5</small>
                </div>
                )
            }
         
           
        </div>

        
    </div>
    );
};

export default Reviews;