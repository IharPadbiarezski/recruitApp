import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Input from '../../components/UIKit/Input/Input';
import Select from '../../components/UIKit/Select/Select';
import LinkNavigate from '../../components/UIKit/LinkNavigate/LinkNavigate';
import PlusButton from '../../components/UIKit/PlusButton/PlusButton';
import 'reactjs-popup/dist/index.css';
import './NewVacancy.css'


const NewVacancy = () => {

    const [inputs, setInputs] = useState({
        name: "",
        companyId: "",
        passport: "",
    });
    
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {

    }

    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await login(inputs)
    //       navigate("/");
    //     } catch (err) {
    //       setError(err.response.data);
    //     }
    // };

    const options = [
        {
            id: 1,
            name: "epam"
        },
        {
            id: 2,
            name: "Google"
        }
    ]

    const params = {
        inputs: {
            name: {
                label: "Название вакансии",
                id: "vacancyName",
                type: "text",
                name: "name",
                placeholder: "Название вакансии",
                onChange: handleChange
            },
            passport: {
                label: "Паспорт компании",
                id: "passport",
                type: "url",
                name: "passport",
                placeholder: "Ссылка",
                onChange: handleChange
            },
            
        },
        selects: {
            company: {
                label: "Компания",
                id: "companyName",
                name: "companyId",
                default: "Не выбрана",
                data: [],
                onChange: handleChange
            }
        }
    }

  return (
    <Popup trigger={PlusButton} modal nested>
        {close => (
            <div className='modal'>
                <div className='content'>
                    <h2>Создание новой вакансии</h2>
                    <form>
                        <Input input={params.inputs.name} />
                        <Select select={params.selects.company} options={options} />
                        <Input input={params.inputs.passport} />
                    </form>
                </div>
                <div className='popup-controls-container'>
                    <button onClick={() => close()}>Отмена</button>
                    <button onClick={handleSubmit}>Создать</button>
                </div>
            </div>
            )
        }
    </Popup>
  )
}

export default NewVacancy