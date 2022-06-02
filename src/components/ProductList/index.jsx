import React from "react";
import "./style.css";
import Product from "./Product";

export default function ProductList() {
  return (
    <ul className="containerProductList">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ul>
  );
}
