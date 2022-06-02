import React from "react";
import "./style.css";

export default function CartProduct() {
  return (
    <li className="cart_product">
      <div className="div_img">
        <img src="https://i.imgur.com/eEzZzcF.png" alt="img_carrinho_produto" />
      </div>
      <div className="info_cart_product">
        <h4>Hamburguer</h4>
        <h5>X-Burguer</h5>
        <h6>Quantidade: 01</h6>
      </div>
      <div className="remove_product">
        <button>Remover</button>
      </div>
    </li>
  );
}
