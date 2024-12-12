import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Collapse,
  Switch,
  Slider,
  TextField,
  Button,
  Menu, 
  MenuItem 
} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PhoneIcon from '@mui/icons-material/Phone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CallEndIcon from '@mui/icons-material/CallEnd';
import EventIcon from '@mui/icons-material/Event';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CodeIcon from '@mui/icons-material/Code';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
    id: 'speech',
    name: 'Speech Settings',
    icon: <VolumeUpIcon />,
    description: 'Configure voice and speech settings for your agent.'
  },
  {
    id: 'call',
    name: 'Call Settings',
    icon: <PhoneIcon />,
    description: 'Manage call handling and routing settings.'
  },
  {
    id: 'analysis',
    name: 'Post-Call Analysis',
    icon: <AssessmentIcon />,
    description: 'Review and analyze call performance and metrics.'
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [knowledgeItems, setKnowledgeItems] = useState([
    { id: 'planta', name: 'PLANTA' }
  ]);
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
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const renderKnowledgeBase = () => {
    return (
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Add knowledge base to provide context to the agent.
        </Typography>
        
        {knowledgeItems.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1,
              mb: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography>{item.name}</Typography>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
        
        <Button
          startIcon={<AddIcon />}
          sx={{ 
            color: 'primary.main',
            textTransform: 'none',
            mt: 1
          }}
        >
          Add
        </Button>
      </Box>
    );
  };

  const renderSpeechSettings = () => {
    return (
      <Box sx={{ mt: 1 }}>
        {/* Background Sound */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>Background Sound</Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 1,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1
          }}>
            <Typography>None</Typography>
            <IconButton size="small">
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Responsiveness */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Responsiveness</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Slider 
              defaultValue={1}
              min={0}
              max={1}
              step={0.1}
              sx={{ flex: 1 }}
            />
            <Typography>1</Typography>
          </Box>
        </Box>

        {/* Interruption Sensitivity */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Interruption Sensitivity</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Control how sensitive AI can be interrupted by human speech.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Slider 
              defaultValue={0.8}
              min={0}
              max={1}
              step={0.1}
              sx={{ flex: 1 }}
            />
            <Typography>0.8</Typography>
          </Box>
        </Box>

        {/* Enable Backchanneling */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Enable Backchanneling</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Enables the agent to use affirmations like 'yeah' or 'uh-huh' during conversations, indicating active listening and engagement.
          </Typography>
          <Switch defaultChecked />
        </Box>

        {/* Boosted Keywords */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Boosted Keywords</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Provide a customized list of keywords to expand our model's vocabulary.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Split by comma. Example: Retell,Walmart
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter keywords..."
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Enable Speech Normalization */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Enable Speech Normalization</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            To convert text elements like numbers, currency, and dates into human-like spoken forms. (Learn more)
          </Typography>
          <Switch defaultChecked />
        </Box>

        {/* Disable Transcript Formatting */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Disable Transcript Formatting</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Prevent agent texts like phone numbers being formatted as timestamps.
          </Typography>
          <Switch />
        </Box>

        {/* Reminder Message Frequency */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Reminder Message Frequency</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Control how often AI will send a reminder message.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              size="small"
              value="10"
              sx={{ width: 80 }}
            />
            <Typography>seconds</Typography>
            <TextField
              size="small"
              value="1"
              sx={{ width: 80 }}
            />
            <Typography>times</Typography>
          </Box>
        </Box>

        {/* Pronunciation */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle2">Pronunciation</Typography>
              <IconButton size="small" sx={{ ml: 0.5 }}>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
            <Button startIcon={<AddIcon />} sx={{ color: 'primary.main', textTransform: 'none' }}>
              Add
            </Button>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Guide the model to pronounce a word, name, or phrase in a specific way. (Learn more)
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderCallSettings = () => {
    return (
      <Box sx={{ mt: 1 }}>
        {/* Voicemail Detection */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Voicemail Detection</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Hang up or leave a voicemail if a voicemail is detected
          </Typography>
          <Switch defaultChecked />
        </Box>

        {/* End Call in Silence */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">End Call in Silence</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Slider 
              defaultValue={10}
              min={0}
              max={20}
              sx={{ flex: 1 }}
            />
            <Typography>10.0 m</Typography>
          </Box>
        </Box>

        {/* Max Call Duration */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Max Call Duration</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Slider 
              defaultValue={1}
              min={0}
              max={2}
              step={0.1}
              sx={{ flex: 1 }}
            />
            <Typography>1.00 h</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderPostCallAnalysis = () => {
    return (
      <Box sx={{ mt: 1 }}>
        {/* Post Call Data Retrieval */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle2">Post Call Data Retrieval</Typography>
              <IconButton size="small" sx={{ ml: 0.5 }}>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
            <Button startIcon={<AddIcon />} sx={{ color: 'primary.main', textTransform: 'none' }}>
              Add
            </Button>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Define the information that you need to extract from the call. (Learn more)
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderSecuritySettings = () => {
    return (
      <Box sx={{ mt: 1 }}>
        {/* Opt Out Sensitive Data Storage */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Opt Out Sensitive Data Storage</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Control whether Retell should store sensitive data.
          </Typography>
          <Switch />
        </Box>

        {/* Fallback Voice ID */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle2">Fallback Voice ID</Typography>
              <IconButton size="small" sx={{ ml: 0.5 }}>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
            <Button startIcon={<AddIcon />} sx={{ color: 'primary.main', textTransform: 'none' }}>
              Add
            </Button>
          </Box>
          <Typography variant="caption" color="text.secondary">
            If the current voice provider fails, assign a fallback voice to continue the call.
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderWebhookSettings = () => {
    return (
      <Box sx={{ mt: 1 }}>
        {/* Inbound Call Webhook URL */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Inbound Call Webhook URL</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            The webhook for receiving dynamic variables for inbound phone calls. (Learn more)
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter webhook URL..."
          />
        </Box>

        {/* Agent Level Webhook URL */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle2">Agent Level Webhook URL</Typography>
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Webhook URL to receive events from Retell. (Learn more)
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter webhook URL..."
          />
        </Box>
      </Box>
    );
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
              {item.id === 'knowledge' && (
                <Box 
                  onClick={() => setExpandedItem(expandedItem === 'knowledge' ? null : 'knowledge')}
                  sx={{ 
                    p: 2,
                    cursor: 'pointer',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: expandedItem === 'knowledge' ? 'action.selected' : 'transparent',
                    '&:hover': {
                      bgcolor: 'action.hover'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MenuBookIcon sx={{ color: 'text.secondary' }} />
                      <Typography>Knowledge Base</Typography>
                    </Box>
                    {expandedItem === 'knowledge' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Box>
                  <Collapse in={expandedItem === 'knowledge'}>
                    {renderKnowledgeBase()}
                  </Collapse>
                </Box>
              )}
              {item.id === 'speech' && (
                <Box>
                  {renderSpeechSettings()}
                </Box>
              )}
              {item.id === 'call' && (
                <Box>
                  {renderCallSettings()}
                </Box>
              )}
              {item.id === 'analysis' && (
                <Box>
                  {renderPostCallAnalysis()}
                </Box>
              )}
              {item.id === 'security' && (
                <Box>
                  {renderSecuritySettings()}
                </Box>
              )}
              {item.id === 'webhook' && (
                <Box>
                  {renderWebhookSettings()}
                </Box>
              )}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default SettingsPanel;
