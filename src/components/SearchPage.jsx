import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, Link, Typography } from '@mui/material';

function SearchPage() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const searchBtn = {

    border: '1px solid black',
    borderRadius: '0px',
    color: '#000000'
};

return (


    <Container>
        <Box mt={15}>
            <Typography textAlign={'center'} variant='h4'>
                    SEARCH YOUR NFT HISTORY
            </Typography>
        </Box>
        <Box display={'flex'} mt={5}>
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
          startAdornment: (
              <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
    }}
    value={searchText}
    onChange={handleSearch}
    />
    <Button style={searchBtn}>Outlined</Button>
            </Box>
            <Typography mt={2} textAlign={'center'} fontSize={12}>
                By initiating authentication, you declare that you accept or  &nbsp;
                <Link href="#" fontSize={12}>logal Notice</Link>  &nbsp; and &nbsp;
                <Link href="#" fontSize={12}>Privicy Policy</Link>
            </Typography>
        </Container>


  );
}

export default SearchPage;
