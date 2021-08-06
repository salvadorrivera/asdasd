import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import "./NavBar.css";
import { CartContext } from "./cartContext";

import { FiAnchor } from "react-icons/fi";

function NavBar() {
  const { setBoton } = useContext(CartContext);
  return (
    <header className="head">
      <Link to="/">
        <FiAnchor className="image" />
      </Link>
      <nav>
        <ul className="items">
          <li>
            <Link to="/">Home </Link>
          </li>

          <CartWidget onClick={setBoton(false)} />
          <ul className="dropdown">
            <li>Categories ↓ </li>
            <ul className="DropDownMenu">
              <li>
                <Link
                  to={`/category/electrodomestico`}
                  onClick={() => {
                    setBoton(false);
                  }}
                >
                  electrodomesticos
                </Link>
              </li>
              <li>
                <Link
                  to={`/category/ropa`}
                  onClick={() => {
                    setBoton(false);
                  }}
                >
                  ropa
                </Link>
              </li>
            </ul>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
