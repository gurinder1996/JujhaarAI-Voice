import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Collapse, Button } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CallEndIcon from '@mui/icons-material/CallEnd';
import EventIcon from '@mui/icons-material/Event';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CodeIcon from '@mui/icons-material/Code';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
  { icon: <CodeIcon />, name: 'Custom Function' },
];

const FunctionsPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        addButtonRef.current &&
        !addButtonRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Box sx={{ 
      border: '1px solid #e0e0e0',
      borderRadius: 1,
      mb: 2,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <Box
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          cursor: 'pointer',
          '&:hover': { bgcolor: '#f5f5f5' },
        }}
      >
        <FunctionsIcon sx={{ color: '#666', mr: 1 }} />
        <Typography sx={{ flex: 1, fontSize: '14px', color: '#666' }}>
          Functions
        </Typography>
        {isExpanded ? (
          <ExpandLessIcon sx={{ color: '#666' }} />
        ) : (
          <ExpandMoreIcon sx={{ color: '#666' }} />
        )}
      </Box>

      {/* Content */}
      <Collapse in={isExpanded}>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
            Enable your agent with capabilities such as calendar bookings, call termination, etc.
          </Typography>

          {/* Existing Function Item */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              mb: 2,
              '&:hover .action-buttons': {
                opacity: 1,
              },
            }}
          >
            <PhoneForwardedIcon sx={{ color: '#666', mr: 1 }} />
            <Typography sx={{ flex: 1, fontSize: '14px' }}>
              transfer_call
            </Typography>
            <Box
              className="action-buttons"
              sx={{
                opacity: 0,
                transition: 'opacity 0.2s',
                display: 'flex',
                gap: 1,
              }}
            >
              <IconButton size="small" sx={{ color: '#666' }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#666' }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Add Button and Dropdown */}
          <Box sx={{ position: 'relative' }}>
            <Button
              ref={addButtonRef}
              startIcon={<AddIcon />}
              onClick={() => setShowDropdown(!showDropdown)}
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

            {/* Dropdown Menu */}
            {showDropdown && (
              <Box
                ref={dropdownRef}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '300px',
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  zIndex: 1000,
                }}
              >
                {functionItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1.5,
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: '#f5f5f5',
                      },
                    }}
                  >
                    <Box sx={{ color: '#666', mr: 1 }}>{item.icon}</Box>
                    <Typography sx={{ fontSize: '14px' }}>
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FunctionsPanel;
