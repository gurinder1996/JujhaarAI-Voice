import React from 'react';
import { ThemeProvider, CssBaseline, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';
import MicIcon from '@mui/icons-material/Mic';
import AgentConfigurationPanel from './components/AgentConfigurationPanel';
import SettingsTabs from './components/SettingsTabs';
import PreviewPanel from './components/PreviewPanel';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" sx={{ mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ flex: 1 }}>
              VAA CS15 PLANTA Restaurant
            </Typography>
            <IconButton>
              <SettingsIcon />
            </IconButton>
            <IconButton>
              <TranslateIcon />
            </IconButton>
            <Typography variant="body2" sx={{ mx: 1 }}>English</Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Left Column */}
          <Box sx={{ width: '50%', height: '100%', overflow: 'auto', borderRight: 1, borderColor: 'divider', bgcolor: '#fff' }}>
            <AgentConfigurationPanel />
          </Box>
          
          {/* Right Column */}
          <Box sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              <SettingsTabs />
            </Box>
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <PreviewPanel />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
