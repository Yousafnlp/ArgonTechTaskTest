import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../assets/style.css"
import { Avatar, Box, Container, Divider } from '@mui/material';

import Grid from '@mui/material/Grid';

function FirstSection() {



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

    const boxes = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0066b1',
        flexDirection: 'column',
        height: '120px',
        width: '160px'
        // marginLeft: '5px'
    }

    const boxes2 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        height: '120px',
        width: '160px'
    }

    const acd_boxes = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const Accordion_tags = {
        fontWeight: "500",
    }

    return (
        <div>

            <Container>


                <Box mt={4} >
                    <Accordion style={acod} >
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={Accordion_tags}>Attribute</Typography>
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
                                <Box xs={2} m={1} style={boxes}>


                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Color
                                    </Typography>


                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        Amber
                                    </Typography>


                                </Box>


                                <Box xs={2} m={1} style={boxes2}>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>

                                </Box>

                                <Box xs={2} m={1} style={boxes2}>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Nose
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        Rose Lychee...
                                    </Typography>

                                </Box>

                                <Box xs={2} m={1} style={boxes2}>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>

                                </Box>

                                <Box xs={2} m={1} style={boxes2}>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>

                                </Box>

                                <Box xs={2} m={1} style={boxes2}>

                                    <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                        Serial ID
                                    </Typography>
                                    <Typography style={tag_line2} mb={0} variant="caption" gutterBottom>
                                        GULHB130
                                    </Typography>

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


                            {/* <Stack spacing={2}> */}
                            {/* </Stack> */}
                        </AccordionDetails>
                    </Accordion>
                </Box >




            </Container>
        </div>
    )
}

export default FirstSection
