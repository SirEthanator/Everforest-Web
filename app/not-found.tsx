import React from "react";
import "@/styles/NotFound.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
  <body>
    <Navbar />
    <div className="notFound">
      <h1 className="errCode">404</h1>
      <h1 className="notFoundTitle">Page not found</h1>
    </div>
    <Footer />
  </body>
  )
}

