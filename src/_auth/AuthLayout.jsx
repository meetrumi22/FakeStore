import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../_root/shared/Navbar";

const AuthLayout = () => {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <Navbar />
          <main className="flex justify-center items-center min-h-screen">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default AuthLayout;
