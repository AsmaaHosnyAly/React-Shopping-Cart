import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Fliter";

function App() {
  const [products, setProducts] = useState(data);
  // console.log(products);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handelFilterBySize = (e) => {
    setSize(e.target.value);

    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.size.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
      console.log(newProducts);
    }
  };
  const handelFilterByOrder = (e) => {
    setSort(e.target.value);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (e.target.value === "highest") {
        return b.price - a.price;
      } else if (e.target.value === "lowest") {
        return a.price - b.price;
      } else if (e.target.value === "latest") {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter">
            <Filter
              handelFilterBySize={handelFilterBySize}
              handelFilterByOrder={handelFilterByOrder}
              size={size}
              sort={sort}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
