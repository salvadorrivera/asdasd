import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import "./CartWidget.css";

export default function CartWidget(){
    const {cart} = useContext(CartContext)
    var reducer = cart.reduce(
        (acc, curr) =>{
            return acc + curr.contador;
        },
        0        
    )
    return(
        <>
        {cart.length === 0 || <Link to="/cart"><img className="widget" alt="" src="https://pics.freeicons.io/uploads/icons/png/18687613011579605524-512.png"  ></img>
        {reducer}
        </Link>}
        </>
    )
}
