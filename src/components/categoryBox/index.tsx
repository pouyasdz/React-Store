import { Box } from "@mui/material";
import React from "react";
import BoxComponent from "./box_component";
import theme from "../../theme";
import { categoryOverView } from "../../constant";

function CategoryBox() {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      sx={{
        marginTop: "2.5%",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
        },
      }}
      
      display={"grid"}
      gap={"10px"}
    >
      {
        categoryOverView.map((item, index) => {
          const {cover, name, path} = item;
          return(
            
            <BoxComponent cover={cover} name={name} path={path} key={index}/>
          )
        })
      }
    
    </Box>
  );
}

export default CategoryBox;
