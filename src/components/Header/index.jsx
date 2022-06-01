import React from "react";
import "./style.css";
import InputSearch from "./InputSearch";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="containerHeader">
      <InputSearch />
      <Logo />
    </div>
  );
}
