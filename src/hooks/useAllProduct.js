import React, { useEffect, useState } from "react";

function useAllProduct(category) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProduct(json));
    } catch (error) {
      console.log("error = ", error);
    }
  }, [product]);

  return product;
}

export default useAllProduct;
