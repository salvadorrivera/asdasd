import React from 'react';
import CartWidget from './CartWidget.js'
import './NavBar.css';

function NavBar(){
    return(
        <header className="head">
            <CartWidget />
            <nav>    
              <ul className="items">
                    <li><a href="/#">Hola</a></li>
                    <li><a href="/#">Buenas</a></li>
                    <li><a href="/#">Noches</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default NavBar;