import React from 'react'
import { Link } from 'react-router-dom'
import './SidebarItem.css'


const SidebarItem = ( { item }) => {
const { to, d, id } = item

  return (
    <Link className='sidebar-item-container' key={id} to={to}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="#363F43" fillOpacity="0.6">
                <path d={d} />
            </svg>
    </Link>
  )
}

export default SidebarItem