import React, { useEffect } from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import HotTubIcon from '@mui/icons-material/HotTub';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HeroImage from '../../img/hero.jpg';
import CardImage1 from '../../img/fitness1.jpg';
import CardImage2 from '../../img/fitness2.jpg';
import CardImage3 from '../../img/fitness3.jpg';
import about1 from '../../img/about1.jpg';
import about2 from '../../img/about2.jpg';
import Portfolio from './Portfolio';
import teamImage1 from '../../img/team1.jpg';
import teamImage2 from '../../img/team2.jpg';
import teamImage3 from '../../img/team3.jpg';
import teamImage4 from '../../img/team4.jpg';
import testimonialImage1 from '../../img/testimonial1.jpg';
import testimonialImage2 from '../../img/testimonial2.jpg';
import MyGoogleMap from './MyGoogleMap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import useDarkMode from 'use-dark-mode';



var cardItems = [
  {
      id: 1,
      title: "World class coaching",
      subtitle: "Aerobic",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: CardImage1
  },
  {
      id: 2,
      title: "Best body building techniques",
      subtitle: "Body Building",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: CardImage2,
  },
  {
      id: 3,
      title: "In-house expert trainer",
      subtitle: "Yoga",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: CardImage3
  },
  
]

var amenities = [
  {
    icon: <HotTubIcon />,
    title: 'Steam Bath',
    description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod'
  },
  {
    icon: <NetworkWifiIcon />,
    title: 'Wi-Fi',
    description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod'
  },
  {
    icon: <AcUnitIcon />,
    title: 'Air Conditioning',
    description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod'
  }
];

var teamMembers = [
  {
    id: 1,
    name: "James Rally",
    position: "CEO",
    image: teamImage1,
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
  },
  {
    id: 2,
    name: "Kristen Viller",
    position: "Trainer",
    image: teamImage2,
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Johanna Care",
    position: "Trainer",
    image: teamImage3,
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "Bruce Willamson",
    position: "Trainer",
    image: teamImage4,
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
  }
]

const classes = [
  {
    time: '10:00am - 12:00am',
    className: 'Rope Skipping',
    description: 'Indoor',
    price: '$25',
    frequency: 'Monthly',
  },
  {
    time: '12:00am - 2:00am',
    className: 'Intensity',
    description: 'BW Training',
    price: '$25',
    frequency: 'Monthly',
  },
  {
    time: '2:00am - 5:00am',
    className: 'Yoga',
    description: 'On the Beach',
    price: '$25',
    frequency: 'Monthly',
  },
];

const testimonials = [
  {
    id: 1,
    name: "Kristen Morres",
    title: "XL Director",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    image: testimonialImage2,
  },
  {
    id: 2,
    name: "James Vintel",
    title: "VNT Manager",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    image: testimonialImage1,
  }
]

// Styled components for the design
const QuoteBox = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(5),
  borderRadius: theme.spacing(1),
  backgroundColor: '#f9f9f9',
  maxWidth: '500px',
  boxShadow: theme.shadows[3],
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -15,
    left: '20%',
    borderWidth: '15px',
    borderStyle: 'solid',
    borderColor: '#f9f9f9 transparent transparent transparent',
  },
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  color: '#2979ff',
  fontSize: '2rem',
  marginRight: theme.spacing(1),
}));

const AuthorContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
});


