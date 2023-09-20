import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Popup from 'reactjs-popup';
import Input from '../../components/UIKit/Input/Input';
import Select from '../../components/UIKit/Select/Select';
import PlusButton from '../../components/UIKit/PlusButton/PlusButton';
import 'reactjs-popup/dist/index.css';
import "./InviteUser.css"

const InviteUser = () => {
    const [accessLevels, setAccessLevels] = useState([]);
    const [roles, setRoles] = useState([]);
    const [heads, setHeads] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/api/accessLevels/");
            setAccessLevels(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/api/roles/");
            setRoles(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/api/users/heads/");
            setHeads(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

    const [inputs, setInputs] = useState({
        email: "",
        accessLevelId: "",
        roleId: "",
        headId: ""
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/users/", inputs);

            // navigate("/users");
        } catch (err) {
          console.log(err.response.data);
        }
    }

    const params = {
        inputs: {
            email: {
                label: "Эл. почта",
                id: "email",
                type: "email",
                name: "email",
                placeholder: "Эл. адрес пользователя",
                onChange: handleChange,
                value: inputs.email
            },
        },
        selects: {
            accessLevel: {
                label: "Уровень доступа",
                id: "levelAccess",
                name: "accessLevelId",
                onChange: handleChange
            },
            role: {
                label: "Роль",
                id: "roleId",
                name: "roleId",
                onChange: handleChange
            },
            head: {
                label: "Руководитель",
                id: "headId",
                name: "headId",
                onChange: handleChange
            },
        }
    }

  return (
    <Popup trigger={PlusButton} modal nested>
        {close => (
            <div className='modal'>
                <div className='content'>
                    <h2>Создание новой вакансии</h2>
                    <form>
                        <Input input={params.inputs.email} />
                        <Select select={params.selects.accessLevel} options={accessLevels} />
                        <Select select={params.selects.role} options={roles} />
                        <Select select={params.selects.head} options={heads} />
                    </form>
                </div>
                <div className='popup-controls-container'>
                    <button onClick={() => close()}>Отмена</button>
                    <button onClick={handleSubmit}>Пригласить</button>
                </div>
            </div>
            )
        }
    </Popup>
  )
}

export default InviteUser