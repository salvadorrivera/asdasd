import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import "./CartWidget.css";
import {FaCartPlus} from 'react-icons/fa'

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
        {cart.length === 0 || <Link to="/cart"><FaCartPlus />
        {reducer}
        </Link>}
        </>
    )
}
