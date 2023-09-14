import React from 'react'
import './Input.css'
// TODO set when invalid

const Input = ({ input }) => {
  return (
    <div className='input-container'>
        <label className='label' htmlFor={input.id}>{input.label}</label>
        <input className={`input ${input.className}`} id={input.id} type={input.type} placeholder={input.placeholder} />
    </div>
  )
}

export default Input