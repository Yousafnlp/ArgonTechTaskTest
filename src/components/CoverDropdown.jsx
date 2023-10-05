import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../assets/style.css"
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { Box, Divider } from '@mui/material';


const blueBtn = {
  color: '#0066b1'
}

const Accordion_tags = {
  fontWeight: "500",
}
// const accordionStyle = {
//   backgroundColor: '#f4f4f4',
//   position: 'absolute',
//   zIndex: '1',
//   // width: '100%',

// };

const accordionStyle = {
  backgroundColor: '#f4f4f4',
  position: 'absolute',
  zIndex: '1',
  width: '100%',

};



export default function CoverDropdown() {
  


  return (
<div className='drop_down'>
    <Box   mt={2}>

      <Accordion  style={accordionStyle} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={Accordion_tags}>Proof of Authenticity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box mb={2}>
            <Divider></Divider>
          </Box>
          <Typography style={Accordion_tags}>
            <div className="nest-flex">
              POA 3
              <LaunchOutlinedIcon style={blueBtn} />
            </div>
          </Typography>
          <Box my={2}>
            <Divider></Divider>
          </Box>
          <Typography style={Accordion_tags}>
            <div className="nest-flex">
              POA 3
              <LaunchOutlinedIcon style={blueBtn} />
            </div>
          </Typography>
          <Box my={2}>
            <Divider></Divider>
          </Box>
          <Typography style={Accordion_tags}>
            <div className="nest-flex">
              POA 3
              <LaunchOutlinedIcon style={blueBtn} />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box >
      </div>
  );
}
