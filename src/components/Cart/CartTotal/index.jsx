import React from "react";
import "./style.css";

export default function CartTotal() {
  return (
    <div className="total">
      <div className="preco">
        <span className="preco_total_titulo">Total</span>
        <span className="preco_total_valor">R$ 40,00</span>
      </div>
      <button>Remover Todos</button>
    </div>
  );
}
