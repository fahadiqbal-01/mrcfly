import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      {/* It's good practice to wrap your page content in a <main> tag for accessibility */}
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
