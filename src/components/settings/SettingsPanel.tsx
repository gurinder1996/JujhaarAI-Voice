import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Collapse, Button } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CallEndIcon from '@mui/icons-material/CallEnd';
import EventIcon from '@mui/icons-material/Event';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CodeIcon from '@mui/icons-material/Code';

interface SettingsItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  description?: string;
}

const settingsItems: SettingsItem[] = [
  {
    id: 'functions',
    name: 'Functions',
    icon: <FunctionsIcon />,
    description: 'Enable your agent with capabilities such as calendar bookings, call termination, etc.'
  },
  {
    id: 'knowledge',
    name: 'Knowledge Base',
    icon: <MenuBookIcon />,
    description: 'Add and manage knowledge sources for your agent.'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <SettingsIcon />,
    description: 'Configure general settings for your agent.'
  },
  {
    id: 'security',
    name: 'Security Settings',
    icon: <SecurityIcon />,
    description: 'Manage security settings and access controls.'
  },
  {
    id: 'webhook',
    name: 'Webhook Settings',
    icon: <StorageIcon />,
    description: 'Configure webhook settings for integrations.'
  }
];

interface FunctionItem {
  icon: React.ReactNode;
  name: string;
}

const functionItems: FunctionItem[] = [
  { icon: <CallEndIcon />, name: 'End Call' },
  { icon: <PhoneForwardedIcon />, name: 'Call Transfer' },
  { icon: <EventIcon />, name: 'Check Calendar Availability (Cal.com)' },
  { icon: <EventIcon />, name: 'Book on the Calendar (Cal.com)' },
  { icon: <DialpadIcon />, name: 'Press Digit (IVR Navigation)' },
  { icon: <CodeIcon />, name: 'Custom Function' }
];

const SettingsPanel: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('functions');
  const [expandedItem, setExpandedItem] = useState<string>('functions');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const addMenuRef = useRef<HTMLDivElement>(null);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addMenuRef.current && 
        !addMenuRef.current.contains(event.target as Node) &&
        addButtonRef.current &&
        !addButtonRef.current.contains(event.target as Node)
      ) {
        setShowAddMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    setExpandedItem(expandedItem === itemId ? '' : itemId);
  };

  return (
    <Box sx={{ 
      width: '100%',  
      height: '100%',
      overflow: 'auto',
      borderRight: '1px solid #e0e0e0',
      bgcolor: 'white'
    }}>
      {settingsItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            borderBottom: '1px solid #e0e0e0',
            '&:last-child': {
              borderBottom: 'none'
            }
          }}
        >
          {/* Header */}
          <Box
            onClick={() => handleItemClick(item.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: '12px 16px',
              cursor: 'pointer',
              bgcolor: activeItem === item.id ? '#f5f9ff' : 'transparent',
              borderLeft: activeItem === item.id ? '2px solid #0066ff' : '2px solid transparent',
              '&:hover': {
                bgcolor: activeItem === item.id ? '#f5f9ff' : '#f5f5f5'
              }
            }}
          >
            <Box sx={{ 
              color: activeItem === item.id ? '#0066ff' : '#666',
              mr: 2,
              display: 'flex',
              alignItems: 'center'
            }}>
              {item.icon}
            </Box>
            <Typography sx={{ 
              flex: 1,
              fontSize: '14px',
              color: activeItem === item.id ? '#0066ff' : '#666',
              fontWeight: activeItem === item.id ? 500 : 400
            }}>
              {item.name}
            </Typography>
            {expandedItem === item.id ? (
              <ExpandLessIcon sx={{ color: activeItem === item.id ? '#0066ff' : '#666' }} />
            ) : (
              <ExpandMoreIcon sx={{ color: activeItem === item.id ? '#0066ff' : '#666' }} />
            )}
          </Box>

          {/* Content */}
          <Collapse in={expandedItem === item.id}>
            <Box sx={{ p: '16px', bgcolor: 'white' }}>
              {item.description && (
                <Typography variant="body2" sx={{ mb: 2, color: '#666', fontSize: '14px' }}>
                  {item.description}
                </Typography>
              )}

              {item.id === 'functions' && (
                <>
                  {/* Function Items */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: '12px',
                      border: '1px solid #e0e0e0',
                      borderRadius: 1,
                      mb: 2,
                      '&:hover .action-buttons': {
                        opacity: 1
                      }
                    }}
                  >
                    <PhoneForwardedIcon sx={{ color: '#666', mr: 1.5 }} />
                    <Typography sx={{ flex: 1, fontSize: '14px', color: '#333' }}>
                      transfer_call
                    </Typography>
                    <Box
                      className="action-buttons"
                      sx={{
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        display: 'flex',
                        gap: 1
                      }}
                    >
                      <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: '#666', p: 0.5 }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Add Button and Menu */}
                  <Box sx={{ position: 'relative' }}>
                    <Button
                      ref={addButtonRef}
                      startIcon={<AddIcon />}
                      onClick={() => setShowAddMenu(!showAddMenu)}
                      sx={{
                        textTransform: 'none',
                        color: '#0066ff',
                        p: '6px 12px',
                        minWidth: 'auto',
                        '&:hover': {
                          bgcolor: 'rgba(0, 102, 255, 0.04)'
                        }
                      }}
                    >
                      Add
                    </Button>

                    {showAddMenu && (
                      <Box
                        ref={addMenuRef}
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          width: '100%',  
                          bgcolor: 'white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          border: '1px solid #e0e0e0',
                          borderRadius: 1,
                          zIndex: 1000,
                          mt: 1
                        }}
                      >
                        {functionItems.map((func, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: '8px 16px',
                              cursor: 'pointer',
                              '&:hover': {
                                bgcolor: '#f5f5f5'
                              }
                            }}
                          >
                            <Box sx={{ color: '#666', mr: 1.5, display: 'flex', alignItems: 'center' }}>
                              {func.icon}
                            </Box>
                            <Typography sx={{ fontSize: '14px', color: '#333' }}>
                              {func.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default SettingsPanel;
