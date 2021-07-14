import React, {useContext, useEffect} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
export default function ItemDetail({ item }) {
  const { boton, setBoton} = useContext(CartContext); 

  const onAdd= (contador)=>{
      alert(`El numero de items que tiene en el carrito es:  ${contador}` )
      setBoton(true)
    }
    const resetCounter = ()=>{
      setBoton(false)
    }


    return(
        <div>
                 {item.id}
                 {item.title}
                 {item.description}
                 <img alt=""src={item.pictureUrl} />
                 {item.price}
                 <Link to={`/category/ropa`}  onClick={()=>{setBoton(false)}}>ropa</Link>
                 <Link to={`/category/electrodomestico`} onClick={()=>{setBoton(false)}}>electrodomesticos</Link>
                 { boton === false ? (
                  <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/>
                  ) : (
                  <Link to="/cart"><button onClick={resetCounter}>Termina tu compra</button></Link>
                  )}
                
         </div>
    )}
    
  