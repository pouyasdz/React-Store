import React from 'react'
import children from '../Types/common/children'
import {Box, Container, useTheme} from "@mui/material"
import Header from '../components/common/header';

function Content(props:children) {
  const theme = useTheme();


  
  return (
    <Box>
    <Container maxWidth={"xl"} dir={"rtl"} sx={{backgroundColor:theme.palette.grey[100], height:"100vh", overflow:"auto"}}>
        <Header/>
        <Box dir={"rtl"} sx={{width:"100%", height:"50vh", backgroundColor:theme.palette.grey[200],marginTop:"10rem", [theme.breakpoints.down("sm")]:{marginTop:"8rem"}}}>
          {props.children}
        </Box>
    </Container>
    </Box>
  )
}

export default Content;