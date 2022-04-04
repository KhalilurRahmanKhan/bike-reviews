import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>Reviews</li>
                <li>Dashboard</li>
                <li>Blogs</li>
                <li>About</li>
            </ul>
        </div>
    );
};

export default Navbar;