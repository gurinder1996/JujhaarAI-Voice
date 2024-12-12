import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/quill.css';

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
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <Box sx={{ 
      height: '100%', 
      p: 2,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ flex: 1, mb: 3 }}>
        <ReactQuill
          theme="snow"
          value={context}
          onChange={setContext}
          modules={modules}
          formats={[
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet',
            'link', 'image'
          ]}
          style={{ 
            height: '100%',
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
