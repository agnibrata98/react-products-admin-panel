import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@mui/material";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from "@mui/icons-material/Language";
import aboutImg from "../../img/aboutUs.jpg";
import aboutHeroImg from "../../img/Yoga-Quotes-Header.jpg";
import CardImage1 from "../../img/cardBlog1.jpg";
import CardImage2 from "../../img/cardBlog2.jpg";
import CardImage3 from "../../img/cardBlog3.jpg";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import useDarkMode from "use-dark-mode";
import ContactAbout from "./ContactAbout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GeoLocationMap from "./GeoLocationMap";

const services = [
  {
    id: 1,
    title: "World class coaching",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: ContentPasteOffIcon
  },
  {
    id: 2,
    title: "Best body building techniques",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: MobileFriendlyIcon
  },
  {
    id: 3,
    title: "In-house expert trainer",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: AppleIcon
  },
  {
    id: 4,
    title: "Steam Bath",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: LanguageIcon
  },
  {
    id: 5,
    title: "Wi-Fi",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: LanguageIcon
  },
  {
    id: 6,
    title: "Air Conditioning",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    icon: LanguageIcon
  }
];

var cardItems = [
  {
    id: 1,
    title: " “Yoga is a light, which once lit will never dim. ",
    date: "April 25, 2019",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: CardImage1
  },
  {
    id: 2,
    title: "“The energy of the human spirit is the most vivid.”",
    date: "April 25, 2019",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: CardImage2
  },
  {
    id: 3,
    title: "“Move your joints every day. You have to find your own tricks.”",
    date: "April 25, 2019",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: CardImage3
  }
];

const About = () => {
  const darkMode = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
    })
  },[])


  return (
    <div>
      {/* hero section */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "white",
          textAlign: "center",
          backgroundImage: `url(${aboutHeroImg})`, // Use the image here
          backgroundSize: "cover", // Adjusts the image to cover the entire box
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          overflow: "hidden"
        }}
      >
        {/* Background Shapes */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${aboutHeroImg})`, // Optional overlay gradients here
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // opacity: 0.4 // Adjust opacity if you want to blend shapes with background
          }}
        />

        {/* Text Content */}
        <Typography variant="h3" fontWeight="bold" style={{ color: "#000" }} data-aos="fade-up">
          We Care About Your Health
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: "600px", color: '#000', fontSize: "18px" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos
          magnam maxime voluptates libero, nobis impedit aut corrupti sunt
          possimus.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            padding: "10px 20px",
            backgroundColor: "#efb624",
            borderRadius: "50px",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#000", color: "#fff" }
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Our Services
        </Button>
      </Box>

      {/* About Us Section */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" mt={4}>
          About Us
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography variant="body1" sx={{ mt: 2, color: darkMode.value ? '#798189' : '#000' }}>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
              <br /> <br />
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <img
              src={aboutImg}
              alt="aboutUs"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography variant="body1" mt={2} sx={{ color: darkMode.value ? '#798189' : '#000' }}>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
              <br />
              <br />
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* services section */}
      <Container style={{ marginTop: "50px" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mt={2}
          style={{ textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        >
          {services.map(service => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                key={service.id || service.name}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-out-sine"   // Smoother easing
                data-aos-duration="800"              // Slower animation
                data-aos-delay="300"                 // Shorter delay for faster response
                data-aos-offset="100"                 // Trigger animation slightly earlier
                data-aos-anchor-placement="center-bottom" // Trigger animation based on element’s position
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 20px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: darkMode.value ? "#e0e0e0" : "#fff",
                    maxWidth: "500px",
                    "&:hover": {
                      boxShadow: darkMode.value
                        ? "0px 8px 20px rgba(255, 255, 255, 0.2)" // Slightly stronger, lighter shadow on hover in dark mode
                        : "0px 8px 20px rgba(0, 0, 0, 0.3)", // Darker shadow on hover in light mode
                    },
                    transition: "box-shadow 0.3s ease"
                  }}
                >
                  {/* Icon */}
                  {service.icon &&
                    <service.icon
                      style={{
                        fontSize: "3rem",
                        color: darkMode.value ? "#798189" : "#efb624",
                        marginRight: "1rem"
                      }}
                    />}

                  {/* Text Content */}
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem"
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="semibold"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontSize: "1rem" }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* portfolio section */}
      <Projects />

      {/* testimonials section */}
      <Testimonial />

      {/* blog section */}
      <div
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
          backgroundColor: darkMode.value ? "#1a1919" : "#f5f5f5",
          padding: "2rem",
          borderRadius: "10px"
        }}
      >
        <Container maxWidth="lg">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: darkMode.value ? "#798189" : "#000"
              }}
            >
              Blog Posts
            </Typography>
          </Grid>
          <Grid
            container
            spacing={1} // Increase the spacing value
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "20px" }}
          >
            {cardItems.map((cardItem, index) =>
              <Grid
                className="card"
                item
                xs={12}
                ms={4}
                md={4}
                key={index}
                style={{
                  gap: "20px"
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={
                  index === 0 ? "300" : index === 1 ? "600" : "900"
                }
                data-aos-easing="ease-in-out-sine"
                data-anchor-placement="top-center"
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "450px",
                    backgroundColor: darkMode.value ? "#1f2324" : "#f5f5f5"
                  }}
                >
                  <CardMedia
                    sx={{ height: 200, objectFit: "contain" }}
                    image={cardItem.image}
                    // title={cardItem.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        fontSize: "1.5rem",
                        // fontWeight: "bold",
                        color: "#000",
                        fontFamily: "Roboto",
                        fontWeight: "100"
                      }}
                    >
                      {cardItem.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        fontSize: "10px",
                        color: darkMode.value ? "#fff" : "#000",
                        fontWeight: "100"
                      }}
                    >
                      {cardItem.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        textAlign: "justify",
                        lineHeight: "1.5rem",
                        color: darkMode.value ? "#fff" : "#000"
                      }}
                    >
                      {cardItem.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: "16px"
                    }}
                  >
                    <a
                      href="#"
                      style={{ color: "#000", textDecoration: "none" }}
                    >
                      Read More
                    </a>
                    {/* <Button size="small">{cardItem.buttonText2}</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>

      {/* map section */}
      <Container style={{ marginTop: "4rem", marginBottom: "4rem", borderRadius: "10px" }}>
        <GeoLocationMap />  
      </Container>

      {/* contact section */}
      <Container>
        <ContactAbout />
      </Container>
    </div>
  );
};

export default About;
