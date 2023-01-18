import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LocationOnOutlined } from "@mui/icons-material";
import { downSmNoneStyle } from "../../../styles/style";
import { bottomNavItems } from "../../../constant";
import theme from "../../../theme";
import bottomNav from "../../../Types/bottomNav";
import { handleHover, handleLeft } from "../../../utils/functions";

function BottomNavigationBar(props: bottomNav) {
  const { setter } = props;
  const items = bottomNavItems;

  return (
    <Box
      display={"flex"}
      width={"100%"}
      padding="10px"
      sx={downSmNoneStyle}
      alignItems="center"
    >
      {/* nav-box */}
      <Box display={"flex"} gap={"1.5rem"}>
        {items.map((item, index) => {
          return (
            <Box key={index}>
              {/* items */}
              <Box style={{ display: "flex" }} dir="ltr" position={"relative"}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Box
                    onMouseEnter={() => handleHover(setter, item.primary)}
                    display={"flex"}
                    gap="6px"
                    padding={"3px"}
                    alignItems="center"
                    sx={{
                      width: "max-content",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        transform: "scaleX(0)",
                        height: "2px",
                        bottom: "0",
                        left: "0",
                        backgroundColor: theme.palette.secondary.main,
                        transformOrigin: "bottom right",
                        transition: "transform 0.25s ease-out",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }}
                  >
                    <Typography
                      sx={{ color: item.primary ? "black" : "#5a5c7a" }}
                      fontSize={item.primary ? "16px" : "14px"}
                      fontWeight={item.primary ? "bold" : ""}
                    >
                      {item.name}
                    </Typography>
                    <item.icon
                      style={{
                        fontSize: item.primary ? "1.5em" : "1.2em",
                        color: item.primary ? "black" : "#5a5c7a",
                      }}
                    />
                  </Box>
                </Link>
              </Box>
              {item.primary && (
                <Divider
                  flexItem
                  orientation="vertical"
                  variant="middle"
                  sx={{
                    backgroundColor: "white",
                    marginRight: "5px",
                    marginLeft: "5px",
                    opacity: "60%",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
      {/* location section */}

      <Box display={"flex"} marginRight="auto" padding={"5px"} gap="5px">
        <LocationOnOutlined fontSize={"small"} />
        <Typography fontSize={"small"}>ارسال به تهران</Typography>
      </Box>

    </Box>
  );
}

export default BottomNavigationBar;
