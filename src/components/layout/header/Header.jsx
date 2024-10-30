import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Tooltip
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";
import { useTokenStore } from "../../../store/authStore";
import DarkModeToggleButton from "./DarkModeToggleButton";
// import { styled } from '@mui/material/styles';
// import useDarkMode from 'use-dark-mode';

const Header = () => {
  const token2 = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  // let darkMode = useDarkMode()
  useEffect(() => {
    setToken();
    // console.log(token2, "token");
  }, [])
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check for token on mount
  // useEffect(() => {
  //   setIsLoggedIn(!!localStorage.getItem('token'));
  // }, [localStorage.getItem('token')]);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const logOutClick = () => {
    if (token2) { // Use isLoggedIn instead of token
      localStorage.removeItem("token");
      setToken();
      // setIsLoggedIn(false); // Update the isLoggedIn state
      navigate("/"); // Use useNavigate to redirect
      toast.success("Logout Successfully");
    }
  };

  // const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  //   width: 60,
  //   height: 34,
  //   padding: 7,
  //   '& .MuiSwitch-switchBase': {
  //     margin: 1,
  //     padding: 0,
  //     transform: 'translateX(6px)',
  //     '&.Mui-checked': {
  //       color: '#fff',
  //       transform: 'translateX(22px)',
  //       '& + .MuiSwitch-track': {
  //         backgroundColor: theme.palette.mode === 'dark' ? '#aab4be' : '#37474f',
  //         opacity: 1,
  //         border: 0,
  //       },
  //       '& .MuiSwitch-thumb:before': {
  //         content: "'🌙'", // Moon icon for dark mode
  //       },
  //     },
  //   },
  //   '& .MuiSwitch-thumb': {
  //     backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : '#fbc02d',
  //     width: 28,
  //     height: 28,
  //     borderRadius: 50,
  //     '&:before': {
  //       content: "'☀️'", // Sun icon for light mode
  //       position: 'absolute',
  //       width: '100%',
  //       height: '100%',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       fontSize: 18,
  //     },
  //   },
  //   '& .MuiSwitch-track': {
  //     borderRadius: 20 / 2,
  //     opacity: 1,
  //     backgroundColor: theme.palette.mode === 'dark' ? '#aab4be' : '#37474f',
  //   },
  // }));

  const drawerList = (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        paddingTop: "10px",
        paddingBottom: "10px",
        boxSizing: "border-box",
        overflowX: "hidden"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/productlist"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Products" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/create"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Create" />
          </Link>
        </ListItem>
        {token2 && (
          <ListItem>
            <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Profile" />
            </Link>
          </ListItem>
        )}
        <ListItem>
          {token2 ? (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <LogoutIcon primary="LogOut" onClick={logOutClick} />
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="LogIn" />
            </Link>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#5b636a" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            FrontEnd PathSala
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">About</Button>
            </Link>
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Create</Button>
            </Link>
            <Link
              to="/productlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">Product List</Button>
            </Link>
            {token2 && (
              <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">Profile</Button>
              </Link>
            )}
            {token2 ? (
              <Button color="inherit" onClick={logOutClick}>
                {/* LogOut */}
                <Tooltip title="Log Out">
                  <LogoutIcon />
                </Tooltip>
              </Button>
            ) : (
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">LogIn</Button>
              </Link>
            )}
          </Box>
          <DarkModeToggleButton />
          {/* Dark mode switch */}
          {/* <Box display="flex" alignItems="center">
            <Typography variant="body1" color={darkMode.value ? '#f5f5f5' : '#37474f'}>
              {darkMode.value ? 'Dark Mode' : 'Light Mode'}
            </Typography>
            <DarkModeSwitch
              checked={darkMode.value}
              onChange={darkMode.toggle}
              inputProps={{ 'aria-label': 'dark mode toggle' }}
            />
          </Box> */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: "100vw",
                  margin: 0,
                  padding: 0,
                  overflowX: "hidden"
                }
              }}
            >
              {drawerList}
            </Drawer>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            FrontEnd PathSala
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;