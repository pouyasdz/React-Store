import { Accordion, AccordionDetails, AccordionSummary, Backdrop, ButtonBase, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../theme";
import hamburger from "../../../Types/hamburger";
import { bottomNavItems, brandName, menue } from "../../../constant";
import { CloseOutlined, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Hamburger(props: hamburger) {
  const { open, setOpen } = props;
  const items = bottomNavItems;
  
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      
    >
      <Box
        width={"60%"}
        height={"100vh"}
        sx={{ backgroundColor: theme.palette.grey[300], right: 0 }}
        position="absolute"
        padding={"5px"}
      >
        <IconButton onClick={() => setOpen(false)}>
          <CloseOutlined/>
        </IconButton>
        <Typography
          textAlign={"center"}
          fontSize="25px"
          color={theme.palette.primary.main}
          fontFamily="lalezar"
        >
          {brandName}
        </Typography>
        <Divider variant="middle" />

        <Box mt={"5%"}>
          {items.map((item, index) => {
          return (
            <Box display={"grid"} height="8vh" key={index}>
              <Link to={item.path} >
                <ButtonBase sx={{width:"100%"}}>
              <Box display={"flex"} width="100%" justifyContent={"space-between"} border={`${theme.palette.secondary.main} 1.5px solid`} padding="5px" borderRadius={"3px"} color={theme.palette.grey[700]}>

                <item.icon />
                <Typography>{item.name}</Typography>
              </Box>
                </ButtonBase>
              </Link>
            </Box>
          );
        })}
        </Box>
        
        <Divider variant="middle" />
        
        <Typography
          textAlign={"center"}
          fontSize="25px"
          color={theme.palette.primary.main}
          fontFamily="lalezar"
        >
          دسته بندی کالا ها
        </Typography>

        {
          menue.map((item, index) => {
            const baseName = item.link
            return(
              <Accordion key={index}>
                <AccordionSummary
                expandIcon={<ExpandMore/>}
                >
                  <Typography>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display:"grid", gap:"5px"}}>
                  {item.submenu.map((item, index)=>{ 
                    return(
                      <Link to={`${baseName}${item.link}`} key={index}>

                        <Typography color={theme.palette.grey[600]}>{item.name}</Typography>
                      </Link>
                    )
                  })}
                </AccordionDetails>
              </Accordion>
            )
          })
        }
      </Box>
    </Backdrop>
  );
}

export default Hamburger;
