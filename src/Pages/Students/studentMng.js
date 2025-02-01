import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useNavigate } from 'react-router-dom';

function StudentMng() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginTop: '-40px',
        padding: 2,
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: '#150095' }}
      >
        Student Management
      </Typography>

      {/* Grid container for the management boxes */}
      <Box
        sx={{
          display: 'flex',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 4,
          alignItems: 'flex-start',
          width: '1000px',
          maxWidth: '900px',
        }}
      >
        {/* Student Registration Button */}
        <Button
          variant="outlined"
          onClick={() => navigate("/verify-student")}
          sx={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #66b2ff',
            borderRadius: '10px',
            backgroundColor: '#f9f9ff',
            '&:hover': { backgroundColor: '#e6f7ff' },
          }}
        >
          <AssignmentIcon sx={{ fontSize: 40, color: '#66b2ff' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Student Registration
          </Typography>
        </Button>

        {/* Admission Management Button */}
        <Button
          variant="outlined"
          sx={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #66b2ff',
            borderRadius: '10px',
            backgroundColor: '#f9f9ff',
            '&:hover': { backgroundColor: '#e6f7ff' },
          }}
        >
          <CheckBoxIcon sx={{ fontSize: 40, color: '#66b2ff' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Admission Management
          </Typography>
        </Button>

        {/* Attendance Management Button */}
        <Button
          variant="outlined"
          sx={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #66b2ff',
            borderRadius: '10px',
            backgroundColor: '#f9f9ff',
            '&:hover': { backgroundColor: '#e6f7ff' },
          }}
        >
          <DescriptionIcon sx={{ fontSize: 40, color: '#66b2ff' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Attendance Management
          </Typography>
        </Button>

               {/* Information Management Button */}
               <Button
          variant="outlined"
          onClick={() => navigate('/info1')}
          sx={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #66b2ff',
            borderRadius: '10px',
            backgroundColor: '#f9f9ff',
            '&:hover': { backgroundColor: '#e6f7ff' },
          }}
        >
          <DescriptionIcon sx={{ fontSize: 40, color: '#66b2ff' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Information Management
          </Typography>
        </Button> 

      

        {/* Add New Button */}
        <Button
          variant="outlined"
          sx={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #66b2ff',
            borderRadius: '10px',
            backgroundColor: '#f9f9ff',
            '&:hover': { backgroundColor: '#e6f7ff' },
          }}
        >
          <AddIcon sx={{ fontSize: 40, color: '#66b2ff' }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Add New
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default StudentMng;