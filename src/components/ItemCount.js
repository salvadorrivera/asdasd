import React, { useState, useContext } from "react";
import { CartContext } from "./cartContext";

export default function ItemCount({ initial, stock, onAdd }) {
  const { cart, setCart } = useContext(CartContext);
  const [contador, setContador] = useState(initial);

  const agregar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };
  const clear = () => {
    setContador(initial);
  };

  return (
    <span
      style={{
        height: "500px",
        width: "500px",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      <h1>stock total: {stock}</h1>
      <h1>stock disponible: {stock - contador} </h1>
      <button onClick={agregar}>agregar</button>
      <br />
      <span>{contador}</span>
      <br />
      <button onClick={restar}>restar</button>
      <br />
      <button onClick={clear}>reset</button>
      <br />
      <button onClick={() => onAdd(contador) && setCart(cart)}>
        Agregar contenido
      </button>
    </span>
  );
}
