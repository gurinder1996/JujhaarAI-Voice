import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FunctionsIcon from '@mui/icons-material/Functions';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PhoneIcon from '@mui/icons-material/Phone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SecurityIcon from '@mui/icons-material/Security';
import WebhookIcon from '@mui/icons-material/Webhook';

const SettingsTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Functions');

  const tabs = [
    { name: 'Functions', icon: <FunctionsIcon /> },
    { name: 'Knowledge Base', icon: <MenuBookIcon /> },
    { name: 'Speech Settings', icon: <RecordVoiceOverIcon /> },
    { name: 'Call Settings', icon: <PhoneIcon /> },
    { name: 'Post-Call Analysis', icon: <AssessmentIcon /> },
    { name: 'Security Settings', icon: <SecurityIcon /> },
    { name: 'Webhook Settings', icon: <WebhookIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      {/* Left sidebar with tabs */}
      <Box sx={{ width: 240, borderRight: 1, borderColor: 'divider' }}>
        <List sx={{ p: 0 }}>
          {tabs.map((tab) => (
            <ListItem
              key={tab.name}
              button
              selected={selectedTab === tab.name}
              onClick={() => setSelectedTab(tab.name)}
              sx={{
                py: 1.5,
                '&.Mui-selected': {
                  backgroundColor: '#f5f5f5',
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: '#666' }}>
                {tab.icon}
              </ListItemIcon>
              <ListItemText 
                primary={tab.name}
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontSize: '14px',
                    color: '#333',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right content area */}
      <Box sx={{ flex: 1, p: 3 }}>
        {selectedTab === 'Functions' && (
          <>
            <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
              Enable your agent with capabilities such as calendar bookings, call termination, etc.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography sx={{ flex: 1, fontSize: '14px' }}>transfer_call</Typography>
              <Button
                size="small"
                startIcon={<ContentCopyIcon />}
                sx={{ minWidth: 40, p: 0.5 }}
              />
            </Box>
            <Button
              startIcon={<AddIcon />}
              sx={{ 
                textTransform: 'none',
                color: '#2196f3',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.04)',
                },
              }}
            >
              Add
            </Button>
          </>
        )}
        {selectedTab === 'Knowledge Base' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Knowledge Base configuration panel
          </Typography>
        )}
        {selectedTab === 'Speech Settings' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Speech Settings configuration panel
          </Typography>
        )}
        {selectedTab === 'Call Settings' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Call Settings configuration panel
          </Typography>
        )}
        {selectedTab === 'Post-Call Analysis' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Post-Call Analysis configuration panel
          </Typography>
        )}
        {selectedTab === 'Security Settings' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Security Settings configuration panel
          </Typography>
        )}
        {selectedTab === 'Webhook Settings' && (
          <Typography variant="body2" sx={{ color: '#666' }}>
            Webhook Settings configuration panel
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SettingsTabs;
