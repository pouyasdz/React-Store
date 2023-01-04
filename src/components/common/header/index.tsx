import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Container
} from "@mui/material";
import { brandName } from "../../../constant";
import InputBase from "@mui/material/InputBase";
import {
  SearchOutlined,
  PersonOutline,
  LocalMallOutlined,
} from "@mui/icons-material";

import theme from "../../../theme";
import { mainHeader } from "../../../styles/style";

function Header() {
  return (
    <Box>
      <AppBar position="fixed" color="primary">
      <Container>
        <Toolbar>
          <Box sx={mainHeader.search}>
            <Typography fontFamily={"lalezar"} variant="h4" sx={{[theme.breakpoints.down("sm")]:{display:"none"}}}>
              {brandName}
            </Typography>

            <Box
              display={"flex"}
              sx={{ backgroundColor: "#f1f2f4" }}
              borderRadius="3px"
            >
              <InputBase
                sx={{ mr: 2, flex: 20 }}
                placeholder="جستجو"
                dir="rtl"
              />
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchOutlined />
              </IconButton>
            </Box>
          </Box>

          <Box sx={mainHeader.iconButtonBox}>
            <IconButton color="inherit">
              <PersonOutline />
            </IconButton>
            <Divider
              sx={{ backgroundColor: "white", opacity: "60%" }}
              orientation="vertical"
              flexItem
            />
            <IconButton color="inherit">
              <LocalMallOutlined />
            </IconButton>
          </Box>
        </Toolbar>
    </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
