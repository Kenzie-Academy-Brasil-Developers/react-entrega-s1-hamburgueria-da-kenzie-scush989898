import React from "react";
import "./style.css";

export default function Product() {
  return (
    <li className="containerProduct">
      <div className="productimg">
        <img src="https://i.imgur.com/eEzZzcF.png" alt="imgProduto" />
      </div>
      <div className="productMain">
        <h3> Hamburguer</h3>
        <h5>Sanduiches</h5>
        <h6>R$ 14.00</h6>
        <button>Adicionar</button>
      </div>
    </li>
  );
}
