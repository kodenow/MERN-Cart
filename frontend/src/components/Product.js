import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <div className="card">
        <img className="small" src={product.image} alt={product.name} />
        <div>{product.name}</div>
        <text>${product.price}</text>
      </div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
