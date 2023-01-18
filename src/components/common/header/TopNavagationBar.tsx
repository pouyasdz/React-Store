import { Box } from "@mui/system";
import React, {useState} from "react";
import theme from "../../../theme";
import { IconButton, Typography } from "@mui/material";
import { brandName } from "../../../constant";
import { ListOutlined, InfoOutlined } from "@mui/icons-material";
import Hamburger from "./Hamburger";

function TopNavagationBar() {
  const [open, setOpen] = useState(false)
  return (
    <Box
      sx={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
      justifyContent="space-between"
      display={"flex"}
      alignItems="center"
      padding={"5px"}
    >
      {

      <Hamburger open={open} setOpen={setOpen}/>
      }
      <IconButton onClick={()=> setOpen(true)}>
        <ListOutlined fontSize={"medium"} />
      </IconButton>
      <Typography fontFamily={"lalezar"} fontSize={"20px"} color={theme.palette.primary.main}>
        {brandName}
      </Typography>
      <IconButton>
        <InfoOutlined fontSize={"medium"} />
      </IconButton>
    </Box>
  );
}

export default TopNavagationBar;
