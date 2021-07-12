import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export default function ItemDetail({ item }) {
  const [boton, setBoton] = useState(false)
  const onAdd= (contador)=>{
    alert(`El numero de items que tiene en el carrito es:  ${contador}` )
    setBoton(true)
  }

  const Reset = ()=>{
    setBoton(false)
  }

    
    return(
        <div>
                 {item.id}
                 {item.title}
                 {item.description}
                 <img alt=""src={item.pictureUrl} />
                 {item.price}
                 { boton === false ? (
                  <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/>
                  ) : (
                  <Link to="/cart"><button onClick={Reset}>Termina tu compra</button></Link>
                  )}
                
         </div>
    )}
    
  