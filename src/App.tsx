import React from 'react';
import { Box, ThemeProvider, CssBaseline, AppBar, Toolbar, Button, Select, MenuItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AgentConfigurationPanel from './components/AgentConfigurationPanel';
import SettingsTabs from './components/SettingsTabs';
import PreviewPanel from './components/PreviewPanel';
import { createTheme } from '@mui/material/styles';

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
      <Box sx={{ 
        display: 'flex',
        width: '100vw',
        height: '100vh',
        bgcolor: '#f5f5f5'
      }}>
        {/* Left Panel - System Prompt */}
        <Box sx={{ 
          width: '35%',
          height: '100vh',
          bgcolor: 'white',
          borderRight: '1px solid #e0e0e0',
          overflow: 'auto'
        }}>
          <AppBar position="static" sx={{ 
            bgcolor: 'white', 
            boxShadow: 'none', 
            borderBottom: '1px solid #e0e0e0' 
          }}>
            <Toolbar>
              <Button 
                startIcon={<ArrowBackIcon />}
                sx={{ 
                  color: '#666',
                  textTransform: 'none',
                  mr: 2
                }}
              >
                Back
              </Button>
              <Select
                value={1}
                size="small"
                sx={{
                  width: 120,
                  height: 32,
                  mr: 'auto',
                  '& .MuiSelect-select': {
                    py: 0.5,
                  }
                }}
              >
                <MenuItem value={1}>English</MenuItem>
                <MenuItem value={2}>Spanish</MenuItem>
              </Select>
            </Toolbar>
          </AppBar>
          <AgentConfigurationPanel />
        </Box>

        {/* Middle Panel - Settings */}
        <Box sx={{ 
          width: '35%',
          height: '100vh',
          bgcolor: 'white',
          borderRight: '1px solid #e0e0e0',
          overflow: 'auto'
        }}>
          <SettingsTabs />
        </Box>

        {/* Right Panel - Preview */}
        <Box sx={{ 
          width: '30%',
          height: '100vh',
          bgcolor: 'white',
          overflow: 'auto'
        }}>
          <PreviewPanel />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
