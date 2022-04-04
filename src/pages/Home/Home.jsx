import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CustomerReviews></CustomerReviews>
            
        </div>
    );
};

export default Home;