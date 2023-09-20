import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './VacancyCard.css'

const VacancyCard = ({ vacancy }) => {
  return (
        <Card className='vacancy-card-container' variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {vacancy.name}
                    </Typography>
                    <Typography variant="body2">
                        {vacancy.price.amount}{vacancy.price.currency}, {vacancy.companyName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        { vacancy.number }
                    </Typography>
                </CardContent>
            </React.Fragment>
        </Card>
    
  )
}

export default VacancyCard