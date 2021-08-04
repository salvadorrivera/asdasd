import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.js'
import './NavBar.css';
import {CartContext} from './cartContext'



function NavBar(){
    const {setBoton} = useContext(CartContext)
    return(
        <header className="head">
            <Link to="/"><img className="image"alt=""src="https://pics.freeicons.io/uploads/icons/png/15675701751543238854-512.png" /></Link>
            <nav>    
            <ul className="items">
                    <li><Link to="/">Home </Link></li>
           
            <CartWidget onClick={setBoton(false)}
             />
            <ul  className="dropdown">
                <li>Categories ↓ </li>
                <ul className="DropDownMenu">
                    <li><Link to={`/category/electrodomestico`} onClick={()=>{setBoton(false)}}>electrodomesticos</Link></li>
                    <li><Link to={`/category/ropa`}  onClick={()=>{setBoton(false)}}>ropa</Link></li>
                    
                </ul>
            </ul>
            </ul>
            
            </nav>
            
        </header>
    );
}

export default NavBar;