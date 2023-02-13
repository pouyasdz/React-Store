import React from "react";
import contact from "../../../Types/conntact";
import { Box } from "@mui/system";
import theme from "../../../theme";
import { IconButton, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

function ConntactBox(props: contact) {
  const { display, list, title, variant } = props;
  return (
    <Box
      width={"350px"}
      sx={{
        [theme.breakpoints.down("sm")]: { width: "100%" },
        backgroundColor: theme.palette.grey[800],
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Typography
        textAlign={"right"}
        color={theme.palette.grey[400]}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Box
        height={"auto"}
        sx={{
          [theme.breakpoints.down("sm")]: { width: "100%" },
        }}
        display={display}
        justifyContent={"space-between"}
        mt={"15px"}
        gap={"10px"}
      >
        {list.map((item, index) => {
          return (
            <div key={index}>
              {/* icon */}
              {variant === "icon" && (
                <a href={item?.link || "#"}>
                  <IconButton sx={{ color: [theme.palette.grey[200]] }}>
                    {item.icon && <item.icon />}
                  </IconButton>
                </a>
              )}

              {/* text */}
              {variant === "text" && (
                <a href={item?.link}>
                  <Typography color={"white"}>{item.name}</Typography>
                </a>
              )}

              {/* normal */}
              {variant === "normal" && (
                <Box display={"flex"} gap={"5px"}>
                  <a href={item?.link}>
                    <Typography color={"white"}>{item.name}</Typography>
                  </a>
                  {item.icon && <item.icon sx={{ color: "white" }} />}
                </Box>
              )}
            </div>
          );
        })}
      </Box>
    </Box>
  );
}

export default ConntactBox;
