import React from 'react'
import './Link.css'

const Link = ({ text, link, underline }) => {
  return (
    <a className={underline} href={link}>{text}</a>
  )
}

export default Link