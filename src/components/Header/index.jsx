import React from "react";
import "./style.css";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="containerHeader">
      <div className="mainHeader">
        <Logo />
        <InputSearch />
      </div>
    </div>
  );
}
