import React from "react";
import Link from "next/link";
import "@/styles/global/card.scss"

export default function Card({ icon, title, desc, link, linkText, minWidth='0', maxWidth='none', newTab=false }) {

  let linkTarget = '_self'
  let linkIcon = 'nf-fa-arrow_right'
  if (newTab) {
    linkTarget = '_blank'
    linkIcon = 'nf-fa-external_link'
  }

  if (desc.length === 0) {
    desc = <div></div>  // Don't render anything
  } else {
    desc = <p className="cardDesc">{desc}</p>
  }

  return (
    <Link href={link} target={linkTarget} className="cardWrapper" style={{minWidth:minWidth, maxWidth:maxWidth}}>
      <div className="card">
        <i className={`nf ${icon} cardIcon`}></i>
        <h2 className='cardTitle'>{title}</h2>
        {desc}
        <p className="cardLink">{linkText} <i className={`nf ${linkIcon}`}></i></p>
      </div>
    </Link>
  )
}

