import React from 'react'
import './Input.css'

const Input = ({ input }) => {
  return (
    <div className='input-container'>
        <label className='label' htmlFor={input.id}>{input.label}</label>
        <input id={input.id} type={input.type} placeholder={input.placeholder} />
    </div>
  )
}

export default Input