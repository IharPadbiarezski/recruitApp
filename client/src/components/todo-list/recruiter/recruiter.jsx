import React from 'react'
import './recruiter.css'

const Recruiter = ({ avatar, name }) => {

  return (
    <div className="recruiter">
      <div className={avatar}/>
    <label>{name}</label>
    </div>
  )
}

export default Recruiter