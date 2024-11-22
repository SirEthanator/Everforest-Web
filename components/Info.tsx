import React from "react";
import '@/styles/global/info.scss'

export default function Info({info, type='info'}) {
  let title, icon
  if (type === 'warning') {
    title = 'Warning'
    icon = 'nf-fa-warning'
  } else if (type === 'caution') {
    title = 'Caution'
    icon = 'nf-fa-circle_exclamation'
  } else {
    type = 'info'
    title = 'Info'
    icon = 'nf-fa-info_circle'
  }
  return (
    <div className={`info ${type}`}>
      <h5 className="infoTitle"><i className={`nf ${icon}`}></i> {title}</h5>
      <p className="infoText">{info}</p>
    </div>
  )
}

