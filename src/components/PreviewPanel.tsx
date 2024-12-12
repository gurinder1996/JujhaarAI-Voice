import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const PreviewPanel: React.FC = () => {
  const [testInput, setTestInput] = useState('');

  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      p: 3,
      borderLeft: '1px solid #e0e0e0'
    }}>
      {/* Test Controls */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        gap: 2,
        mb: 'auto'
      }}>
        <Button
          variant="contained"
          size="small"
          sx={{ 
            textTransform: 'none',
            bgcolor: '#2196f3',
            '&:hover': {
              bgcolor: '#1976d2',
            },
          }}
        >
          Test Audio
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ 
            textTransform: 'none',
            color: '#666',
            borderColor: '#666',
            '&:hover': {
              borderColor: '#444',
              color: '#444',
            },
          }}
        >
          Test LLM
        </Button>
      </Box>

      {/* Microphone Icon */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <MicIcon sx={{ fontSize: 48, color: '#666' }} />
      </Box>

      {/* Test Input Area */}
      <Box sx={{ mt: 'auto' }}>
        <TextField
          fullWidth
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
          placeholder="Enter test input..."
          size="small"
          sx={{
            mb: 1,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fff',
              fontSize: '14px',
            }
          }}
        />
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Button
            size="small"
            sx={{ 
              textTransform: 'none',
              color: '#666',
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#444',
              }
            }}
          >
            Test
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPanel;
