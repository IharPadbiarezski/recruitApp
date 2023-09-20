import React from 'react'
import WorkspaceTabbar from '../../components/WorkspaceTabbar/WorkspaceTabbar'
import VacancyCard from '../../components/VacancyCard/VacancyCard'
import './Workspace.css'

const items = [
  {
    id: 1,
    name: "Product Manager",
    companyName: "Yandex",
    price: {
      amount: 130000,
      currency: "$"
    },
    number: 0
  },
  {
    id: 2,
    name: "UX Designer",
    companyName: "Yandex Pro",
    price: {
      amount: 100000,
      currency: "$"
    },
    number: 1
  },
  {
    id: 3,
    name: "Head Manager",
    companyName: "Yandex Pro",
    price: {
      amount: 190000,
      currency: "$"
    },
    number: 5
  }
]
const Workspace = () => {
  return (
    <div className='workspace-container'>
      <div className='vacancy-card-container'>
        {items.map(item => <VacancyCard key={item.id} vacancy={item} />)}
      </div>
      <WorkspaceTabbar />
    </div>
    
  )
}

export default Workspace