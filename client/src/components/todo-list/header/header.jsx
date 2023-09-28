import React, {useState}  from 'react'
import './header.css'

const Header= ({ icon, title }) => {
  const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };


  return (
    <div className="header">
    <i className={isActive ? icon : "angle-collapsed"} onClick={handleToggle}/>
    <h6>{title}</h6>
    </div>
  )
}

export default Header