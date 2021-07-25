import React, {useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';
import "./ItemDetail.css"
export default function ItemDetail({ item }) {
  const { boton, setBoton, AddToCart } = useContext(CartContext); 

  const onAdd= (contador)=>{
      alert(`El numero de items que tiene en el carrito es:  ${contador}` )
      setBoton(true)
      AddToCart(item, contador)
    }
    return(
        <div>
                 {item.id}
                 {item.title}
                 {item.description}
                 <img  alt=""src={item.pictureUrl} />
                 {item.price}
                 { boton === false ? (
                  <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/>
                  ) : (
                  <Link to="/cart">
                    <button onClick={()=>{setBoton(false)}}>Termina tu compra</button>
                  </Link>
                  )}

                {console.log(item)}
         </div>
    )}
    
  