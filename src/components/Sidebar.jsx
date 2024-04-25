import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ setCategoryName }) => {
  const [categorie, setCategorie] = useState();

  useEffect(() => {
    function fetchApi() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategorie(json));
    }

    fetchApi();
  });
  return (
    <div className="bg-primary-100 text-white h-screen p-8 flex flex-col justify-start items-start mt-4">
      <h1 className="text-2xl font-bold cursor-pointer ">
        <NavLink to={"/"}>All Products</NavLink>
      </h1>

      <ul className=" text-lg mt-16 font-semibold flex flex-col space-y-8">
        {categorie?.map((item) => (
          <li
            className="hover:bg-blue-300 rounded-lg p-4 cursor-pointer"
            key={item}
            onClick={() => {
              setCategoryName(item);
            }}
          >
            <h1>{item.toUpperCase()}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
