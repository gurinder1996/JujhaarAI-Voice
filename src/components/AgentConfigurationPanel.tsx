import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AgentConfigurationPanel: React.FC = () => {
  const [context, setContext] = useState(`IAPDA Overview
- Name: International Association of Professional Debt Arbitrators (I - A - P - D - A)
- Purpose: Provide certified debt relief specialists, offering tools, education, and support to manage debt effectively.
- Specializations:
  - Debt relief tools
  - Debt relief education and support
  - Certified debt specialists directory
- Operating Hours: Monday to Friday, 9:00 AM to 6:00 PM EST.`);

  const [welcomeMessage, setWelcomeMessage] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 'normal'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ],
  };

  return (
    <Box sx={{ 
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ flex: 1, mb: 3 }}>
        <ReactQuill
          value={context}
          onChange={setContext}
          modules={modules}
          style={{ 
            height: 'calc(100% - 50px)',
            '& .ql-editor': {
              fontSize: '14px',
              lineHeight: '1.5',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
            }
          }}
        />
      </Box>

      <Box sx={{ mt: 'auto' }}>
        <TextField
          fullWidth
          placeholder="Enter welcome message..."
          value={welcomeMessage}
          onChange={(e) => setWelcomeMessage(e.target.value)}
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fff',
              fontSize: '14px',
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default AgentConfigurationPanel;
