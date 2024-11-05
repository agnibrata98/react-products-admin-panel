import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    Typography, 
    Grid, 
    Container, 
    Box,
    Divider, 
    colors
  } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

  var testimonial = [
    {
      name: 'John Smith',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere quisquam animi mollitia magnam beatae, quasi reprehenderit repellat provident eaque libero ducimus nemo distinctio dignissimos, deleniti tempora placeat quo repudiandae.'
    },
    {
      name: 'John Smith',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere quisquam animi mollitia magnam beatae, quasi reprehenderit repellat provident eaque libero ducimus nemo distinctio dignissimos, deleniti tempora placeat quo repudiandae.'
    },
    {
      name: 'John Smith',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere quisquam animi mollitia magnam beatae, quasi reprehenderit repellat provident eaque libero ducimus nemo distinctio dignissimos, deleniti tempora placeat quo repudiandae.'
    },
    
  ]

const Testimonial = () => {
  return (
    <Box sx={{ bgcolor: '#efb624', py: 10, maxWidth: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom color="white">
        What Client Are Sayings
      </Typography>
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
                <Box sx={{ bgcolor: '#efb624', p: 4, borderRadius: 2 }}>
                    <Slider {...settings} style={{ marginLeft: '20px', marginBottom: '50px', maxWidth: 'calc(100% - 40px)' }}>
                        {
                            testimonial.map((item, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <FormatQuoteIcon style={{ fontSize: '40px', color: '#fff', marginBottom: '10px' }} />
                                    </div>
                                    <Typography variant="body1" gutterBottom style={{ fontStyle: 'italic', textAlign: 'center', color: '#fff', marginBottom: '10px' }}>
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '10px' }}>
                                        {item.name}
                                    </Typography>
                                </div>
                            ))
                        }
                            
                    </Slider>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Testimonial