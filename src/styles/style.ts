/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import theme from "../theme";

type CssStyle = React.CSSProperties;

export const mainHeader = {
  search: <CssStyle>{
    display: "flex",
    width: "100%",
    gap: "12px",
  },
  iconButtonBox: <CssStyle>{
    marginRight: "auto",
    display: "flex",
    gap: "5px",
  },
};

export const downSmNoneStyle = <CssStyle>{
  [theme.breakpoints.down("sm")]:{display:"none"}
}
export const downSmDisplayStyle = <CssStyle>{
  [theme.breakpoints.down("sm")]:{display:"flex"}
}

