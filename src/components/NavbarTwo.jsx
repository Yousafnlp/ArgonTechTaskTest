import React from "react";
import { Box, IconButton, Menu, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
  


function NavbarTwo() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const nav_mob = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    // alignItems: 'center',
    // justifyContent: 'center'

  }


  const MenuItems = {
    
    fontSize: "13px",
    textAlign: "left", 
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
    fontFamily: " Poppins, sans-serif",
    paddingRight: '70px',
    paddingLeft: '5px',
    paddingTop: '3px',
    fontWeight: "500"
  }
  

  
  return (
  <>
  
      <Box sx={{ background: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Box
              component="img"
              alt="img"
              sx={{ height: 40 }}
              src={logo}
            ></Box>
          </Link>

          <IconButton
            color="black"
            aria-label="open mobile menu"
            edge="end"
            onClick={handleMenuClick}
            sx={{ display: { xs: "block"} }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>
      

      <Menu            

        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >

       <Box style={nav_mob}>
        <Link to="/search" style={MenuItems} >
                Search
              </Link>

              <Link href="/" style={MenuItems} >
                Products
              </Link>

              <Link href="/" style={MenuItems} >
                Products
              </Link>

              <Link href="/" style={MenuItems} >
                Products
              </Link>

              <Link href="/" style={MenuItems} >
                Products
              </Link>

              <Link href="/" style={MenuItems} >
                Products
              </Link>
              </Box> 
      </Menu>

      </>
        );
}

export default NavbarTwo;
