import React from 'react'
import VacancyWidjet from '../../components/VacancyWidjet/VacancyWidjet'
import './Workspace.css'

const items = [
  {
    id: 1,
    name: "Product Manager",
    price: {
      amount: 130000,
      currency: "$"
    },
    number: 0
  },
  {
    id: 2,
    name: "UX Designer",
    price: {
      amount: 100000,
      currency: "$"
    },
    number: 1
  },
  {
    id: 3,
    name: "Head Manager",
    price: {
      amount: 190000,
      currency: "$"
    },
    number: 5
  }
]
const Workspace = () => {
  return (
    <>
      {items.map(item => <VacancyWidjet key={item.id} item={item} />)}
    </>
    
  )
}

export default Workspace