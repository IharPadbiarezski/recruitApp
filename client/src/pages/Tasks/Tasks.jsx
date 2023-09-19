import React, { useState, useEffect } from 'react'
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstructionLink from '../../components/InstructionLink/InstructionLink';
import Checkbox from '@mui/material/Checkbox';
import './Tasks.css'

const Tasks = () => {
  const [checked, setChecked] = useState([0]);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(0)

  const [instruction, setInstruction] = useState({
    name: '',
    link: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/tasks/");
        setTasks(res.data);
        setSelectedTaskId(res.data[0].id);
        setInstruction(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  const handleToggle = (task) => () => {
    const currentIndex = checked.indexOf(task.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(task.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setSelectedTaskId(task.id);
    setInstruction(task)
  };


  return (
    <div className='tasks-page-container'>
        <div className='tasks-container'>
          <h4>Задачи</h4>
          <List sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {tasks.map((task) => {
              const labelId = `checkbox-list-label-${task.id}`;

              return (
                <ListItem
                  key={task.id}
                  disablePadding
                >
                  <ListItemButton selected={task.id === selectedTaskId} role={undefined} onClick={handleToggle(task)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(task.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={task.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className='task-container'>
          <InstructionLink instruction={instruction}/>
        </div>
    </div>
  )
}

export default Tasks