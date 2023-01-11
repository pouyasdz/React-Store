import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Container,
} from "@mui/material";
import { brandName} from "../../../constant";
import InputBase from "@mui/material/InputBase";
import {
  SearchOutlined,
  PersonOutline,
  LocalMallOutlined,
} from "@mui/icons-material";

import theme from "../../../theme";
import { downSmNoneStyle, mainHeader } from "../../../styles/style";
import BottomNavigationBar from "./BottomNavigationBar";
import TopNavagationBar from "./TopNavagationBar";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Box position="fixed">
      <AppBar color="default" elevation={1}>
        <Container maxWidth={"xl"}>
          {/* top bar navagation for mobile device */}
            <TopNavagationBar/>
          {/* top bar navagation for mobile device */}


          {/* main section */}
          <Toolbar>
            <Box sx={mainHeader.search}>
              <Link to={"/"} style={{textDecoration:"none"}}>
              <Typography
                fontFamily={"lalezar"}
                variant="h4"
                sx={{ [theme.breakpoints.down("sm")]: { display: "none" }}}
                color={theme.palette.primary.main}
              >
                {brandName}
              </Typography>
              </Link>
              <Box
                display={"flex"}
                sx={{ backgroundColor: "#f1f2f4", [theme.breakpoints.down("sm")]:{width:"100%"}, width:"70%" }}
                borderRadius="3px"
                
              >
                <InputBase
                  sx={{ mr: 2, flex: 20 }}
                  placeholder={"جستجو ..."}
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
                variant="middle"
              />
              <IconButton color="inherit">
                <LocalMallOutlined />
              </IconButton>
            </Box>
          </Toolbar>
          {/* main section */}

          {/* Bottom Navagation Section For Desktop device */}
          <Toolbar sx={downSmNoneStyle}>
            <BottomNavigationBar />
          </Toolbar>
          {/* Bottom Navagation Section For Desktop device */}
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
