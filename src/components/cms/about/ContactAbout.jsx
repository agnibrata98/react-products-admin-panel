import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import useDarkMode from 'use-dark-mode';

const ContactAbout = () => {
  const darkMode = useDarkMode();
  return (
    <Grid container spacing={4} sx={{ px: 3, py: 3, backgroundColor: '#f5f5f5', maxWidth: '100%', margin: '20px auto', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                Contact Us
            </Typography>
        </Grid>
      {/* Contact Form */}
      <Grid item xs={12} md={6}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First name"
                variant="standard"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last name"
                variant="standard"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email address"
                variant="standard"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject of the message"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Type your message here.."
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: darkMode.value ? '#efb624' : '#efb624', color: '#000', mt: 2, width: '100%', '&:hover': { backgroundColor: '#c8ea50', color: '#fff' }, borderRadius: '50px' }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Contact Information */}
      <Grid container item xs={12} md={6} style={{ gap: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: darkMode.value ? '#798189' : '#000' }}>
          <Typography variant="h6" fontWeight="bold">
            London
          </Typography>
          <Typography variant="body2">Address</Typography>
          <Typography variant="body2" gutterBottom>
            203 Fake St. Mountain View, San Francisco, California, USA
          </Typography>
          <Typography variant="body2">Phone</Typography>
          <Typography variant="body2" gutterBottom>
            +1 232 3235 324
          </Typography>
          <Typography variant="body2">Email</Typography>
          <Typography variant="body2" gutterBottom>
            youremail@domain.com
          </Typography>

          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">
              New York
            </Typography>
            <Typography variant="body2">Address</Typography>
            <Typography variant="body2" gutterBottom>
              203 Fake St. Mountain View, San Francisco, California, USA
            </Typography>
            <Typography variant="body2">Phone</Typography>
            <Typography variant="body2" gutterBottom>
              +1 232 3235 324
            </Typography>
            <Typography variant="body2">Email</Typography>
            <Typography variant="body2" gutterBottom>
              youremail@domain.com
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactAbout;
