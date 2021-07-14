import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContenido({children}){
    const [boton, setBoton] = useState(false)
    const [cart, setCart] = useState([]);
    const onAdd= (contador)=>{
        alert(`El numero de items que tiene en el carrito es:  ${contador}` )
        setBoton(true)
      }
    const resetCounter = ()=>{
        setBoton(false)
    }
    return (
        
        <CartContext.Provider value={{boton, setBoton, cart, setCart, onAdd, resetCounter}}>
            {children}
        </CartContext.Provider>
        )
}