import React from 'react'
import './candidate-item.css'
import Task from '../task/task'

const CandidateItem = ({ avatar, name, status, }) => {

  return (
    <div className="surface">
      <div className="info">
        <div className={avatar}/>
      <label>{name}</label>
      <div className="status">
        <div className="indicator"/>
        <sub>{status}</sub>
      </div>
      </div>
      <div className="tasks-list">
        <Task style={'task-lvl-2'} icon={'i-clock'} task={'Оценка релевантности резюме по профилю кандидата'}/>
       {/* <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Описать аргументы релевантности кандидата'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Сменить статус с "Добавлен" на "Написать" в ХФ'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Написать кандидату'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Проверить ответ кандидата'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Презентовать кандидату вакансию и компанию'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Сменить статус с "Ответ" на "Скрининг" (перв собес) в CRM'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Согласовать время встречи для первичного собеседования'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Провести первичное собеседование'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Прикрепить ссылку на видео-запись первичного собесдования'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Провести оценку (скрининг) кандидата'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Подготовить резюме кандидата'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Подготовить сопроводительную записку'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Передать кандидата старшему рекрутеру или отказать'}/>
        <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Перевести на новый этап собеседования или отказать'}/>
  <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Сменить статус "Скрининг" на "У клиента" в CRM'}/>*/}
      </div>
    </div>
  )
}

export default CandidateItem