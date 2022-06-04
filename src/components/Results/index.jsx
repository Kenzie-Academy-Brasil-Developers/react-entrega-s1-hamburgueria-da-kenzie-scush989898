import React from "react";
import "./style.css";

export default function Results({ filtro }) {
  return (
    <div className="containerResults">
      <p>
        Resultados para: <span>{filtro}</span>
      </p>
    </div>
  );
}
