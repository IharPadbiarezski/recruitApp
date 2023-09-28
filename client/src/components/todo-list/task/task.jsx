import React from 'react'
import './task.css'

const Task = ({ icon, task, style}) => {

  return (
    <div className={style}>
     {/* <input type={input} /> */}
      <i className={icon}/>
    <label>{task}</label>
    </div>
  )
}

export default Task