import React from 'react';
import { Box } from '@mui/material';
import SettingsPanel from './settings/SettingsPanel';

const SettingsTabs: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100%',
      height: '100%',
      bgcolor: 'white',
      borderLeft: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <SettingsPanel />
    </Box>
  );
};

export default SettingsTabs;
