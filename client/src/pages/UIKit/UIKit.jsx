import React from 'react'
import Button from '../../components/UIKit/Button/Button'
import Link from '../../components/UIKit/Link/Link'
import Input from '../../components/UIKit/Input/Input'
import Textarea from '../../components/UIKit/Textarea/Textarea'

import TodoListRecruiter from '../../components/todo-list/todo-list-rectuiter'
import TodoListLeader from '../../components/todo-list/todo-list-leader'


{/*
import Header from '../../components/todo-list/header/header'
import Recruiter from '../../components/todo-list/recruiter/recruiter'
import Task from '../../components/todo-list/task/task'
import CandidateItem from '../../components/todo-list/candidate-item/candidate-item'*/}

import './UIKit.css'


const params = {
    inputs: {
        email: {
            label: "Title",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com",
            className: "invalid"
        },
        password: {
            label: "Пароль",
            id: "password",
            type: "password",
            placeholder: "Мин. 6 символов"
        },
        
    }/*,
    textarea: {
        email: {
            label: "Title",
            id: "email",
            type: "email",
            placeholder: "example@gmail.com",
            className: "invalid"
        }
        
    }*/
}






const UIKit = () => {

    // const handleClick = () => {
    //     this.classList.toggle("filled--loading");
    // }

    return (
        <div className='Board'>
            <p>&Link</p>
            <div className='Surface'>
            <Link underline={'none'} link={'uikit'} text={'None'} />
            <Link underline={'solid'} link={'uikit'} text={'Solid'} />
            <Link underline={'dotted'} link={'uikit'} text={'Dotted'} />
            <Link underline={'dashed'} link={'uikit'} text={'Dashed'} />
            </div>
            <p>&Buttons</p>
            <div className='Surface'>
                <Button style={'filled-xl-fixed'} text={'Filled'} />
                <Button style={'primary-xl-fixed'} text={'Primary'} iconR={'icon-placeholder-primary'} />
                <Button style={'secondary-xl-fixed'} iconL={'icon-placeholder-transparent'} text={'Secondary'} />
                <Button style={'danger-xl-hug'} iconL={'icon-placeholder-danger'} text={'Danger'} />
            {/* <button className='Filled'>Button</button> */}
             </div>
             <p>&Input</p>
             <div className='Surface'>
             <Input style={'default'} input={params.inputs.email} helpText={'Help Text'}/>
             </div>


             <p>&Textarea</p>
             <div className='Surface'>
             <Textarea style={'txtarea-default'} textarea={params.inputs.email} helpText={'Help Text'}/>
             </div>
             {/*<Header title={'ToDo Header'}  icon={'angle-expanded'}/>
             <Recruiter avatar={'avatar-placeholder'} name={'Michael Parry'}/>
             <Task style={'task-lvl-1'} icon={'angle-expanded'} task={'Task'}/>
             <Task style={'task-lvl-2'} icon={'i-checkbox'} task={'Task 1'}/>
             <Task style={'task-lvl-3'} icon={'i-checkbox'} task={'Task'}/>
             <Task style={'task-lvl-2'} icon={'i-comment'} task={'Task 2'}/>
             <CandidateItem avatar={'avatar'} name={'Michael Parry'} status={'Добавлен'}/>
    <div></div>*/}
            <div className="to-do">
             <TodoListRecruiter/>
             <TodoListLeader/> </div>
             



        </div>
    )
  }


  export default UIKit





