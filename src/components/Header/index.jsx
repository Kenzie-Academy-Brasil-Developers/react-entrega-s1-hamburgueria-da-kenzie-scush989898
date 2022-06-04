import React from "react";
import "./style.css";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

export default function Header({ filtro, setFiltro }) {
  return (
    <div className="containerHeader">
      <div className="mainHeader">
        <Logo />
        <InputSearch filtro={filtro} setFiltro={setFiltro} />
      </div>
    </div>
  );
}
