import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../assets/style.css"
import { Avatar, Box, Button, Container, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function ThirdSection() {


    const acod = {
        backgroundColor: '#f4f4f4',
    }

    const acd_btn = {
        color: '#000000',
        borderColor: '#000000',
        border: "1px solid black",
        padding: '3px 7px',
        fontSize: '14px'
    }


    const accd_title2 = {
        fontSize: '14px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center'
    }



    const rows = [
        {
            event: "Burn",
            price: 555.3,
            to: "0x5dd...4f12",
            date: "10: 10 PM 17 july 2023"
        }
    ];


    const title2 = {
        fontSize: '15px',
        fontWeight: 'bold',
    };


    const blueBtn = {
        color: '#0066b1'
    }

    const av_sm = {
        height: '33px',
        width: '33px',

    }

    

    const icon1 ={
        backgroundColor: '#F4F4F4',
        fontSize: '30px',
        padding: '5px',
        borderRadius: '50%',
        marginRight: '8px'
    }



    const responsiveness = {
        overflowX: 'auto',
        maxWidth: '100%' 
    }

    const table_date = {
       minWidth: '210px'
    }


    const repeatedData = [];
  console.log(repeatedData)
    for (let i = 0; i < 10; i++) {
      repeatedData.push(
        rows.map((row, index) => (
          <React.Fragment >
            <TableRow>
              <TableCell component="th" scope="row">
              <div className="dis-flex">

              <MenuOutlinedIcon style={icon1}/>
                {row.event}
                </div>
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell style={table_date} align="center">
                <div className="nest-flex-2">
                  <Typography style={title2} variant="body2">
                    <div className="dis-flex">
                      <Box mr={1}>
                        <Avatar alt="Remy Sharp" style={av_sm} src="/static/images/avatar/1.jpg" />
                      </Box>
                      Jacob & co
                      <Box ml={1}>
                        <LaunchOutlinedIcon style={blueBtn} />
                      </Box>
                    </div>
                  </Typography>
                </div>
              </TableCell>
              <TableCell align="center">{row.to}</TableCell>
              <TableCell style={table_date}  align="center">{row.date}</TableCell>
            </TableRow>
          </React.Fragment>
        ))
      );
    }







    return (
       
      <div>
        <Container>
          <Box my={5}>
            <Typography mb={4} align='center' variant='h5'>
                Meta Data and Ownership
            </Typography>
            <Accordion style={acod}>
              <AccordionSummary p={2} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="body" mr={1} style={accd_title2}>
                  Filter by:
                </Typography>
                <Typography style={acd_btn}>
                  Select Items Type
                  <KeyboardArrowDownIcon />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer style={responsiveness} component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Event</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="center">From</TableCell>
                        <TableCell align="center">To</TableCell>
                        <TableCell align="center">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{repeatedData}</TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </div>
  
    )
}

export default ThirdSection






