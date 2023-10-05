import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar, Box, Typography } from '@mui/material';

export default function IconButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const btnAvater = {
        width: '25px',
        height: '25px'
    }
    const titleBtn = {
        fontSize: '12px',
        fontWeight: 'bold',
    };

    const Ibtn_box ={
        padding: '0px',
        justifyContent: 'end'
    }

    const ibtn_color ={
        color: '#f4f4f4'
    }

    return (
        <div>
            <Button style={Ibtn_box}
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <InfoIcon style={ibtn_color}/>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Box px={2} onClick={handleClose}>
                    <Typography style={titleBtn} variant="body2"  >
                        <div className="dis-flex">
                            <Box mr={1}>
                                <Avatar alt="Remy Sharp" style={btnAvater} src="/static/images/avatar/1.jpg" />
                            </Box>
                            Jacob & co
                            <Box ml={1}>
                            </Box>
                        </div>
                    </Typography>

                    <Typography fontSize={11}  my={1}>image changed</Typography>
                    <Typography style={titleBtn}>Sat 20 Sep at 10:00 am</Typography>
                </Box>

            </Menu>
        </div>
    );
}
