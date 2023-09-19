import React from 'react'
import './Select.css'

const Select = ({ select, options }) => {
  return (
    <div className='select-container'>
        <label className='label' htmlFor={select.id}>{select.label}</label>
        <select className={`select ${select.className}`} id={select.id} name={select.name} onChange={select.onChange}>
            {options.map((option) => {
                return  <option key={option.id} value={option.id}>{option.name}</option>
            })}
        </select>
    </div>
  )
}

export default Select