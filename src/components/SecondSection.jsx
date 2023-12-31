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
import Grid from '@mui/material/Grid';

function SecondSection() {



    const tag_line = {
        fontSize: '13px'
    }

    const tag_line2 = {
        fontSize: '14px',
        fontWeight: '600'
    }

    const acod = {
        backgroundColor: '#f4f4f4',
    }


    // const boxes = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#0066b1',
    //     flexDirection: 'column',
    //     height: '120px',
    //     width: '160px'
    //     // marginLeft: '5px'
    // }

    const acd_boxes = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const acd_btn ={
        color: '#000000',
        borderColor: '#000000',
        border: "1px solid black",
        padding: '5px 10px',
        fontSize: '14px'
    }

    return (
        <div>

            <Container>


                <Box mt={4} >
                    <Accordion style={acod} >
                        <AccordionSummary p={2}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            {/* <Button variant="outlined" style={acd_btn}>History 1</Button> */}
                            <Typography style={acd_btn}>Attribute
                            <KeyboardArrowDownIcon/>
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Box mb={1}>
                                <Divider m={3}></Divider>
                            </Box>
                            <Grid container spacing={2}>

                                <Grid item xs={4}>


                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Date
                                    </Typography>

                                    <Typography style={tag_line2} ml={3} mb={0} variant="caption" gutterBottom>
                                        TUE JUL 18 2023
                                    </Typography>


                                </Grid>
                                <Grid item xs={8}>


                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        <div className="dis-flex">

                                            Created by:
                                            <Box ml={2}>
                                                <Avatar sx={{ width: 29, height: 29 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </Box>

                                        </div>

                                    </Typography>


                                </Grid>
                            </Grid>




                            <Box style={acd_boxes} container m={1} spacing={4} >
                                <Box  m={1}  >

<div className='boxes_accodian1'>
                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Color
                                    </Typography>


                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        Amber
                                    </Typography>
                                    </div>

                                </Box>


                                <Box  m={1}  >
                                <div className='boxes_accodian'>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>
                                    </div>

                                </Box>

                                <Box  m={1}  >
                                <div className='boxes_accodian'>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Nose
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        Rose Lychee...
                                    </Typography>
                                    </div>

                                </Box>

                                <Box  m={1}  >
                                <div className='boxes_accodian'>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>
                                    </div>

                                </Box>

                                <Box  m={1}  >
                                <div className='boxes_accodian'>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>
                                    </div>

                                </Box>

                                <Box  m={1}  >
                                <div className='boxes_accodian'>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>
                                    </div>

                                </Box>


                                <Box mt={2}>

                                    <Stack >
                                        <Pagination
                                            count={5}
                                            variant="outlined"
                                            shape="rounded"
                                            sx={{
                                                '& .MuiPaginationItem-page.Mui-selected': {
                                                    color: '#000000',
                                                },
                                                '& .MuiPaginationItem-page:hover': {
                                                    color: '#000000',
                                                },
                                                borderRadius: '0px',
                                            }}
                                        />
                                    </Stack>
                                </Box>
                            </Box>


                        </AccordionDetails>
                    </Accordion>
                </Box >




            </Container>
        </div>
    )
}

export default SecondSection
