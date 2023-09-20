import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './WorkspaceTabbar.css'

const WorkspaceTabbar = () => {
    const [value, setValue] = React.useState('1');

    const tabs = [
        {
            id: "1",
            label: "Задачи"
        },
        {
            id: "2",
            label: "Портрет кандидата"
        },
        {
            id: "3",
            label: "Кандидаты"
        },
        {
            id: "4",
            label: "Пасспорт"
        },
        {
            id: "5",
            label: "Команда"
        },
        {
            id: "6",
            label: "Доступ успеха"
        },
        {
            id: "7",
            label: "Инструменты"
        }
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map(tab => <Tab key={tab.id} label={tab.label} value={tab.id} />)}
          </TabList>
        </Box>
        <TabPanel value="1">Задачи</TabPanel>
        <TabPanel value="2">Портрет кандидата</TabPanel>
        <TabPanel value="3">Кандидаты</TabPanel>
        <TabPanel value="4">Паспорт</TabPanel>
        <TabPanel value="5">Команда</TabPanel>
        <TabPanel value="6">Доступ успеха</TabPanel>
        <TabPanel value="7">Инструменты</TabPanel>
      </TabContext>
    </Box>
  )
}

export default WorkspaceTabbar