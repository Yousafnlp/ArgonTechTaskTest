import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import cover from "../assets/covercar.png"
import EditLocationIcon from '@mui/icons-material/EditLocation';
import "../assets/style.css"
import { Avatar, Box } from '@mui/material';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import CoverDropdown from './CoverDropdown';
import IconButton from './Ibutton';

function Cover() {

    const imgStyle = {
        position: 'relative',
        width: '100%',
        height: 'auto',
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
    };

    const title = {
        fontSize: '13px',
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '-8px',
    };

    const title2 = {
        fontSize: '15px',
        fontWeight: 'bold',
    };

    const tag_line = {
        fontSize: '13px'

    }


    const tag_line2 = {
        fontSize: '14px'

    }


    const para = {
        lineHeight: '25px'
    }


    const blueBtn = {
        color: '#0066b1'
    }

    const locBtn = {
        backgroundColor: '#f4f4f4',
        borderRadius: '2px'
    }

    const av_lg ={
        width: '49px',
        height: '49px'
    }

    

    
    return (
        <>
            <div >

                <Container >

                    <Grid container  mt={5} >
                        <Grid xs={12} sm={12} md={12} xl={6} lg={6}>
                            <div className='p-rel'>
                                <img src={cover} fullWidth label="fullWidth" id="fullWidth" alt="cover-car" style={imgStyle} />
                                <Box variant="contained" style={buttonStyle}>
                                   <IconButton/>
                                </Box>
                            </div>

                        </Grid>

                        <Grid pt={0} xs={12} sm={12} md={12}  xl={6} lg={6}>
                            <Box >
                                
                                                            <div className="res-padding">
                            <div className='dis-flex' >
                                <div>
                                    <Avatar style={av_lg} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                                </div>

                                <div >
                                    <Box ml={1}>
                                        <Typography style={title} variant="body2"  >
                                            Jacob & co
                                        </Typography>
                                        <Typography style={tag_line} mb={0} variant="caption" gutterBottom>
                                            Creator
                                        </Typography>
                                    </Box>

                                </div>
                            </div>

                            <Typography variant="h5" my={3} gutterBottom>
                                LUXURY STAINLESS WATCH
                            </Typography>


                            <Typography variant="body2" mt={4} pt={1} mb={4} style={para} gutterBottom>
                                It is a long established fact that a reader will be distracted by the readable content, It is a long established fact that a reader will be distracted by the readable content, of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </Typography>
                            <Box mb={1}>
                                <Typography style={tag_line2} variant="caption" gutterBottom>
                                    Created by
                                </Typography>

                            </Box>
                            <div className="nest-flex">
                                {/* <Box ml={1}> */}
                                <Typography style={title2} variant="body2"  >
                                    <div className="dis-flex">
                                        <Box mr={1}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </Box>
                                        Jacob & co
                                        <Box ml={1}>
                                        <LaunchOutlinedIcon  style={blueBtn} />
                                        </Box>
                                    </div>
                                </Typography>

                                {/* </Box> */}

                                <Button variant="" style={locBtn}>
                                    <EditLocationIcon /> View Map
                                </Button>
                            </div>

                            <CoverDropdown />
                            </div>
                            </Box>

                        </Grid>

                    </Grid>
                </Container>
            </div>
        </>
    );

}

export default Cover
