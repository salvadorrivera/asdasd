import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';

export default function Cart(){
    const {cart, setCart,RemoveItem, Clear} = useContext(CartContext)
    
    var reducer = cart.reduce(
        (acc, curr) =>{
            return acc + curr.item.price * curr.contador;
        },
        0        
    )
       
    return(
        <>
        {cart.length === 0 ? <Link to={`/`}> Volver </Link>  : 
        cart.map((element) =>
         <div>{element.item.title} - {element.item.price * element.contador} ({element.item.price} c/u)({element.contador} unidades)
         <button onClick={()=>RemoveItem(element.item.id)}>remover item</button>  </div>
         )}
        {console.log(cart)}
        {cart.length === 0 ? "" : <h1>PRECIO TOTAL: {reducer}</h1>}
        {cart.length === 0 ? "" : <button onClick={Clear}>Borrar Carrito</button>}
        </>
    )
}