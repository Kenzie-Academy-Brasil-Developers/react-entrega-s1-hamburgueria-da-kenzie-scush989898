import React from "react";
import "./style.css";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import CartEmpty from "./CartEmpty";

export default function Cart({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  setCartTotal(
    currentSale.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0)
  );

  return (
    <div className="containerCart">
      <div className="titulo_carrinho">Carrinho de compras</div>
      <div className="main_cart">
        <ul className="lista_produtos_carrinho">
          {currentSale.map((product) => {
            return (
              <CartProduct
                product={product}
                key={product.id}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            );
          })}
        </ul>
        <hr className="cart_hr" />

        <CartTotal setCurrentSale={setCurrentSale} cartTotal={cartTotal} />
        {/* SAJIJISAJISAJIKSAIJKSAIJKSAISIA */}
        {/* SAJIJISAJISAJIKSAIJKSAIJKSAISIA */}
        {/* <CartEmpty /> */}
      </div>
    </div>
  );
}
