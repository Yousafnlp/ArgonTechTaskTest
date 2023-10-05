import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const appbg = {
  backgroundColor: 'white'
}

const ToolbarStyle = {
  display: 'flex',
  justifyContent: "center",
  gap: '20px',
  alignItems: 'center'
}


const Menu = {
  display: 'flex',
  justifyContent: "center",
  gap: '15px',
  alignItems: 'center',
  paddingBottom: '10px',
  borderBottom: '1px solid',

}

const GlobeIcon = {
  fontSize: '18px',
  marginRight: '5px'
}


const MenuItems = {

  fontSize: "13px",
  cursor: "pointer",
  color: "black",
  textDecoration: "none",
  fontFamily: " Poppins, sans-serif",
  fontWeight: "500"
}

function TNavbar() {


  return (
    <>
      <Box  >
        <Box style={appbg} pt={4}>
          <Toolbar style={ToolbarStyle}>
            <Link to="/">
              <Box component="img" alt="img" sx={{ height: 50 }} src={logo} ></Box>
            </Link>

            <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
              <Box style={Menu}>
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

                <SearchIcon />
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Typography ml={3} fontSize={12}>
                    <PublicIcon style={GlobeIcon} />
                    Bmw in Your Countery
                  </Typography>
                </Box>

              </Box>

              <Typography fontSize={12} mt={1}>
                Sheer Driving Plesure
              </Typography>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </>
  );
}

export default TNavbar;
