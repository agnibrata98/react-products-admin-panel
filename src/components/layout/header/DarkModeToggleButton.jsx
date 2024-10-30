import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material'; // Sun and Moon icons
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import useDarkMode from 'use-dark-mode';

const DarkModeToggleButton = () => {
  const darkMode = useDarkMode();

  return (
    <Tooltip title={darkMode.value ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <IconButton 
        onClick={darkMode.toggle} 
        color="inherit"
        sx={{
        //   backgroundColor: darkMode.value ? '#424242' : '#fff',
          color: darkMode.value ? '#ffeb3b' : '#ff7043',
          borderRadius: '50%',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: darkMode.value ? '#616161' : '#f5f5f5',
          },
        }}
      >
        {darkMode.value ? <LightModeIcon fontSize="small" /> : <BedtimeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggleButton;
