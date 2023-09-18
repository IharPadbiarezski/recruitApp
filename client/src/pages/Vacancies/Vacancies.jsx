import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Vacancies.css'


const items = [
  {
    id: 1,
    name: "Developer",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 2,
    name: "Developer2",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 3,
    name: "Developer1",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 4,
    name: "Developer",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 5,
    name: "Developer2",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 6,
    name: "Developer1",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 7,
    name: "Developer",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 8,
    name: "Developer2",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  },
  {
    id: 9,
    name: "Developer1",
    companyName: "Epam",
    headName: "Ihar Padbiarezski",
    responsibleName: "Misha Padbiarezski"
  }
]

const Vacancies = () => {

  const handleAddVacancy = () => {
    alert("clicked!");
  }

  return (
    <div className="vacancies-container">
      <div>
      <svg onClick={handleAddVacancy} className="plus-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="11" y="4.00012" width="2" height="16" fill="#363F43" fill-opacity="0.6"/>
        <rect x="4" y="13.0001" width="2" height="16" transform="rotate(-90 4 13.0001)" fill="#363F43" fill-opacity="0.6"/>
      </svg>
      </div>
      <h1>Вакансии</h1>
      
      <List sx={{ width: '100%', maxWidth: 900, maxHeight: 500, overflow: 'auto', bgcolor: 'background.paper' }}>
      {items.map((item, index) => {
        return <>
        {index !== 0 && <Divider />}
        <ListItem 
          key={item.id} 
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <NavigateNextIcon />
            </IconButton>
          }
          >
          
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                // sx={{ display: 'inline' }}
                // component="span"
                variant="body2"
                color="text.primary"
              >
                {item.companyName}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemText
          primary="Руководитель:"
          secondary={
            <React.Fragment>
              <Typography
                // sx={{ display: 'inline' }}
                // component="span"
                variant="body2"
                color="text.primary"
              >
                {item.headName}
              </Typography>
            </React.Fragment>
          }
        />
      <ListItemText
          primary="Ответственный:"
          secondary={
            <React.Fragment>
              <Typography
                // sx={{ display: 'inline' }}
                // component="span"
                variant="body2"
                color="text.primary"
              >
                {item.responsibleName}
              </Typography>
            </React.Fragment>
          }
        />

      </ListItem>
      </>
    })}
    </List>

    </div>
  )
}

export default Vacancies