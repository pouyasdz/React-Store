import { Box, Typography } from '@mui/material'
import React from 'react'
import { categoryComponents } from '../../Types/category'
import { Link } from 'react-router-dom';
import theme from '../../theme';

function BoxComponent(props:categoryComponents) {
  const {cover, name, path} = props;
  const mainPath = `category${path}`
  return (
    <div>
      <Link to={mainPath}>

    <Box 
    width={"100%"} height={"18vh"}
    sx={{
      backgroundImage:`url(${cover})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition: "center",
      backgroundSize:" cover",
      borderRadius:"15px"
    }}
    >
      <Box sx={{backgroundColor:"white"}} 
      m={"0 auto"} width={"150px"} 
      borderRadius={"0 0 5px 5px"}
      padding={"5px"}>
        <Typography
        textAlign={"center"}
        color={theme.palette.grey[600]}
        variant='h5' 
        fontFamily={"lalezar"}>
          {name}
          </Typography>
      </Box>
    </Box>
      </Link>

    </div>
  )
}

export default BoxComponent