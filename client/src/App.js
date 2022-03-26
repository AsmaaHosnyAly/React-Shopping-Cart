import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Fliter";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  // console.log(products);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // return () => {
    //   effect;
    // };
  }, [cartItems]);

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

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExit = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExit = true;
      }
    });

    if (!isProductExit) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <div className="filter">
            <Filter
              handelFilterBySize={handelFilterBySize}
              handelFilterByOrder={handelFilterByOrder}
              productsNumber={products.length}
              size={size}
              sort={sort}
            />
          </div>
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
