import {
  Box,
  ButtonBase,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { downSmNoneStyle} from "../../../styles/style";
import { menue } from "../../../constant";
import megaMenu from "../../../Types/megamenu";
import theme from "../../../theme";
import { Link } from "react-router-dom";

function MegaMenu(props: megaMenu) {
  const { display } = props;
  return (
    <Box
      sx={{
        downSmNoneStyle,
        width: "100%",
        height: "30vh",
        paddingBottom: "15px",
      }}
      display={display ? "flex" : "none"}
      justifyContent={"space-around"}
    >
      {menue.map((item, index) => {
        const subLink = `category${item.link}`;
        return (
          <Box
          key={index}
          border={"grey 2px solid"}
          sx={{
            width: "23%",
            padding: "5px",
          }}
          >
            <Link
              to={`category${item.link}`}
              style={{ textDecoration: "none" }}
            >
              <Box display={"flex"} gap="5px" justifyContent={"center"}>
                <Typography
                  fontFamily="lalezar"
                  fontSize={"large"}
                  sx={{ cursor: "pointer" }}
                  color={theme.palette.primary.main}
                >
                  {item.name}
                </Typography>
                {<item.icon color="primary" />}
              </Box>
            </Link>

            <List>
              {item.submenu.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Link
                      to={`${subLink}${item.link}`}
                      style={{textDecoration:"none !important"}}
                    >
                      <Typography
                        textAlign={"right"}
                        color={theme.palette.grey[600]}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </ListItem>

                );
              })}
            </List>
          </Box>
        );
      })}
    </Box>
  );
}

export default MegaMenu;
