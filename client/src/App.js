import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState(data);

  console.log(products);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter">Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
