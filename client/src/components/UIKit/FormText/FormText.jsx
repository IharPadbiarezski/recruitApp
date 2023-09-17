import React from 'react'
import './FormText.css'

const FormText = ({ values }) => {
  return (
    <p className="form-text">{values.text}</p>
  )
}

export default FormText