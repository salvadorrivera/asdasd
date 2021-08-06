import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContenido({ children }) {
  const [boton, setBoton] = useState(false);
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const AddToCart = (item, contador) => {
    isInCart(item.id)
      ? alert("Este producto ya esta en el carrito")
      : setCart([...cart, { item, contador }]);
  };
  const Reducer = cart.reduce((acc, curr) => {
    return acc + curr.item.price * curr.contador;
  }, 0);
  const Clear = () => {
    return setCart([]);
  };

  const RemoveItem = (id) => {
    const newCart = cart.filter((item) => item.item.id !== id);
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        boton,
        setBoton,
        cart,
        setCart,
        AddToCart,
        Clear,
        RemoveItem,
        Reducer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
