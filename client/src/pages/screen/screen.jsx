import React from 'react'
import Button from '../../components/UIKit/Button/Button'
import Link from '../../components/UIKit/Link/Link'
import Input from '../../components/UIKit/Input/Input'
import Textarea from '../../components/UIKit/Textarea/Textarea'

import TodoListRecruiter from '../../components/todo-list/todo-list-rectuiter'
import TodoListLeader from '../../components/todo-list/todo-list-leader'

import Sidebar from '../../components/sidebar/sidebar'


{/*
import Header from '../../components/todo-list/header/header'
import Recruiter from '../../components/todo-list/recruiter/recruiter'
import Task from '../../components/todo-list/task/task'
import CandidateItem from '../../components/todo-list/candidate-item/candidate-item'*/}

import './screen.css'



const Screen = () => {

    return (
        <div className='Surface'>
        <div className='SideBar'></div>
        <div className='Content'>
            <Sidebar/>
        </div>
        </div>
    )
  }


  export default Screen





