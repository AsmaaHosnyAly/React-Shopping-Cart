import React from "react";
import "../../css/Products/Products.css";

function Products(props) {
  console.log(props);
  return (
    <div className="products">
      {props.products.map((product) => (
        <div className="products-items" key={product.id}>
          <img src={product.ImgUrl} alt="sss " />
          <div className="products-des">
            <span>{product.title}</span>
            <p>{product.price}</p>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
