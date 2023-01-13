import { Box } from "@mui/system";
import React from "react";
import theme from "../../../theme";
import { IconButton, Typography } from "@mui/material";
import { brandName } from "../../../constant";
import { ListOutlined, InfoOutlined } from "@mui/icons-material";

function TopNavagationBar() {
  return (
    <Box
      sx={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
      justifyContent="space-between"
      display={"flex"}
      alignItems="center"
      padding={"5px"}
    >
      <IconButton>
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
