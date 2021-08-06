import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import Formulario from "./formulario";

export default function Cart() {
  const { cart, RemoveItem, Clear, Reducer } = useContext(CartContext);
  const [popup, setPopup] = useState(false);

  return (
    <div
      style={{ display: "inline-block", verticalAlign: "middle", margin: 10 }}
    >
      {cart.length === 0 || <h1>PRECIO TOTAL: {Reducer}</h1>}
      {cart.length === 0 ? (
        <Link to={`/`}> Volver </Link>
      ) : (
        cart.map((element) => (
          <div>
            {element.item.title} - {element.item.price * element.contador} (
            {element.item.price} c/u)({element.contador} unidades)
            <button onClick={() => RemoveItem(element.item.id)}>
              remover item
            </button>{" "}
          </div>
        ))
      )}

      {cart.length === 0 || <button onClick={Clear}>Borrar Carrito</button>}
      {cart.length === 0 || (
        <>
          <button style={{ marginBottom: 6 }} onClick={() => setPopup(true)}>
            Terminar compra
          </button>
          <Formulario trigger={popup} setTrigger={setPopup}></Formulario>
        </>
      )}
    </div>
  );
}

