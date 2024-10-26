import React from "react";
import "@/styles/NotFound.css";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
  <body className="notFoundBody">
    <Navbar />
    <div className="notFound">
      <h1 className="errCode">404</h1>
      <h1 className="notFoundTitle">Page not found</h1>
    </div>
  </body>
  )
}

