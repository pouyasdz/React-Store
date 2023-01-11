import { Box } from '@mui/system'
import React from 'react'
import theme from '../../../theme'

function TopNavagationBar() {
  return (
    <Box sx={{[theme.breakpoints.up("sm")]:{display:"none"}}}>
        TopNavagationBar
    </Box>
  )
}

export default TopNavagationBar