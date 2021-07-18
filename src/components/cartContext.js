import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContenido({children}){
    const [boton, setBoton] = useState(false)
    const [cart, setCart] = useState([]);

    const  isInCart=(id)=> {
        return cart.find((element) => element.item.id === id)
        }

    const AddToCart = (item, contador) =>{
        isInCart(item.id) ? alert("Este producto ya esta en el carrito") :  setCart([...cart, {item, contador}])
    }
    const Clear = () =>{
        return (setCart([]))
    }
    const RemoveItem = (id) =>{
       return cart.find((elemento)=> {if(elemento.item.id === id){
            let pos = cart.indexOf(elemento.item.id)
            setCart(cart.splice(pos))
        }})
        
    }
    return (
        
        <CartContext.Provider value={{boton, setBoton, cart, setCart, AddToCart, Clear, RemoveItem}}>
            {children}
        </CartContext.Provider>
        )
}