const Home = () => {

  const darkMode = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
    })
  },[])

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.5,    // Trigger animation when 20% of the component is visible
  });

  return (
    <>
    {/*  hero section */}
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '83% 50%',  // Ensure centered on mobile
          minHeight: '100vh',  // Adjust min-height to ensure full coverage on smaller screens
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          marginBottom: '2rem',
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ padding: '2rem', flexDirection: 'row', height: '100vh' }}>
          <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              gutterBottom 
              style={{ fontSize: '4rem', fontWeight: 'bold', color: '#efb624' }}
              // data-aos="fade-right"
              // data-aos-duration="1000"
              // data-aos-delay="100"
            >
              ULTIMATE FITNESS
            </Typography>
          <Button variant="contained" sx={{
            fontSize: '1.5rem',
            color: '#fff',
            borderRadius: '50px',
            backgroundColor: 'transparent',
            border: '2px solid #fff',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          }}
            // data-aos="fade-left"
            // data-aos-duration="1000"
            // data-aos-delay="100"
          >
            Our Price
          </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: 'center' }}></Grid>
        </Grid>
      </div>

    {/* About section */}
    <div style={{ marginTop: '4rem', marginBottom: '4rem', backgroundColor: darkMode.value ? '#1a1919' : '#f5f5f5', padding: '2rem', borderRadius: '10px' }}>
      <Container maxWidth="lg">
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: 'center', padding: '2rem' }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode.value ? '#798189' : '#000' }}>
            Our Services
          </Typography>
          <Typography variant="body" gutterBottom style={{ fontSize: '20px', fontWeight: 'bold', color: '#798189', marginBottom: '20px' }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}  // Increase the spacing value
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: '20px' }}
        >
          
        {cardItems.map((cardItem, index) => (
          <Grid 
            className='card' 
            item 
            xs={12} 
            ms={4} 
            md={4} 
            key={index} 
            style={{
              gap: '20px',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={
              index === 0 ? '300' :
              index === 1 ? '600' :
              '900'
            }
            data-aos-easing="ease-in-out-sine"
            data-anchor-placement="top-center"
          >
            <Card sx={{ maxWidth: 345, borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', height: '430px', backgroundColor: darkMode.value ? '#1f2324' : '#f5f5f5' }}>
              <CardMedia
                sx={{ height: 200, objectFit: 'contain' }}
                image={cardItem.image}
                // title={cardItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '15px', color: darkMode.value ? '#fff' : '#000' }}>
                  {cardItem.subtitle}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#efb624' }}>
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify', lineHeight: '1.5rem', color: darkMode.value ? '#fff' : '#000' }}>
                  {cardItem.description}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">{cardItem.buttonText1}</Button>
                <Button size="small">{cardItem.buttonText2}</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
        </Grid>
      </Container>
    </div>

    {/* first grid */}
    <Container>
      <Grid
        container
        spacing={3}  // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '30px', marginBottom: '50px' }}
        data-aos="fade-right"
      >
          <Grid  className='card' item xs={12} ms={12} md={5}>
            <img src={about1} height="50%" width="90%" style={{borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}/>
          </Grid>
          <Grid  className='text-content' item xs={12} ms={12} md={7}>
            <Typography variant="h5" gutterBottom style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode.value ? '#fff' : '#000', padding: '10px' }}>
              About Us
            </Typography>
            <Typography gutterBottom variant="body" component="div" style={{ fontWeight: 'bold', color: darkMode.value ? '#798189' : '#798189', marginBottom: '20px', lineHeight: '1.5rem', padding: '10px' }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!
            </Typography>
          </Grid>
      </Grid>
    </Container>

    {/* second grid */}
    <Container>
      <Grid
        container
        spacing={3}  // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '30px', marginBottom: '50px' }}
        data-aos="fade-zoom-in"
      >  
          <Grid  className='text-content' item xs={12} ms={12} md={7}>
            <Typography variant="h5" gutterBottom style={{ fontSize: '2rem', fontWeight: 'bold', color: darkMode.value ? '#fff' : '#000', padding: '10px' }}>
              Professional Team
            </Typography>
            <Typography gutterBottom variant="body" component="div" style={{ fontWeight: 'bold', color: '#798189', marginBottom: '20px', lineHeight: '1.5rem', padding: '10px' }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!
            </Typography>
          </Grid>
          <Grid  className='card' item xs={12} ms={12} md={5}>
            <img src={about2} height="50%" width="90%" style={{borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}/>
          </Grid>
      </Grid>
    </Container>

    {/* ammenities */}
    <div style={{ backgroundColor: '#efb624', display: 'flex', alignItems: 'center', justifyContent: 'center',  minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="lg"> {/* Use maxWidth to prevent overflow */}
        <Grid sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 'bold', color: '#000', padding: '10px' }}>
            Amenities
          </Typography>
          <Typography gutterBottom variant="body1" component="div" sx={{ color: '#000', marginBottom: '20px', lineHeight: '1.5rem', padding: '10px', fontSize: { xs: '0.9rem', md: '1rem' } }}>
            There are many variations of passages of Lorem Ipsum available, but the majority
          </Typography>
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: '30px', marginBottom: '50px' }}
        >
          {amenities.map((amenity, index) => (
            <Grid item lg={4} md={4} xs={12} sm={12} key={index} data-aos={index % 2  === 0 ? 'fade-up' : 'fade-down'}>
              <Box sx={{
                  width: '250px', // Make the box responsive
                  height: 'auto', // Allow height to adjust based on content
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '20px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ color: '#F6A623' }}>
                    {React.cloneElement(amenity.icon, { sx: { fontSize: '60px' } })}
                  </Box>
                </Box>
                <Typography variant="h5" gutterBottom sx={{ color: '#212121', marginBottom: '20px', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  {amenity.title}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: '#757575', textAlign: 'center', lineHeight: '1.5rem', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  {amenity.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

    {/* portfolio */}
    <Portfolio />

    {/* offer section */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#FFD700',
        // width: '100%',
        height: '100px',
      }}
    >
      <Grid container item md={6} lg={6} xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          OFFER
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <Typography variant="body1">
            50% off on Annual subscription.. grab the deal before it go!
          </Typography>
        </Box>
      </Grid>
        <Button variant="outlined" sx={{ marginLeft: 2, color: '#000', borderRadius: '50px', border: '1 px solid #000', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>
          Subscribe
        </Button>
    </Box>

    {/* team section */}
    <Container>
      <Typography gutterBottom variant="h3" component="div" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
        Our Team
      </Typography>
      <Typography gutterBottom variant="p" component="div" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center', fontWeight: 'semibold' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Typography>
      <Grid
        container
        spacing={1}  // Increase the spacing value
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '20px', marginBottom: '50px' }}
      >
        {teamMembers.map((teamMember, id) => (
          <Grid 
            className='card'
            item 
            xs={12} 
            ms={6} 
            md={3} 
            key={teamMember.id} 
          data-aos={
            id % 2 === 0 ? 'fade-up' : 'fade-down'
          }
          data-aos-duration="2000" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom"
          >
            <Paper elevation={3} style={{  borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
            <Card   sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 270, width: 270, objectFit: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}
                image={teamMember.image}
                title={teamMember.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontWeight: 'bold', padding:'0' }}>
                  {teamMember.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', color: '#e68b0de8' }}>
                  {teamMember.position}
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item>
                <IconButton href={teamMember.facebook} target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
                  <Facebook />
                </IconButton>
                <IconButton href={teamMember.twitter} target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
                  <Twitter />
                </IconButton>
                <IconButton href={teamMember.instagram} target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
                  <Instagram />
                </IconButton>
              </Grid>
              </CardActions>
            </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* price and schedule */}
    <Container style={{ marginTop: '70px', marginBottom: '50px' }}>
      <Grid>
        <Typography variant="h3" component="div" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
          Price & Schedule
        </Typography>
        <Typography variant="p" component="div" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center', fontWeight: 'semibold' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell  style={{ color: darkMode.value ? '#fff' : '#000', fontSize: '20px' }}>Time</TableCell>
              <TableCell  style={{ color: darkMode.value ? '#fff' : '#000', fontSize: '20px' }}>Class</TableCell>
              <TableCell  style={{ color: darkMode.value ? '#fff' : '#000', fontSize: '20px' }}>Price</TableCell>
              <TableCell  style={{ color: darkMode.value ? '#fff' : '#000', fontSize: '20px' }}>Join Now</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classes.map((row) => (
              <TableRow 
                key={row.className} 
                style={{ padding: '20px' }} 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-out-sine"   // Smoother easing
                data-aos-duration="800"              // Slower animation
                data-aos-delay="500"                 // Shorter delay for faster response
                data-aos-offset="100"                 // Trigger animation slightly earlier
                data-aos-anchor-placement="center-bottom" // Trigger animation based on element’s position
              >
                <TableCell component="th" scope="row" style={{ color: darkMode.value ? '#fff' : '#000' }}>
                  {row.time}
                </TableCell>
                <TableCell style={{ color: darkMode.value ? '#fff' : '#000' }}>
                  <strong>{row.className}</strong>
                  <br />
                  {row.description}
                </TableCell>
                <TableCell style={{ color: darkMode.value ? '#fff' : '#000' }}>
                  <strong>{row.price}</strong>
                  <br />
                  {row.frequency}
                </TableCell>
                <TableCell>
                  <Button variant="contained" style={{ backgroundColor: '#F6A623', color: '#fff', borderRadius: '20px', padding: '10px 20px', fontSize: '16px' }}>
                    Join Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

    {/* happy clients */}
    <Grid container spacing={3} style={{ marginTop: '50px', marginBottom: '50px', padding: '20px', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#232323', color: '#fff' }} ref={ref}>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Typography variant="h3" align="center">
            {inView ? <CountUp end={45} duration={2} /> : 0}
          </Typography>
          <Typography variant="body2" align="center">
            TRAINER
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Typography variant="h3" align="center">
            {inView ? <CountUp end={114} duration={2} /> : 0}
          </Typography>
          <Typography variant="body2" align="center">
            EQUIPMENTS
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Typography variant="h3" align="center">
            {inView ? <CountUp end={245} duration={2} /> : 0 }
          </Typography>
          <Typography variant="body2" align="center">
            CUSTOMERS
          </Typography>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Typography variant="h3" align="center">
            {inView ? <CountUp end={2} duration={2} /> : 0}
          </Typography>
          <Typography variant="body2" align="center">
            CAFETERIA
          </Typography>
        </Grid>
    </Grid>

    {/* testimonials */}
    <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
      <Grid style={{ marginBottom: '50px' }}>
        <Typography variant="h3" component="div" style={{ marginTop: '50px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          Testimonials
        </Typography>
        <Typography variant="p" component="div" style={{ marginTop: '50px', marginBottom: '30px', textAlign: 'center', fontWeight: 'semibold' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        {
          testimonials.map((testimonial, i)=> {
            return (
              <Grid item xs={12} md={6} sm={12} key={i}>
                <QuoteBox elevation={3}>
                  <Typography variant="h6" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                    <QuoteIcon style={{
                        transform: 'scaleX(-1) rotate(0deg)', // Combine transformations
                        marginRight: '8px',
                        marginTop: '-80px', // Adjust this value to control the height
                      }} 
                    />
                    {testimonial.quote}
                  </Typography>
                </QuoteBox>
                <AuthorContainer>
                  <Avatar
                    alt="Kristen Morres"
                    src={testimonial.image} // Replace with the actual path to the image
                    style={{ width: 50, height: 50, marginRight: '8px' }}
                  />
                  <div>
                    <Typography variant="subtitle1" component="div">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.title}
                    </Typography>
                  </div>
                </AuthorContainer>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>


    {/* contact us */}
    <Container style={{ marginTop: '70px', marginBottom: '50px' }}>
      <Box
        sx={{
          p: 4,
          backgroundColor: darkMode.value ? '#424242' : '#f5f5f5',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={2} style={{ marginBottom: '30px', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom style={{ color: darkMode.value ? '#ffffff' : '#333' }}>
            Let us know
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: darkMode.value ? '#cfcfcf' : '#555' }}>
            There are many variations of passages of Lorem Ipsum available, but the majority
          </Typography>
        </Grid>

        <Grid
          container
          style={{ 
            marginBottom: '30px', 
            textAlign: 'center', 
            width: '80%', 
            display: 'flex', 
            justifyContent: 'center', 
            margin: 'auto' 
          }}
          justifyContent="center"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="800"
          data-aos-delay="400"
          data-aos-offset="100"
          data-aos-anchor-placement="center-bottom"
        >
          <form style={{ width: '80%' }}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: darkMode.value ? '#bdbdbd' : '#000' }
              }}
              InputProps={{
                style: {
                  color: darkMode.value ? '#e0e0e0' : '#000',
                  backgroundColor: darkMode.value ? '#616161' : '#fff',
                },
              }}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: darkMode.value ? '#bdbdbd' : '#000' }
              }}
              InputProps={{
                style: {
                  color: darkMode.value ? '#e0e0e0' : '#000',
                  backgroundColor: darkMode.value ? '#616161' : '#fff',
                },
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={10}
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: darkMode.value ? '#bdbdbd' : '#000' }
              }}
              InputProps={{
                style: {
                  color: darkMode.value ? '#e0e0e0' : '#000',
                  backgroundColor: darkMode.value ? '#616161' : '#fff',
                },
              }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: darkMode.value ? '#ff8c00' : '#F6A623',
                color: '#fff',
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: '16px',
                marginTop: '20px',
              }}
            >
              Send Your Message
            </Button>
          </form>
        </Grid>
      </Box>
    </Container>

    {/* google map */}
    <Container style={{ marginTop: '70px', marginBottom: '50px' }}>
      <MyGoogleMap />
    </Container>


    
    </>
    
  )
}

export default Home