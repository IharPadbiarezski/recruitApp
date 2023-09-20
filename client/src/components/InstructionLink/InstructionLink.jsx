import React, { useState } from 'react'
import axios from "axios";
import Input from '../UIKit/Input/Input'
import './InstructionLink.css'

const InstructionLink = ({ instruction }) => {
    console.log(instruction)
    const [inputs, setInputs] = useState({
        id: instruction.id,
        link: ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put("/api/tasks/", inputs);
        } catch (err) {
          console.log(err.response.data);
        }
    };

    const input = {
        label: "Ссылка на инструкцию",
        id: "link",
        type: "url",
        name: "link",
        value: instruction.link,
        placeholder: "Введите ссылку",
        onChange: handleChange
    }

  return (
    <div className='instruction-link-container'>
        <div>
            <h4 className='instruction-name'>{ instruction.name }</h4>
            <Input input={input}/>
        </div>

        <div className='instruction-link-controls-container'>
            <button onClick={handleSubmit} >Сохранить</button>
        </div>
    </div>
  )
}

export default InstructionLink