import React from "react";
import "./style.css";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import CartEmpty from "./CartEmpty";

export default function Cart() {
  return (
    <div className="containerCart">
      <div className="titulo_carrinho">Carrinho de compras</div>
      <div className="main_cart">
        <ul className="lista_produtos_carrinho">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </ul>
        <hr className="cart_hr" />

        <CartTotal />
        {/* <CartEmpty /> */}
      </div>
    </div>
  );
}
