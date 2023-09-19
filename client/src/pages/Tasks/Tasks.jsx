import React, { useState } from 'react'
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
  const [instruction, setInstruction] = useState({
    name: 'Instruction name',
    link: "http://localhost/test"
  })



  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <div className='tasks-page-container'>
        <div className='tasks-container'>
          <h4>Задачи</h4>
          <List sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
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