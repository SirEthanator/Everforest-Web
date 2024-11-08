import React from "react";
import "@/styles/global/titlecard.scss";

export default function Title({ title }) {
  return (
  <div className="titleCard">
    <div className="titleCardBg">
      <h1 className="titleCardText">{title}</h1>
    </div>
  </div>
  )
}

