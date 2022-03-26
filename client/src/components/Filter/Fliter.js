import React from "react";
import "../../css/Filter/Filter.css";

export default function Fliter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> filter</h2>
      <div className="num-of-product">
        num of product {props.productsNumber}
      </div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select
          value={props.size}
          className="filter-select"
          onChange={props.handelFilterBySize}
        >
          <option value="ALL">ALL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXXL">XXXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select
          value={props.sort}
          className="filter-select"
          onChange={props.handelFilterByOrder}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}
