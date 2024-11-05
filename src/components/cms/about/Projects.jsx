import React, { useEffect, useState } from 'react'
import {
    Grid,
    Typography,
    Button,
    Container,
    Box,
    Card,
    CardContent,
    CardMedia,
    Modal,
  } from "@mui/material";
import image1 from '../../img/project1.jpg';
import image2 from '../../img/project2.jpg';
import image3 from '../../img/project3.jpg';
import image4 from '../../img/project4.jpg';
import image5 from '../../img/project5.jpg';
import image6 from '../../img/project6.jpg';
import image7 from '../../img/project7.jpg';
import image8 from '../../img/project8.jpg';
import image9 from '../../img/project9.jpg';
import image10 from '../../img/project10.jpg';
import image11 from '../../img/projectimg11.jpg';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDarkMode from 'use-dark-mode';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"



  const images = [
    {
        id: 1,
        src: image9,
        category: "Body Building",
        // top: '0px',
        // left: '0px',
    },
    {
        id: 2,
        src: image2,
        category: "Body Building",
        // top: '0px',
        // left: '379.987px',
    },
    {
        id: 3,
        src: image3,
        category: "Body Building",
        // top: '0px',
        // left: '759.974px',
    },
    {
        id: 4,
        src: image4,
        category: "Body Building",
        // top: '379.987px',
        // left: '0px',
    },
    {
        id: 5,
        src: image5,
        category: "Yoga",
        // top: '548.975px',
        // left: '379.987px',
    },
    {
        id: 6,
        src: image3,
        category: "Yoga",
        // top: '257.325px',
        // left: '759.974px',
    },
    {
        id: 7,
        src: image7,
        category: "Aerobic",
        // top: '674.875px',
        // left: '0px',
    },
    {
        id: 8,
        src: image1,
        category: "Aerobic",
        // top: '806.3px',
        // left: '379.987px',
    },
    {
        id: 9,
        src: image6,
        category: "Aerobic",
        // top: '514.65px',
        // left: '759.974px',
    },
    {
        id: 10,
        src: image8,
        category: "Aerobic",
        // top: '932.2px',
        // left: '0px',
    },
    {
        id: 11,
        src: image10,
        category: "Aerobic",
        // top: '757.388px',
        // left: '759.974px',
    }
  ];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [fadeIn, setFadeIn] = useState(true);

    let darkMode = useDarkMode();

    useEffect(() => {
        AOS.init({
          duration: 1500,
          easing: 'ease-in-out',
          once: false,
        })
      },[])


    const filterImages = () => {
        if (selectedCategory === "All") {
                return images;
            } else {
                return images.filter((image) => image.category === selectedCategory);
            }
    }; 

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    };

    const handleCategoryChange = (category) => {
        setFadeIn(false); // Start with fade-out
        setSelectedCategory(category);
        setTimeout(() => {
            setFadeIn(true); // Fade-in after category is set
        }, 100); // Adjust the timing as necessary
    };
    
  return (
    <>
        <Container maxWidth="100%" style={{ backgroundColor: darkMode.value ? '#1a1919' : "#fff", padding: "20px, 0px", marginTop: "50px", marginBottom: "50px" }}>
            <Typography variant="h3" gutterBottom align="center" style={{ color: darkMode.value ? '#798189' : "#000"}}>
                Projects
            </Typography>
            <Typography variant="body2" gutterBottom align="center" style={{ color: "#858585" }}>
                At lorem ipsum available, but the majority have suffered alteration in
                some form by injected humour.
            </Typography>

            {/* button section */}
            <Box mt={2} mb={3} display="flex" justifyContent="center">
                <Button
                    variant={selectedCategory === "All" ? "contained" : "outlined"}
                    onClick={() => handleCategoryChange("All")}
                    sx={{
                    margin: 1,
                    fontSize: "13px",
                    backgroundColor: selectedCategory === "All" ? "#000" : "#fff", // black if selected, white otherwise
                    color: selectedCategory === "All" ? "#fff" : "#000", // White if selected, black otherwise
                    borderColor: "#000",
                    borderRadius: "50px",
                    '&:hover': {
                        backgroundColor: selectedCategory === "All" ? "#000" : "#1b1e24", // Darker green on hover if selected, light green otherwise
                        color: selectedCategory === "All" ? "#fff" : "#fff", // White if selected, black otherwise
                        borderColor: "#000",
                    },
                    }}
                >
                    All
                </Button>
                <Button
                    variant={selectedCategory === "Yoga" ? "contained" : "outlined"}
                    onClick={() => handleCategoryChange("Yoga")}
                    sx={{
                    margin: 1,
                    fontSize: "13px",
                    backgroundColor: selectedCategory === "Yoga" ? "#000" : "#fff", // black if selected, white otherwise
                    color: selectedCategory === "Yoga" ? "#fff" : "#000", // White if selected, black otherwise
                    borderColor: "#000",
                    borderRadius: "50px",
                    '&:hover': {
                        backgroundColor: selectedCategory === "Yoga" ? "#000" : "#1b1e24",
                        color: selectedCategory === "Yoga" ? "#fff" : "#fff",
                        borderColor: "#000",
                    },
                    }}
                >
                    Yoga
                </Button>
                <Button
                    variant={selectedCategory === "Body Building" ? "contained" : "outlined"}
                    onClick={() => handleCategoryChange("Body Building")}
                    sx={{
                    margin: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "13px",
                    backgroundColor: selectedCategory === "Body Building" ? "#000" : "#fff", // Green if selected, black otherwise
                    color: selectedCategory === "Body Building" ? "#fff" : "#000", // White if selected, green otherwise
                    borderColor: "#000",
                    borderRadius: "50px",
                    '&:hover': {
                        backgroundColor: selectedCategory === "Body Building" ? "#000" : "#1b1e24",
                        color: selectedCategory === "Body Building" ? "#fff" : "#fff",
                        borderColor: "#000",
                    },
                    }}
                >
                    Body Building
                </Button>
                <Button
                    variant={selectedCategory === "Aerobic" ? "contained" : "outlined"}
                    onClick={() => handleCategoryChange("Aerobic")}
                    sx={{
                    margin: 1,
                    fontSize: "13px",
                    backgroundColor: selectedCategory === "Aerobic" ? "#000" : "#fff", // black if selected, white otherwise
                    color: selectedCategory === "Aerobic" ? "#fff" : "#000", // White if selected, black otherwise
                    borderColor: "#000",
                    borderRadius: "50px",
                    '&:hover': {
                        backgroundColor: selectedCategory === "Aerobic" ? "#000" : "#1b1e24",
                        color: selectedCategory === "Aerobic" ? "#fff" : "#fff",
                        borderColor: "#000",
                    },
                    }}
                >
                    Aerobic
                </Button>
            </Box>

            <Container style={{ minHeight: '100vh' }} data-aos="fade-up">
            {/* grid section */}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 0: 1, 600: 2, 900: 3, 1200: 4}}
                >
                    <Masonry gutter='20px'>
                    {filterImages().map((image, index) => (
                        <Grid
                            item xs={12} sm={6} md={3}
                            key={index}
                            style={{
                                paddingBottom: "10px",
                                opacity: fadeIn ? 1 : 0, // Use opacity based on fadeIn state
                                transition: 'opacity 0.3s ease-in-out', // Smooth transition effect
                            }}
                        >
                            <Card
                                onClick={() => handleOpen(image)}
                                sx={{
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover .image': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    width="80%"
                                    image={image.src}
                                    alt={image.category}
                                    className="image"
                                    sx={{
                                        transition: 'transform 0.3s ease-in-out',
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                    </Masonry>
                </ResponsiveMasonry>
                


            {/* Modal for displaying the selected image */}
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box
                    sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    maxWidth: '600px',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    outline: 'none',
                    }}
                >
                    {selectedImage && (
                    <CardMedia
                        component="img"
                        image={selectedImage.src}
                        alt={selectedImage.category}
                        sx={{
                        width: '100%',
                        height: 'auto',
                        }}
                    />
                    )}
                </Box>
                </Modal>
            </Container>
        </Container>
    </>
  )
}

export default Projects



// import React, { useEffect, useState } from 'react'
// import {
//     Grid,
//     Typography,
//     Button,
//     Container,
//     Box,
//     Card,
//     CardContent,
//     CardMedia,
//     Modal,
//   } from "@mui/material";
// import image1 from '../../img/portfolio1.jpg';
// import image2 from '../../img/portfolio2.jpg';
// import image3 from '../../img/portfolio3.jpg';
// import image4 from '../../img/portfolio4.jpg';
// import image5 from '../../img/portfolio5.jpg';
// import image6 from '../../img/portfolio6.jpg';
// import image7 from '../../img/portfolio7.jpg';
// import image8 from '../../img/portfolio8.jpg';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import useDarkMode from 'use-dark-mode';



//   const images = [
//     {
//       src: image2,
//       category: "Body Building",
//     },
//     {
//       src: image3,
//       category: "Body Building",
//     },
//     {
//      src: image5,
//      category: "Body Building",
//     },
//     {
//       src: image4,
//       category: "Body Building",
//     },
//     {
//       src: image1,
//       category: "Yoga",
//     },
//     {
//       src: image6,
//       category: "Yoga",
//     },
//     {
//       src: image7,
//       category: "Aerobic",
//     },
//     {
//      src: image8,
//      category: "Aerobic",
//     }
//   ];

// const Projects = () => {
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [open, setOpen] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [fadeIn, setFadeIn] = useState(true);

//     let darkMode = useDarkMode();

//     useEffect(() => {
//         AOS.init({
//           duration: 1500,
//           easing: 'ease-in-out',
//           once: false,
//         })
//       },[])


//     const filterImages = () => {
//         if (selectedCategory === "All") {
//                 return images;
//             } else {
//                 return images.filter((image) => image.category === selectedCategory);
//             }
//     }; 

//     const handleOpen = (image) => {
//         setSelectedImage(image);
//         setOpen(true);
//     };
    
//     const handleClose = () => {
//     setOpen(false);
//     setSelectedImage(null);
//     };

//     const handleCategoryChange = (category) => {
//         setFadeIn(false); // Start with fade-out
//         setSelectedCategory(category);
//         setTimeout(() => {
//             setFadeIn(true); // Fade-in after category is set
//         }, 100); // Adjust the timing as necessary
//     };
    
//   return (
//     <>
//         <Container maxWidth="100%" style={{ backgroundColor: darkMode.value ? '#1a1919' : "#fff", padding: "20px, 0px", marginTop: "50px", marginBottom: "50px" }}>
//             <Typography variant="h3" gutterBottom align="center" style={{ color: darkMode.value ? '#798189' : "#000"}}>
//                 Portfolio
//             </Typography>
//             <Typography variant="body2" gutterBottom align="center" style={{ color: "#858585" }}>
//                 At lorem ipsum available, but the majority have suffered alteration in
//                 some form by injected humour.
//             </Typography>

//             {/* button section */}
//             <Box mt={2} display="flex" justifyContent="center">
//                 <Button
//                     variant={selectedCategory === "All" ? "contained" : "outlined"}
//                     onClick={() => handleCategoryChange("All")}
//                     sx={{
//                     margin: 1,
//                     fontSize: "13px",
//                     backgroundColor: selectedCategory === "All" ? "#000" : "#fff", // black if selected, white otherwise
//                     color: selectedCategory === "All" ? "#fff" : "#000", // White if selected, black otherwise
//                     borderColor: "#000",
//                     borderRadius: "50px",
//                     '&:hover': {
//                         backgroundColor: selectedCategory === "All" ? "#000" : "#1b1e24", // Darker green on hover if selected, light green otherwise
//                         color: selectedCategory === "All" ? "#fff" : "#fff", // White if selected, black otherwise
//                         borderColor: "#000",
//                     },
//                     }}
//                 >
//                     All
//                 </Button>
//                 <Button
//                     variant={selectedCategory === "Yoga" ? "contained" : "outlined"}
//                     onClick={() => handleCategoryChange("Yoga")}
//                     sx={{
//                     margin: 1,
//                     fontSize: "13px",
//                     backgroundColor: selectedCategory === "Yoga" ? "#000" : "#fff", // black if selected, white otherwise
//                     color: selectedCategory === "Yoga" ? "#fff" : "#000", // White if selected, black otherwise
//                     borderColor: "#000",
//                     borderRadius: "50px",
//                     '&:hover': {
//                         backgroundColor: selectedCategory === "Yoga" ? "#000" : "#1b1e24",
//                         color: selectedCategory === "Yoga" ? "#fff" : "#fff",
//                         borderColor: "#000",
//                     },
//                     }}
//                 >
//                     Yoga
//                 </Button>
//                 <Button
//                     variant={selectedCategory === "Body Building" ? "contained" : "outlined"}
//                     onClick={() => handleCategoryChange("Body Building")}
//                     sx={{
//                     margin: 1,
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     fontSize: "13px",
//                     backgroundColor: selectedCategory === "Body Building" ? "#000" : "#fff", // Green if selected, black otherwise
//                     color: selectedCategory === "Body Building" ? "#fff" : "#000", // White if selected, green otherwise
//                     borderColor: "#000",
//                     borderRadius: "50px",
//                     '&:hover': {
//                         backgroundColor: selectedCategory === "Body Building" ? "#000" : "#1b1e24",
//                         color: selectedCategory === "Body Building" ? "#fff" : "#fff",
//                         borderColor: "#000",
//                     },
//                     }}
//                 >
//                     Body Building
//                 </Button>
//                 <Button
//                     variant={selectedCategory === "Aerobic" ? "contained" : "outlined"}
//                     onClick={() => handleCategoryChange("Aerobic")}
//                     sx={{
//                     margin: 1,
//                     fontSize: "13px",
//                     backgroundColor: selectedCategory === "Aerobic" ? "#000" : "#fff", // black if selected, white otherwise
//                     color: selectedCategory === "Aerobic" ? "#fff" : "#000", // White if selected, black otherwise
//                     borderColor: "#000",
//                     borderRadius: "50px",
//                     '&:hover': {
//                         backgroundColor: selectedCategory === "Aerobic" ? "#000" : "#1b1e24",
//                         color: selectedCategory === "Aerobic" ? "#fff" : "#fff",
//                         borderColor: "#000",
//                     },
//                     }}
//                 >
//                     Aerobic
//                 </Button>
//             </Box>

//             <Container>
//             {/* grid section */}
//             <Grid container spacing={3} mt={2} data-aos="fade-up">
//                 {filterImages().map((image, index) => (
//                     <Grid
//                         item xs={12} sm={6} md={3}
//                         key={index}
//                         style={{
//                             paddingBottom: "10px",
//                             opacity: fadeIn ? 1 : 0, // Use opacity based on fadeIn state
//                             transition: 'opacity 0.3s ease-in-out', // Smooth transition effect
//                         }}
//                     >
//                         <Card
//                             onClick={() => handleOpen(image)}
//                             sx={{
//                                 cursor: 'pointer',
//                                 overflow: 'hidden',
//                                 transition: 'transform 0.3s ease-in-out',
//                                 '&:hover .image': {
//                                     transform: 'scale(1.1)',
//                                 },
//                             }}
//                         >
//                             <CardMedia
//                                 component="img"
//                                 height="100%"
//                                 width="80%"
//                                 image={image.src}
//                                 alt={image.category}
//                                 className="image"
//                                 sx={{
//                                     transition: 'transform 0.3s ease-in-out',
//                                 }}
//                             />
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>


//             {/* Modal for displaying the selected image */}
//                 <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//                 >
//                 <Box
//                     sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: '80%',
//                     maxWidth: '600px',
//                     bgcolor: 'background.paper',
//                     boxShadow: 24,
//                     p: 4,
//                     outline: 'none',
//                     }}
//                 >
//                     {selectedImage && (
//                     <CardMedia
//                         component="img"
//                         image={selectedImage.src}
//                         alt={selectedImage.category}
//                         sx={{
//                         width: '100%',
//                         height: 'auto',
//                         }}
//                     />
//                     )}
//                 </Box>
//                 </Modal>
//             </Container>
//         </Container>
//     </>
//   )
// }

// export default Projects