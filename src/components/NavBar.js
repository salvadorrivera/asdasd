import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav className="navBar">
            <h1>Hola Tutor!</h1>
            <ul className="items">
                <li>Hola</li>
                <li>Buenas</li>
                <li>Noches</li>
            </ul>
        </nav>
    );
}

export default NavBar;