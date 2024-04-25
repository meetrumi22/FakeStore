import React from "react";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
