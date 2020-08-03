import React from "react";
import Product from "../components/Product";

export default function ItemsShowcase(props) {
  return (
    <div className="container">
      {props.items.map((item) => (
        <Product
          productImagePath={item.productImagePath}
          productTitle={item.productTitle}
          productContent={item.productContent}
        />
      ))}
    </div>
  );
}
