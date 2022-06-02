import React from "react";
import "./style.css";

export default function InputSearch() {
  return (
    <form className="container_Input">
      <input
        className="input_input"
        type="text"
        placeholder="Digitar Pesquisa"
        required
      />
      <button type="submit" className="input_button">
        Pesquisar
      </button>
    </form>
  );
}
