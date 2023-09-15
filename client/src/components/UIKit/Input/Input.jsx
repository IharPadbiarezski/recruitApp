import React from 'react'
import './Input.css'

const Input = ({ style, input, helpText}) => {
  return (
    <div className='input-container'>
        <label className='label' htmlFor={input.id}> {input.label}</label>
        <input className={style} id={input.id} type={input.type} placeholder={input.placeholder} />
        <span class="helpText">{helpText}</span>
    </div>
  )
}

export default Input