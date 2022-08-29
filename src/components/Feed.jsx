import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCatergory, setSelectedCategory] = useState('')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCatergory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCatergory])

  return (
    <>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
            py: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCatergory={selectedCatergory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            variant='body2'
            sx={{ mt: 1.5, color: '#fff', display: { xs: 'none' } }}
          >
            Copyright 2022 Sandy
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' color='white' mb={2} fontWeight='bold'>
            {selectedCatergory}
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  )
}

export default Feed
