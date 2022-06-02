import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Results from "./components/Results";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((erro) => console.error(erro));
  }, []);
  products.forEach((elem) => (elem.quantity = 1));
  return (
    <div className="App">
      <Header />
      <div className="container_main">
        <div className="sectionProducts">
          <Results />
          <ProductList />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
