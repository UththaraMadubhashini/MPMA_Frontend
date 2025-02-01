// src/components/Login.js
import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VerifyStudent = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        left: '300px',
        minHeight: '100vh',
        overflow: 'hidden',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#fff',
        marginTop: '-150px',
      }}
    >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '50px', color: '#150095' }}>
          Student Registration
        </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '50px',
          width: '500px',
          textAlign: 'center',
          borderRadius: '12px',
          marginBottom: '20px',
        }}
      >
        
        <Typography variant="body1" sx={{ marginBottom: '30px', fontSize: '16px' }}>
          Enter Student’s NIC or Passport No
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="NIC or Passport No"
          sx={{ marginBottom: '30px' }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#150095',
            color: '#fff',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#0d0066',
            },
          }}
          onClick={() => navigate('/New-Login')} 
        >
          Log In
        </Button>
      </Paper>

      <Button
        variant="outlined"
        sx={{
          color: '#150095',
          borderColor: '#150095',
          '&:hover': {
            backgroundColor: '#f0f7ff',
          },
        }}
        onClick={() => navigate('/student-mng')}
      >
        Back
      </Button>
    </Box>
  );
};

export default VerifyStudent;