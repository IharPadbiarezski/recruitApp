import React from 'react'
import Header from '../../components/todo-list/header/header'
import Recruiter from '../../components/todo-list/recruiter/recruiter'
import Task from '../../components/todo-list/task/task'
import CandidateItem from '../../components/todo-list/candidate-item/candidate-item'
import './todo-list-leader.css'

const TodoListLeader = ({}) => {

  return (
    <div className="tasks">
      <div className="list">
      <Task style={'task-lvl-1'} icon={'i-checkbox'} task={'Изучить паспорт вакансии'}/>
      </div>
      <div className="candidates">
        <Header title={'Руководитель'}/>
        <Recruiter avatar={'avatar-placeholder'} name={'Василий Марков'}/>
      </div>
    </div>
  )
}

export default TodoListLeader