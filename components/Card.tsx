import React from "react";
import Link from "next/link";
import "@/styles/global/card.scss"

export default function Card({ icon, title, desc, link, linkText, newTab=false }) {

  let linkTarget = '_self'
  let linkIcon = 'nf-fa-arrow_right'
  if (newTab) {
    linkTarget = '_blank'
    linkIcon = 'nf-fa-external_link'
  }

  return (
    <Link href={link} target={linkTarget} className="cardWrapper">
      <div className="card">
        <i className={`nf ${icon} cardIcon`}></i>
        <h2 className='cardTitle'>{title}</h2>
        <p className="cardDesc">{desc}</p>
        <p className="cardLink">{linkText} <i className={`nf ${linkIcon}`}></i></p>
      </div>
    </Link>
  )
}

