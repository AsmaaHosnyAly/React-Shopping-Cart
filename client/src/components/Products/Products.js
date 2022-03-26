import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";

function Products(props) {
  // console.log(props);
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };

  return (
    <Bounce left cascade>
      <div className="products">
        {props.products.map((product) => (
          <div className="products-items" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.ImgUrl} alt={product.title} />
            </a>
            <div className="products-des">
              <span>{product.title}</span>
              <p>${product.price}</p>
            </div>
            <button onClick={() => props.addToCart(product)}>
              Add to cart
            </button>
          </div>
        ))}

        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}

export default Products;
