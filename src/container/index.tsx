import React, {useEffect, useState} from 'react'
import children from '../Types/common/children'
import { useDispatch, useSelector} from 'react-redux';
import { getLanguagePakage, setLanguagePakage } from '../utils/functions';
import { initialLang } from '../constant';
import {Box, Container, useTheme} from "@mui/material"
import Header from '../components/common/header';



function Content(props:children) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialLang)
  const languagePakage = getLanguagePakage(useSelector);
  useEffect(() => {
    setLanguagePakage("fa", dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setState(languagePakage.lang)
  }, [languagePakage])
  
  return (
    <Container dir={state?.diraction} sx={{backgroundColor:theme.palette.grey[500], height:"100vh", paddingTop:"100px"}}>
        <Header/>
        <Box dir={state?.diraction} sx={{width:"100%", height:"50vh", backgroundColor:"wheat"}}>
          {props.children}
        </Box>
    </Container>
  )
}

export default Content;