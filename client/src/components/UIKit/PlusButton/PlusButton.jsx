import React from 'react'
import "./PlusButton.css"

const PlusButton = () => {
  return (
    <svg className="plus-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="11" y="4.00012" width="2" height="16" fill="#363F43" fillOpacity="0.6"/>
        <rect x="4" y="13.0001" width="2" height="16" transform="rotate(-90 4 13.0001)" fill="#363F43" fillOpacity="0.6"/>
    </svg>
  )
}

export default PlusButton