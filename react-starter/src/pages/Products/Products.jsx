import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  return (
    <div className="container mt-0 mt-md-5">
      <div>
        <button type="button" class="btn btn-primary">
          <Link className="btn" to={"/addproduct"}>
            Ekle
          </Link>
        </button>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
