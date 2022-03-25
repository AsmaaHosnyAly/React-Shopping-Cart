import React from "react";
import "../../css/Filter/Filter.css";

export default function Fliter() {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> filter</h2>
      <div className="num-of-product">num of product 7</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select">
          <option value="ALL">ALL</option>
          <option value="S">S</option>
          <option value="S">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">L</option>
          <option value="XXXL">XL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
          <option value="lastest">Lastest</option>
          <option value="lower">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}
