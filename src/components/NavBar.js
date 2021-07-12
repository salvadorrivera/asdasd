import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.js'
import './NavBar.css';

function NavBar(){
 
    return(
        <header className="head">
            <CartWidget />
            <nav>    
            <ul className="items">
                    <li><Link to="/">Home </Link></li>

            <ul  className="dropdown">
                <li>Categories ↓ </li>
                <ul className="DropDownMenu">
                    <li><Link to={`/category/electrodomestico`}>electrodomesticos</Link></li>
                    <li><Link to={`/category/ropa`}>ropa</Link></li>
                </ul>
            </ul>
                    
                </ul>
            </nav>
            
        </header>
    );
}

export default NavBar;