import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/reviews'> <li>Reviews</li></Link>
                <Link to='/dashboard'> <li>Dashboard</li></Link>
                <Link to='/blogs'> <li>Blogs</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;