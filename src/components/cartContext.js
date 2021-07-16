import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContenido({children}){
    const [boton, setBoton] = useState(false)
    const [cart, setCart] = useState([]);

    const  isInCart=(id)=> {
        cart.find(element => element.id === id)
        }

    const AddToCart = (item, contador) =>{
        isInCart(item.id) ? alert(`El producto ya esta en el carrito`) :  setCart([...cart, {item, contador}])
    }
    
    
    return (
        
        <CartContext.Provider value={{boton, setBoton, cart, setCart, AddToCart}}>
            {children}
        </CartContext.Provider>
        )
}