import React from 'react'
import './Textarea.css'

const Textarea = ({ style, textarea, helpText}) => {
  return (
    <div className='textarea-container'>
        <label className='label' htmlFor={textarea.id}> {textarea.label}</label>
        <textarea className={style} id={textarea.id} type={textarea.type} placeholder={textarea.placeholder}/>
        <span class="helpText">{helpText}</span>
    </div>
  )
}

export default Textarea