import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import { set, useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
// import axiosInstance from '../../../helper/Helper';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import { endPoints } from '../../../axios/endpoints/endpoints';
import axiosInstance from '../../../axios/helper/Helper';
import toast from 'react-hot-toast';

const Input = styled('input')({
  display: 'none',
});

const Create = () => {
  const [productPic, setProductPic] = useState(null);
  const [loading, setLoading] = useState(false);
  let darkMode = useDarkMode();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', productPic);

    try {
      const response = await axiosInstance.post(endPoints.cms.create, formData);
      setLoading(false);
      toast(`${response.data.message}`);
      navigate('/productlist');
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode.value ? '#121212' : '#f0f0f0',
    }}>
      <Paper elevation={3} sx={{
        padding: 4,
        marginTop: 4,
        backgroundColor: darkMode.value ? '#1e1e1e' : '#fff',
        color: darkMode.value ? '#e0e0e0' : '#000',
        borderRadius: 2,
        boxShadow: darkMode.value ? '0px 4px 10px rgba(0,0,0,0.5)' : '0px 4px 10px rgba(0,0,0,0.2)',
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: darkMode.value ? '#fafafa' : '#3f51b5' }}>
          Create Product
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                required
                {...register('title', {
                  required: 'Title is required',
                  minLength: {
                    value: 3,
                    message: 'Title must be at least 3 characters',
                  },
                })}
                error={!!errors.title}
                helperText={errors.title ? errors.title.message : ''}
                sx={{
                  '& .MuiInputBase-root': { color: darkMode.value ? '#fafafa' : '#000' },
                  '& .MuiFormLabel-root': { color: darkMode.value ? '#9e9e9e' : '#000' },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                required
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 3,
                    message: 'Description must be at least 3 characters',
                  },
                })}
                error={!!errors.description}
                helperText={errors.description ? errors.description.message : ''}
                sx={{
                  '& .MuiInputBase-root': { color: darkMode.value ? '#fafafa' : '#000' },
                  '& .MuiFormLabel-root': { color: darkMode.value ? '#9e9e9e' : '#000' },
                }}
              />
            </Grid>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 2 }}>
              <Avatar
                alt="Product Picture"
                src={productPic ? URL.createObjectURL(productPic) : ''}
                sx={{ width: 56, height: 56 }}
              />
              <label htmlFor="product-pic-upload">
                <Input
                  accept="image/*"
                  id="product-pic-upload"
                  type="file"
                  onChange={(e) => setProductPic(e.target.files[0])}
                />
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    backgroundColor: darkMode.value ? '#303f9f' : '#3f51b5',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: darkMode.value ? '#5c6bc0' : '#303f9f',
                    },
                  }}
                >
                  Upload Product Pic
                </Button>
              </label>
            </Stack>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: darkMode.value ? '#3f51b5' : '#3f51b5',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: darkMode.value ? '#5c6bc0' : '#303f9f',
                  },
                }}
              >
                {loading ? 'Creating Product...' : 'Create'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Create;
