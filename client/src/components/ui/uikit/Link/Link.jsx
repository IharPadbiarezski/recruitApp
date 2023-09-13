import React from 'react'
import './Link.css'

const Link = ({ value, className }) => {
  return (
    <a className={className} href="">{value}</a>
  )
}

export default Link