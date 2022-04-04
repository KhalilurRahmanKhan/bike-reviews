import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
    return (
        <div className='customer-reviews'>
            <h1>Customer Reviews</h1>
            <div className="cards">
                <div className="card">
                    <h3>name</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid.</p>
                    <small>4.5</small>
                </div>
                <div className="card">
                    <h3>name</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid.</p>
                    <small>4.5</small>
                </div>
                <div className="card">
                    <h3>name</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid.</p>
                    <small>4.5</small>
                </div>
            </div>

            <button>See all reviews</button>
            
        </div>
    );
};

export default CustomerReviews;