import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../components";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-screen-xl mx-auto flex h-20 justify-between items-center ">
      <div>
        <img
          src="/images/O_Shopping-Logo.wine.png"
          alt="logo"
          height={200}
          width={200}
        />
      </div>
      <ul className="flex space-x-10 text-xl text-primary-100 font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/categories"}>Categories</Link>
        <Link to={"/addproduct"}>Add Product</Link>
        <Link to={"/about"}>About Us</Link>
      </ul>
      <div className="flex justify-center items-center relative space-x-4">
        <img
          src="/images/icons8-cart-color/grocery-store.png"
          className="h-7 w-7 object-cover"
          alt="cart"
        />
        <img
          src="/images/superman.jpg"
          alt="profile"
          className="h-16 w-16 rounded-full object-cover"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {isOpen && (
          <div className="absolute top-20 rounded-lg bg-primary-100 space-y-1 text-white font-semibold text-lg w-52">
            <div className="flex justify-start cursor-pointer space-x-1 items-center p-2 hover:bg-blue-400 w-full text-center rounded-lg">
              <img
                src="/images/superman.jpg"
                alt="profile"
                className="h-16 w-16 rounded-full object-cover"
              />
              <h2 className="">UserName</h2>
            </div>
            <div className="flex flex-col items-center">
              <Link
                className="p-2 hover:bg-blue-400 w-full text-center rounded-lg"
                to={"/sign-in"}
              >
                Signin
              </Link>
              <Link
                className="p-2 hover:bg-blue-400 w-full text-center rounded-lg"
                to={"/sign-up"}
              >
                Signup
              </Link>
            </div>
          </div>
        )}
        {/* <Profile
          // img={"/images/superman.jpg"}
          options={["Profile", "Signup", "Signin"]}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
