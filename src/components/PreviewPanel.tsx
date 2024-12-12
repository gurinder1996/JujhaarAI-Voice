import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const PreviewPanel: React.FC = () => {
  const [testInput, setTestInput] = useState('');

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: 'normal' }}>
          Test Panel
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
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
            variant="contained"
            size="small"
            sx={{ 
              textTransform: 'none',
              bgcolor: '#e91e63',
              '&:hover': {
                bgcolor: '#d81b60',
              },
              color: 'white',
            }}
          >
            Test LLM
          </Button>
        </Box>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={2}
        value={testInput}
        onChange={(e) => setTestInput(e.target.value)}
        placeholder="Enter test input..."
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff',
            fontSize: '14px',
          }
        }}
      />
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        mt: 1,
        gap: 1
      }}>
        <MicIcon sx={{ color: '#666' }} />
        <Typography variant="body2" sx={{ color: '#666' }}>
          Test
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewPanel;
