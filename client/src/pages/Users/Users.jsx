import React, { useState, useEffect, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from "axios";
import InviteUser from '../../popups/InviteUser/InviteUser';
import './Users.css'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const Users = () => {

  const [rowData, setRowData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/");
        setRowData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

//   const [rowData] = useState([
//     {name: "Ihar Padbiarezski", access: "Admin", role: "Senior", head: "Ihar Padbiarezski"},
// ]);

const [columnDefs] = useState([
    { field: 'img', headerName: '' },
    { field: 'fullName', headerName: 'Имя' },
    { field: 'email', headerName: 'Эл. почта' },
    { field: 'accessLevelName', headerName: 'Уровень доступа' },
    { field: 'roleName', headerName: 'Роль' },
    { field: 'headName', headerName: 'Руководитель' }
]);

const defaultColDef = useMemo( ()=> ({
  sortable: true
}));

  return (
    <div className='users-container'>
      <InviteUser />
      <h1>Пользователи</h1>
      <div className="ag-theme-material" style={{height: 500, width: 1200}}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        >
        </AgGridReact>
      </div>
    </div>
  )
}

export default Users