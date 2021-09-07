import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import "./CartWidget.css";
import { FaCartPlus } from "react-icons/fa";

export default function CartWidget() {
  const { cart, ReducerSum } = useContext(CartContext);
  return (
    <>
      {cart.length === 0 || (
        <Link to="/cart">
          <FaCartPlus />
          {ReducerSum}
        </Link>
      )}
    </>
  );
}
