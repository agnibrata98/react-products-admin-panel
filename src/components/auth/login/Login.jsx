import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, IconButton, CircularProgress } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import axios from 'axios'; // Import axios

import { useTokenStore } from '../../../store/authStore';
import toast from 'react-hot-toast';
import useDarkMode from 'use-dark-mode';
import { endPoints } from '../../../axios/endpoints/endpoints';
import axiosInstance from '../../../axios/helper/Helper';


const Input = styled('input')({
  display: 'none',
});


const Login = () => {
  const setToken = useTokenStore((state)=>state.setToken);

  let darkMode = useDarkMode();


  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


//   const onSubmit = (data) => {
//     const apiUrl = `https://wtsacademy.dedicateddevelopers.us/api/user/signin`;
//     const formData = new FormData();
//     formData.append('email', data.email);
//     formData.append('password', data.password);

//     axios
//       .post(apiUrl, formData)
//       .then((response) => {
//         console.log('API Response:', response.data);
        
//       })
//       .catch((error) => {
//         console.error('API Error:', error.message);
        
//       });
//   };

const onSubmit = async (data) => {
  setLoading(true); // Show loading state when login starts
  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('password', data.password);

  try {
    const response = await axiosInstance.post(endPoints.auth.signin, formData);
    // console.log('API Response:', response.data);
    if(response.data.status===200){
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.data.first_name);
      localStorage.setItem('profile_pic', response.data.data.profile_pic);
      setToken();
      toast(`${response.data.message}`);
      navigate('/home');
      setLoading(false);
    }else{
      setLoading(false);
      toast(`${response.data.message}`);
    }
  } catch (error) {
    console.error('API Error:', error.message);
    setLoading(false); // Stop loading on error
  }
};




  return (
    <>
    
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          style={{
            borderRadius: '10px',
            border: darkMode.value ? '2px solid #90caf9' : '2px solid #1976d2',
            padding: '30px',
            backgroundColor: darkMode.value ? '#424242' : '#fff',
            color: darkMode.value ? '#e0e0e0' : '#000',
            boxShadow: darkMode.value ? '0px 4px 10px rgba(0, 0, 0, 0.5)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" gutterBottom style={{ color: darkMode.value ? '#ffffff' : '#1976d2' }}>
              Sign In
            </Typography>

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              InputLabelProps={{
                style: { color: darkMode.value ? '#bdbdbd' : '#000' },
              }}
              InputProps={{
                style: {
                  color: darkMode.value ? '#e0e0e0' : '#000',
                  // backgroundColor: darkMode ? '#616161' : '#fff',
                },
              }}
              sx={{
                '& .MuiFilledInput-root': {
                  backgroundColor: darkMode.value ? '#616161' : '#fff',
                  '&:hover': {
                    backgroundColor: darkMode.value ? '#757575' : '#f5f5f5', // Optional hover effect
                  },
                  '&.Mui-focused': {
                    backgroundColor: darkMode.value ? '#757575' : '#e0e0e0', // Focused state color
                  },
                },
              }}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Invalid email format',
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              InputLabelProps={{
                style: { color: darkMode.value ? '#bdbdbd' : '#000' },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    style={{ color: darkMode.value ? '#bdbdbd' : '#000' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                style: {
                  color: darkMode.value ? '#fff' : '#000',
                  backgroundColor: darkMode.value ? '#616161' : '#fff',
                },
              }}
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: 'Password must be at least 8 characters long and contain at least one letter and one number',
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />

            {/* <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Log In
            </Button> */}

          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            color="primary" 
            style={{ marginTop: '20px' }}
            disabled={loading} // Disable the button when loading
          >
            {loading ? 'Loading...' : 'Log In'}
          </Button>

            <Grid>
              <Typography variant="body2" style={{ marginTop: '20px', color: darkMode.value ? '#bdbdbd' : '#000' }}>
                Don’t have an account?
              </Typography>
              <Link to="/register" style={{ marginLeft: '5px', color: darkMode.value ? '#90caf9' : '#1976d2' }}>Sign Up</Link>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
