import { Box, Link, Typography } from '@mui/material'
import React from 'react'

function Tagline() {

    const tg_bg = {
        backgroundColor: '#e6f0f7',
        textAlign: 'center',
        padding: '5px'
    }

  
    
  return (
    <div>


<Box mt={1} style={tg_bg}>
    <Typography  fontSize={13} variant='body'>
        The product no longer exist on 11/11/21 and it was made invalid by  
    </Typography>&nbsp;
    <Link href="#" fontSize={13}>username123</Link>
    </Box>
    </div>
  )
}

export default Tagline
