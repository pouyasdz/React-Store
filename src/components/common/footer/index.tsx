import {
  Alert,
  Box,
  Button,
  InputBase,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";
import ConntactBox from "./ConntactBox";
import { contact } from "../../../constant";

function Footer() {
  const { socialMedia, emails, phoneNumber } = contact;
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box
      width={"100%"}
      height={"auto"}
      sx={{
        backgroundColor: theme.palette.grey[900],
        marginTop: "5%",
        borderRadius: "15px 15px 0 0",
      }}
      padding={"25px"}
    >
      {/* join notifocation */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          sx={{ width: "300px", justifyContent: "space-between" }}
        >
          عضویت موفقیت آمیز بود
        </Alert>
      </Snackbar>

      {/* join box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            display: "grid",
            justifyContent: "normal",
            gap: "2.5%",
          },
        }}
      >
        <Box
          width={"75%"}
          borderRadius={"10px"}
          sx={{
            backgroundColor: theme.palette.grey[800],
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
          padding={"5px"}
        >
          <InputBase
            fullWidth
            dir="ltr"
            placeholder="برای عضویت ایمیل خود را وارد کنید"
            sx={{ color: "white" }}
          />
        </Box>
        <Button
          onClick={handleOpen}
          sx={{
            width: "250px",
            [theme.breakpoints.down("sm")]: {
              margin: "15px auto",
            },
          }}
          color="info"
          variant="outlined"
        >
          عضویت
        </Button>
      </Box>

      {/* address */}
      <Box mt={"5%"}>
        <Typography variant="h4" color={theme.palette.grey[500]}>
          آدرس فروشگاه
        </Typography>
        <Typography variant="body1" color={theme.palette.info.main}>
          . تهران - خیابان ارتش - ساختمان
        </Typography>
      </Box>

      {/* contact */}
      <Box
        width={"100%"}
        sx={{
          marginTop: "5%",
          [theme.breakpoints.down("sm")]: {
            display: "grid",
            justifyContent: "normal",
          },
          display: "flex",
          justifyContent: "space-between",
          direction: "ltr",
          gap: "15px",
        }}
      >
        <ConntactBox
          display="block"
          title={phoneNumber.title}
          list={phoneNumber.list}
          variant="normal"
        />
        <ConntactBox
          display="block"
          title={emails.title}
          list={emails.list}
          variant="text"
        />
        <ConntactBox
          display="flex"
          title={socialMedia.title}
          list={socialMedia.list}
          variant="icon"
        />
      </Box>
    </Box>
  );
}

export default Footer;
