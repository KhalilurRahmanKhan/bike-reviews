import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="text-content">
                <h1>See what people say...</h1>
                <p>This is the place where you can see the honest reviews about our bike.Different people shares their opinion about our bike.</p>
            </div>
            <div className="img-content">
                <img src="https://i.ibb.co/g9BytMF/9.webp" alt="" />
            </div>
        </div>
    );
};

export default Header;