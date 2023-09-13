import React from 'react'
import { Link } from 'react-router-dom'
import './LinkNavigate.css'


const LinkNavigate = ({to, text}) => {
  return (
    <Link className='link-navigate' to={to}>{text}</Link>
  )
}

export default LinkNavigate