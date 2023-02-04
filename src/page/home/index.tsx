import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import SuggestBox from '../../components/suggestionBox'

function Home() {
  return (
    <Box>
      <HomeSlider/>

      <SuggestBox/>
    </Box>
  )
}

export default Home