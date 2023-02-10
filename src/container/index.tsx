import React from 'react'
import children from '../Types/common/children'
import {Box, Container, useTheme} from "@mui/material"
import Header from '../components/common/header';
import Footer from '../components/common/footer';


function Content(props:children) {
  const theme = useTheme();


  
  return (
    <Box>
    <Container maxWidth={"xl"} dir={"rtl"} sx={{backgroundColor:theme.palette.grey[100], height:"100vh", overflow:"auto"}}>
        <Header/>
        <Box dir={"rtl"} sx={{
        width:"100%", height:"max-content",
        paddingTop:"10rem", 
        [theme.breakpoints.down("sm")]:{paddingTop:"8rem"} ,
        zIndex:"1"
        }} >
         
          {props.children}
          <Footer/>
        </Box>
    </Container>
    </Box>
  )
}

export default Content;