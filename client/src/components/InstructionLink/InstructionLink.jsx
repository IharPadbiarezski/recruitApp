import React from 'react'
import "./InstructionLink.css"

const InstructionLink = ({ instruction }) => {
  return (
    <>
        <h4 className='instruction-name'>{ instruction.name}</h4>
        <p className='instruction-link-label'>Ссылка на инструкцию</p>
        <a className='instruction-link' target='_blank' href={instruction.link} >{ instruction.link }</a>
    </>
  )
}

export default InstructionLink