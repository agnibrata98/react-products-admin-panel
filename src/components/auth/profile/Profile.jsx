import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Avatar, Typography, Skeleton, AvatarGroup } from '@mui/material';
// import axiosInstance, { profile_pic } from '../../../helper/Helper';
import toast from 'react-hot-toast';
import '../../../../src/App.css';
import useDarkMode from 'use-dark-mode';
import { endPoints } from '../../../axios/endpoints/endpoints';
import axiosInstance, { profile_pic } from '../../../axios/helper/Helper';

const Profile = () => {
  let [user, setUser] = useState({}); // Initialize user as null to check if data is loaded
  let [loading, setLoading] = useState(true); // Set loading state
  let darkMode = useDarkMode()

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axiosInstance.get(endPoints.auth.profileDetails);
        setUser(res.data.data);
        setLoading(false); // Set loading to false once data is fetched
        toast.success(res.data.message);
      } catch (err) {
        console.log(err);
        setLoading(false); // Even on error, stop loading
      }
    };
    fetchUserDetails();
  }, []);


 
  return (
    <Container maxWidth="md" sx={{ height: '100vh' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"  // Center the card vertically
        style={{ height: '100%' }}  // Ensure the Grid container takes up the full height
      >
        <Card
          sx={{
            maxWidth: 400,
            padding: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            textAlign: 'center',
            backgroundColor: darkMode.value ? '#333' : '#fff',
          }}
        >
         {/* <img src={profile_pic(user.profile_picture)}/> */}
          <Avatar
            src={profile_pic(user.profile_pic) || '/default-avatar.png'} // Show default avatar if user data is unavailable
            alt={loading ? 'Loading...' : `${user?.first_name} ${user?.last_name}`} // Corrected template literal
            sx={{
              width: 100,
              height: 100,
              margin: '0 auto 16px auto',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />

            {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"}}>
           
              <Avatar alt="Remy Sharp" src={profile_pic(user.profile_pic)} />

            </div> */}
          <CardContent>
          
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ fontWeight: 'bold', color: darkMode.value ? '#fff' : '#333' }}
            >
              {loading ? <Skeleton width={200} /> : `${user.first_name} ${user.last_name}`} 
            </Typography>
            <Typography
              variant="body1"
              // color="text.secondary"
              sx={{ marginBottom: '8px', fontStyle: 'italic', color: darkMode.value ? '#fff' : '#333' }}
            >
              {loading ? <Skeleton width={250} /> : `Email: ${user.email}`} 
            </Typography>
            <Typography
              variant="body1"
              // color="text.secondary"
              sx={{ marginBottom: '16px', fontStyle: 'italic', color: darkMode.value ? '#fff' : '#333' }}
            >
              {loading ? <Skeleton width={150} /> : `Role: ${user.role_data?.roleDisplayName || 'N/A'}`} 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Profile;
