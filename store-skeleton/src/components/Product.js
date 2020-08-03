import React from "react";

export default function Product(props) {
  return (
    <div className="container">
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={props.productImagePath} />

        <div className="card-body">
          <h5 className="card-title">{props.productTitle}</h5>
          <p className="card-text">{props.productContent}</p>
        </div>

        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}
