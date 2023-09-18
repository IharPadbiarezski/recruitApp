import React from 'react'
import './VacancyWidjet.css'

const VacancyWidjet = ({ item }) => {
  return (
    <div className="vacancy-widjet">
        <h3>{item.name}</h3>
        <p>{item.price.amount}{item.price.currency}, {item.company}</p>
        <span>{item.number}</span>
    </div>
  )
}

export default VacancyWidjet