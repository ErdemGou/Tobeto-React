import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return product == null ? (
    <div>loading</div>
  ) : (
    <div
      className="container mt-0 mt-md-5 d-flex flex-wrap gap-20"
      style={{ flexWrap: "wrap", gap: "20px" }}
    >
      <div>
        <img
          class="img-fluid"
          style={{ borderRadius: "40px", maxWidth: "600px" }}
          src={product.thumbnail}
          alt="product"
        ></img>
        <ul class="mt-4" style={{ listStyleType: "none", display: "flex" }}>
          {product.images.map((item) => {
            return (
              <li>
                <img
                  src={item}
                  style={{ borderRadius: "10px", maxWidth: "90px" }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div class="product-detail">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h4 class="price">
          Current Price <span>{product.price}$ </span>
        </h4>
        <div class="actions">
          <button type="button" class="btn btn-dark">
            Satin Al!
          </button>
          <button type="button" class="btn btn-secondary">
            Sepete Ekle
          </button>
        </div>
        <div>
          <a style={{ cursor: "pointer" }}>Add to Wishlist! &#10084;&#65039;</a>
        </div>
      </div>
    </div>
  );
};
