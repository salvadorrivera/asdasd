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
                    <li><Link to="/">Hola </Link></li>

                    <li><Link  to="/category/:id"> Buenas </Link></li>

                    <li><Link  to="/item/:id"> Noches </Link></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default NavBar;