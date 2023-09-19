import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NewVacancy from '../../popups/NewVacancy/NewVacancy';
import './Vacancies.css'

const Vacancies = () => {
  const [vacanties, setVacancies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/vacancies/");
        setVacancies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleVacancyClick = (e) => {
    console.log(e);
    navigate(`/workspace`)
  }

  return (
    <div className="vacancies-container">
      <NewVacancy />
      <h1>Вакансии</h1>
      
      <List sx={{ width: '100%', maxWidth: 900, maxHeight: 500, overflow: 'auto', bgcolor: 'background.paper' }}>
      {vacanties.map((vacancy, index) => {
        return <>
        {index !== 0 && <Divider />}
        <ListItem 
          key={vacancy.id} 
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="information" onClick={handleVacancyClick} >
              <NavigateNextIcon  />
            </IconButton>
          }
          >
          
        <ListItemText
          primary={vacancy.name}
          secondary={
            <React.Fragment>
              <Typography
                // sx={{ display: 'inline' }}
                // component="span"
                variant="body2"
                color="text.primary"
              >
                {vacancy.companyName}
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
                {vacancy.headName}
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
                {vacancy.responsibleName}
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