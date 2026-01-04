import React from 'react';
import Logo from '/images/logo.png';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
        <div className="nav">
            <Link to="/" id="logo">
                <img src={Logo}></img>
                <p>FindMy<span>Home</span></p>
            </Link>
            <div className="nav-links">
                <a href="search-page">Buy</a>
                <a href="#">All Props</a>
                <a href="#">About</a>
            </div>
        </div>
    )
}

export default NavBar;