import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        backgroundColor: '#000',
        position: 'sticky',
        top: '0',
        justifyContent: 'space-between',
      }}
    >
      <Link to='/' sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant='h5'
          sx={{ color: '#fc1503', fontWeight: '400', letterSpacing: '2px' }}
        >
          SANDY
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
