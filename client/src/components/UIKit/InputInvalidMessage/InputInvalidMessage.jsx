import React from 'react'
import './InputInvalidMessage.css'

const InputInvalidMessage = ({ text }) => {
  return (
    <p className='invalid-message'>{text}</p>
  )
}

export default InputInvalidMessage