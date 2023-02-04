import React, {useEffect, useState} from 'react'
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import theme from '../../theme'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Service from "../../service/product";
import { Link } from 'react-router-dom';
// import "../../styles/swiper.css";

function SuggestBox() {
  const [state, setState] = useState<[any]>([{}]);
  const [viewPort, setViewPort] = useState<number | "auto" | undefined> ("auto");
  const service = Service.Application;
  useEffect(() => {
   service.getProductLimitResult(10)
   .then((res)=>{setState(res)})
   .catch((res)=>{console.log(res)});
   sizing()
  }, [])

  
  const viewPortQuery = {

    small:useMediaQuery(theme.breakpoints.down("sm")),
    
    medeum:useMediaQuery(theme.breakpoints.down("lg"))
  }
  function sizing(){
    if(viewPortQuery.small){setViewPort("auto")}
    else if(viewPortQuery.medeum){setViewPort(2.5)}
    else{setViewPort(5)};
  }

  const firstSliderRadius = "0px 10px 10px 0px";
  const lastSliderRadius = "10px 0px 0px 10px";
  return (
    <Box width={"100%"} maxWidth={"100%"} height={"25vh"}
    sx={{backgroundColor:theme.palette.primary.main}}
    borderRadius={"12px"}
    padding={"20px 20px 20px 20px"}
    display={"flex"}
    boxSizing={"border-box"}
    
  
    >
        <Box maxWidth={"20%"} width={"20%"} 
        sx={{backgroundColor:theme.palette.grey[200]}} 
        display={"grid"}
        borderRadius={"5px"}
        >
            <Typography textAlign={"center"} mt={"12px"} variant='h5' fontFamily={"lalezar"}>پیشنهاد شگفت انگیز</Typography>
            <Button>بیشتر ...</Button>
        </Box>

        <Box  maxWidth={"85%"} width={"85%"} mr={"20px"} display={"flex"}>
          <Swiper
           modules={[Navigation]}
           spaceBetween={0}
           slidesPerView={viewPort}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
          style={{
            width:"100%",
            height:"100%",
          }}>

        {state.map((item, index)=>
          {
            return(
              <SwiperSlide key={index}
              // style={{}}
              >

                <Link to={`/produt/${item?.id}`}>
              <Box  width={"240px"}  sx={{backgroundColor:"white", border:"black 1px solid", cursor:"pointer"}}
              height={"21vh"}
              borderRadius={()=>{if(index===0) return firstSliderRadius; if(index === state.length -1)return lastSliderRadius }}
              display={"grid"}
              padding={"5px"}
              boxSizing={"border-box"}
              
              >
                <img src={item?.image} 
                style={{width:"60%", height:"15vh", objectFit:"cover", margin:"0 auto"}}
                alt='img'
                />
                <Box display={"flex"} justifyContent={"space-between"}>

                <Typography color={theme.palette.grey[600]}>تومان {item?.price - 5}</Typography>
                <Typography color={theme.palette.grey[400]} sx={{textDecoration:"line-through !important"}}>{item?.price}</Typography>
                </Box>
              </Box>
                </Link>
                </SwiperSlide>
            )
          }
          )}
          </Swiper>
        </Box>
    </Box>
  )
}

export default SuggestBox