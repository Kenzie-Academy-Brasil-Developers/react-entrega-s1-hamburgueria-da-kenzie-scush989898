import React from "react";
import "./style.css";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

export default function Cart() {
  return (
    <div className="containerCart">
      <CartProduct />
      <CartTotal />
    </div>
  );
}
