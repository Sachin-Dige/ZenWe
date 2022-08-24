import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  Button,
  Box,
  ButtonGroup,
  Modal,
  Stack,
  Typography,
  Radio,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
// import externalLink from "../Images/link.png";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import cross from "../Images/cross.png";
import CompanySetting from "./CompanySetting";

function Billing({click,setClick}) {
  const ModalDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 48,
              top: 38,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            {/* <CloseIcon/> */}
            <img src={cross} alt="...imgError" />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  ModalDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const ModDialogTitle = (props) => {
    const { children, onStop, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onStop ? (
          <IconButton
            aria-label="close"
            onClick={onStop}
            sx={{
              position: "absolute",
              right: 47,
              top: 10,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            {/* <CloseIcon/> */}
            <img src={cross} alt="...imgError" />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  ModDialogTitle.propTypes = {
    children: PropTypes.node,
    onStop: PropTypes.func.isRequired,
  };

  const [unlock, setUnlock] = useState(false);

  const handleOpen = () => {
    setUnlock(true);
  };
  const handleClose = () => {
    setUnlock(false);
  };

  return (
    <>
      <CompanySetting click={click} setClick={setClick}/>
      <Box
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          top: "160px",
          left: "397px",
          position: "absolute",
        }}
      >
        <Box component="div" sx={{ mt: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: { lg: "1299px", xs: "580px" },
                height: 1785,
                border: "1px solid #C4C4C4",
                borderRadius: "12px",
                background: "#FFFFFF",
                ml: { lg: "-5px", xs: "-106px" },
              },
            }}
          >
            <Paper
              sx={{
                bgcolor: "#FFFFFF",
                width: 425,
                height: 610,
                mt: "9px",
                ml: "22px",
              }}
            >
              <Stack direction="column">
                <Box component="div">
                  <Typography
                    variant="h6"
                    sx={{
                      width: 98,
                      height: 31,
                      fontSize: 24,
                      mt: "30px",
                      ml: "55px",
                      mb: "30px",
                      fontWeight: 600,
                      color: "#1A344B",
                      textTransform: "capitalize",
                      fontFamily: "Montserrat', sans-serif",
                      fontStyle: "normal",
                    }}
                  >
                    Billing
                  </Typography>
                </Box>

                <Divider />

                <Stack direction="row">
                  <Box sx={{ width: 506, height: 125, ml: "55px", mt: "30px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 231,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Current Subscription
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 506,
                          height: 23,
                          fontSize: 18,
                          mt: "18px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        You're subscribed to the{" "}
                        <Box component="span" sx={{ color: "#4CABCD" }}>
                          {" "}
                          Startup
                        </Box>{" "}
                        plan at $171 per month.
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<SettingsRoundedIcon />}
                      position="relative"
                      style={{
                        marginTop: "18px",
                        width: "256px",
                        height: "38px",
                        backgroundColor: "#1A344B",
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: 600,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Modify Subscriptions
                    </Button>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 851, height: 166, ml: "55px", mt: "54px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 227,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Cancel Subscription
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: { lg: "851px", xs: "450px" },
                          height: 64,
                          fontSize: 18,
                          mt: "18px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        You can cancel your plan at any time. The change will
                        take effect at the end of your current billing cycle.
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      position="relative"
                      style={{
                        marginTop: "18px",
                        width: "210px",
                        height: "38px",
                        backgroundColor: "#DADADA",
                        color: "#1A344B",
                        fontSize: "17px",
                        fontWeight: 600,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        opacity: "0.8",
                        borderRadius: "2.70147px",
                      }}
                    >
                      Cancel Subscription
                    </Button>
                  </Box>
                </Stack>

                {/* <Divider/> */}

                <Stack direction="row">
                  <Box
                    sx={{ width: 1151, height: 228, ml: "55px", mt: "54px" }}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 244,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Feature Subscriptions
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 125,
                          height: 32,
                          mt: "18px",
                          fontSize: 18,
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Talent Search
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: { lg: "743px", xs: "450px" },
                          height: 64,
                          fontSize: 16,
                          mt: "12px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        You aren’t subscribed to Talent Search. You can still
                        search, but results will be anonymized with contact
                        details removed.
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      onClick={handleClickOpen}
                      position="relative"
                      style={{
                        marginTop: "18px",
                        width: "212px",
                        height: "38px",
                        backgroundColor: "#1A344B",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Enable Talent Search
                    </Button>

                    <Divider sx={{ marginTop: "18px", width: {lg:"1151px",xs:"480px"} }} />
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box
                    sx={{
                      width: { lg: "861px", xs: "450px" },
                      height: 171,
                      ml: "55px",
                      mt: "40px",
                    }}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 232,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Text/SMS Messaging
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: { lg: "861px", xs: "450px" },
                          height: 69,
                          fontSize: 18,
                          mt: "12px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        You aren’t subscribed to an SMS messaging plan and are
                        limited to 10 SMS credits per month. You have used 0 of
                        10 credits.
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      onClick={handleOpen}
                      position="relative"
                      sx={{
                        marginTop: { lg: "18px", xs: "34px" },
                        width: "152px",
                        height: "38px",
                        backgroundColor: "#1A344B",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Add SMS Plan
                    </Button>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 398, height: 171, ml: "55px", mt: "54px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 139,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Card Details
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: "386px",
                          height: 69,
                          fontSize: 18,
                          mt: "12px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        We have the following credit card on file: 
                        Card ending
                        in 6084 · Expires 6/2022
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<SettingsRoundedIcon />}
                      position="relative"
                      style={{
                        marginTop: "18px",
                        width: "142px",
                        height: "38px",
                        backgroundColor: "#1A344B",
                        color: "#FFFFFF",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Edit Details
                    </Button>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 438, height: 181, ml: "55px", mt: "54px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 164,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Invoice Details
                      </Typography>
                    </Box>

                    <Stack direction="row" sx={{ mt: "18px" }}>
                      <Stack direction="column">
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 149,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Company Name
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 57,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Plenty
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="column" sx={{ ml: "123px" }}>
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 166,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Billing Information
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 158,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Nothing provided
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>

                    <Button
                      variant="contained"
                      startIcon={<SettingsRoundedIcon />}
                      position="relative"
                      style={{
                        marginTop: "33px",
                        width: "142px",
                        height: "38px",
                        backgroundColor: "#1A344B",
                        color: "#FFFFFF",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        textTransform: "capitalize",
                      }}
                    >
                      Edit Details
                    </Button>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box
                    sx={{
                      width: {lg:"1039px",xs:"450px"},
                      height: 110,
                      ml: "55px",
                      mt: "54px",
                    }}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 92,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Invoices
                      </Typography>
                    </Box>

                    <Stack direction="row" sx={{ mt: "18px" }}>
                      <Stack direction="column">
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 89,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Invoice ID
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 274,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            in_1KFKV6DnkobEEnenHlJAf43x
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="column" sx={{ ml: "88px" }}>
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 115,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Invoice Date
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 92,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            01/07/2022
                          </Typography>
                        </Box>
                      </Stack>

                      <Box sx={{
                        display:{xs:"flex"},
                        mt:{xs:"110px",lg:"0px"},
                        right:{xs:"12.8%",lg:"0%"},
                        position:{xs:"absolute",lg:"inherit"}
                      }}>
                      <Stack direction="column" sx={{ ml: "89px" }}>
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 72,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Amount
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 58,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            $171.00
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="column" sx={{ ml: "100px" }}>
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 72,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          ></Typography>
                        </Box>

                        <Box component="div">
                          <Stack direction="row">
                            <Box
                              sx={{
                                width: "28px",
                                height: "28px",
                                mt: "14px",
                                color: "#76D691",
                                fontSize:"24px"
                              }}
                            >
                              ✔
                            </Box>

                            <Typography
                              variant="h6"
                              sx={{
                                // width: 115,
                                height: 28,
                                mt: "18px",
                                fontSize: 18,
                                fontWeight: 600,
                                color: "#000000",
                                opacity: "0.7",
                                textTransform: "capitalize",
                                fontFamily: "Montserrat', sans-serif",
                                fontStyle: "normal",
                              }}
                            >
                              Success
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>

                      <Stack direction="column" sx={{ ml: "86px" }}>
                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 68,
                              height: 23,
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Actions
                          </Typography>
                        </Box>

                        <Box component="div">
                          <Typography
                            variant="h6"
                            sx={{
                              width: 114,
                              height: 23,
                              mt: "18px",
                              fontSize: 18,
                              fontWeight: 600,
                              color: "#4CABCD",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            View Invoice
                          </Typography>
                        </Box>
                      </Stack>
                      </Box>
                    </Stack>                   
                  </Box>
                </Stack>
                <Divider sx={{ mt: "22px", ml: "55px", 
                      width: {lg:"1151px",xs:"480px"},
                 }} />

                <Divider sx={{ mt: "120px" }} />

                <Modal onClose={handleClickClose} open={open}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 759,
                      height: 491,
                      bgcolor: "#FFFFFF",
                      borderRadius: "8px",
                      boxShadow: 24,
                    }}
                  >
                    <ModalDialogTitle
                      id="customized-dialog-title"
                      onClose={handleClickClose}
                      sx={{
                        mt: "40px",
                        ml: "50px",
                        width: 168,
                        height: 31,
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#1A344B",
                        textTransform: "capitalize",
                        fontFamily: "'Montserrat', sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      Talent Search
                    </ModalDialogTitle>

                    <DialogContent>
                      <Box component="div">
                        <Typography
                          sx={{
                            mt: "22px",
                            ml: "50px",
                            width: 563,
                            height: 60,
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#000000",
                            textTransform: "capitalize",
                            fontFamily: "'Montserrat', sans-serif",
                            fontStyle: "normal",
                            opacity: "0.7",
                          }}
                        >
                          Search billions of professional profiles. Currently
                          available for US-based candidates.
                        </Typography>
                      </Box>

                      <Box component="div">
                        <Typography
                          sx={{
                            mt: "28px",
                            ml: "50px",
                            width: 539,
                            height: 30,
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#000000",
                            textTransform: "capitalize",
                            fontFamily: "'Montserrat', sans-serif",
                            fontStyle: "normal",
                            opacity: "0.7",
                          }}
                        >
                          To enable Talent Search just choose a billing option
                          below:
                        </Typography>
                      </Box>

                      <Stack direction="row" sx={{ mt: "16px", ml: "50px" }}>
                        <Box component="div">
                          <Radio
                            checked
                            name="radio-buttons"
                            sx={{ width: 18, height: 18 }}
                          />
                        </Box>

                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 397,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 800,
                              color: "#000000",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            $249/month, billed annually (2 months free)
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack direction="row" sx={{ mt: "16px", ml: "50px" }}>
                        <Box component="div">
                          <Radio
                            checked={false}
                            name="radio-buttons"
                            sx={{ width: 18, height: 18 }}
                          />
                        </Box>

                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 397,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 800,
                              color: "#000000",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            $249/month, billed annually (2 months free)
                          </Typography>
                        </Box>
                      </Stack>

                      <Box component="div">
                        <Typography
                          sx={{
                            mt: "18px",
                            ml: "50px",
                            width: 554,
                            height: 30,
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#000000",
                            textTransform: "capitalize",
                            fontFamily: "'Montserrat', sans-serif",
                            fontStyle: "normal",
                            opacity: "0.7",
                          }}
                        >
                          Click 'Enable' below to confirm and charge your credit
                          card.
                        </Typography>
                      </Box>
                    </DialogContent>

                    <Divider />

                    <DialogActions sx={{ mt: "10px" }}>
                      {/* <ButtonGroup sx={{mt:"10px", ml:"384px"}} > */}

                      <Button
                        variant="contained"
                        onClick={handleClickClose}
                        style={{
                          width: "126px",
                          height: "38px",
                          backgroundColor: "#DADADA",
                          color: "#1A344B",
                          borderRAdius: "2.70147px",
                          fontWeight: 600,
                          fontSize: 18,
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                          textTransform: "capitalize",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<DoneIcon />}
                        style={{
                          ml: "30px",
                          width: "136px",
                          height: "38px",
                          backgroundColor: "#1A344B",
                          color: "#FFFFFF",
                          borderRAdius: "2.70147px",
                          fontWeight: 600,
                          fontSize: 18,
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                          textTransform: "capitalize",
                        }}
                      >
                        Enable
                      </Button>

                      {/* </ButtonGroup> */}
                    </DialogActions>
                  </Box>
                </Modal>

                <Modal onStop={handleClose} open={unlock}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 1357,
                      height: 900,
                      bgcolor: "#FFFFFF",
                      borderRadius: "8px",
                      boxShadow: 24,
                    }}
                  >
                    <ModDialogTitle
                      id="customized-dialog-title"
                      onStop={handleClose}
                      sx={{
                        mt: "10px",
                        ml: "47px",
                        width: 193,
                        height: 31,
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#1A344B",
                        textTransform: "capitalize",
                        fontFamily: "'Montserrat', sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      SMS Messaging
                    </ModDialogTitle>

                    <DialogContent>
                      <Box component="div">
                        <Typography
                          sx={{
                            mt: "22px",
                            ml: "47px",
                            width: 935,
                            height: 30,
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#000000",
                            textTransform: "capitalize",
                            fontFamily: "'Montserrat', sans-serif",
                            fontStyle: "normal",
                            opacity: "0.7",
                          }}
                        >
                          Choose an SMS messaging subscription plan and interact
                          with candidates the way they want you to.
                        </Typography>
                      </Box>

                      <Stack direction="column">
                        <ButtonGroup
                          disableElevation
                          sx={{ ml: "724px", mt: "28px" }}
                        >
                          <Button
                            variant="contained"
                            position="relative"
                            style={{
                              width: "122px",
                              height: "38px",
                              backgroundColor: "#DADADA",
                              color: "#1A344B",
                              borderRAdius: "2.70147px",
                              fontSize: "18px",
                              fontWeight: 600,
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                              textTransform: "capitalize",
                            }}
                          >
                            Monthly
                          </Button>

                          <Button
                            variant="contained"
                            position="relative"
                            style={{
                              width: "124px",
                              height: "38px",
                              backgroundColor: "#76D691",
                              color: "#FFFFFF",
                              borderRAdius: "2.70147px",
                              fontSize: "18px",
                              fontWeight: 600,
                              fontFamily: "Montserrat', sans-serif",
                              fontStyle: "normal",
                              textTransform: "capitalize",
                            }}
                          >
                            Annually
                          </Button>
                        </ButtonGroup>

                        <Box component="div">
                          <Typography
                            sx={{
                              mt: "28px",
                              ml: "720px",
                              width: 252,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              opacity: "0.7",
                            }}
                          >
                            Save 15% with annual billing
                          </Typography>
                        </Box>

                        <Stack
                          direction="row"
                          spacing={"32px"}
                          sx={{ ml: "470px", mt: "28px" }}
                        >
                          <Stack direction="column">
                            <Paper
                              elevation={0}
                              sx={{
                                width: 227,
                                height: 183,
                                bgcolor: "#4CABCD",
                                borderRadius: "8px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 144,
                                  height: 131,
                                  mt: "26px",
                                  ml: "42px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    width: 144,
                                    height: 30,
                                    fontSize: 24,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  US/Canada
                                </Typography>

                                <Typography
                                  sx={{
                                    mt: "12px",
                                    ml: "17px",
                                    width: 104,
                                    height: 46,
                                    fontSize: 36,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  $127
                                  <Box
                                    component="span"
                                    sx={{
                                      fontSize: 14,
                                      fontWeight: 600,
                                      color: "#FFFFFF",
                                      textTransform: "capitalize",
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontStyle: "normal",
                                    }}
                                  >
                                    /mo
                                  </Box>
                                </Typography>

                                <Typography
                                  sx={{
                                    mt: "12px",
                                    width: 133,
                                    height: 30,
                                    fontSize: 17,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  billed annually
                                </Typography>
                              </Box>
                            </Paper>

                            <Paper
                              elevation={0}
                              sx={{
                                mt: "22px",
                                width: 227,
                                height: 38,
                                bgcolor: "#4CABCD",
                                borderRadius: "4px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 103,
                                  height: 23,
                                  mt: "6px",
                                  ml: "62px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Select Plan
                                </Typography>
                              </Box>
                            </Paper>
                          </Stack>

                          <Stack direction="column">
                            <Paper
                              elevation={0}
                              sx={{
                                width: 227,
                                height: 183,
                                bgcolor: "#76D691",
                                borderRadius: "8px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 160,
                                  height: 89,
                                  mt: "26px",
                                  ml: "34px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    width: 160,
                                    height: 30,
                                    fontSize: 24,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  International
                                </Typography>

                                <Typography
                                  sx={{
                                    mt: "12px",
                                    ml: "5px",
                                    width: 142,
                                    height: 46,
                                    fontSize: 36,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Custom
                                </Typography>
                              </Box>
                            </Paper>

                            <Paper
                              elevation={0}
                              sx={{
                                mt: "22px",
                                width: 227,
                                height: 38,
                                bgcolor: "#76D691",
                                borderRadius: "4px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 103,
                                  height: 23,
                                  mt: "6px",
                                  ml: "62px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Contact Us
                                </Typography>
                              </Box>
                            </Paper>
                          </Stack>

                          <Stack direction="column">
                            <Paper
                              elevation={0}
                              sx={{
                                width: 227,
                                height: 183,
                                bgcolor: "#853DB1",
                                borderRadius: "8px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 142,
                                  height: 89,
                                  mt: "26px",
                                  ml: "43px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ml: "20px",
                                    width: 117,
                                    height: 31,
                                    fontSize: 22,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Big Texter
                                </Typography>

                                <Typography
                                  sx={{
                                    mt: "12px",
                                    ml: "5px",
                                    width: 142,
                                    height: 46,
                                    fontSize: 36,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Custom
                                </Typography>
                              </Box>
                            </Paper>

                            <Paper
                              elevation={0}
                              sx={{
                                mt: "22px",
                                width: 227,
                                height: 38,
                                bgcolor: "#853DB1",
                                borderRadius: "4px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 103,
                                  height: 23,
                                  mt: "6px",
                                  ml: "62px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textTransform: "capitalize",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Contact Us
                                </Typography>
                              </Box>
                            </Paper>
                          </Stack>
                        </Stack>
                      </Stack>

                      <Divider sx={{ mt: "50px", ml: "52px" }} />

                      <Stack direction="row" sx={{ mt: "15px", ml: "50px" }}>
                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 294,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Send to US / Canadian numbers
                          </Typography>
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#4CABCD",
                              ml: "224px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#76D691",
                              ml: "234px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#853DB1",
                              ml: "228px",
                            }}
                          />
                        </Box>
                      </Stack>

                      <Divider sx={{ mt: "10px", ml: "52px" }} />

                      <Stack direction="row" sx={{ mt: "15px", ml: "50px" }}>
                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 356,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Send up to 5000 SMS messages/month
                          </Typography>
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#4CABCD",
                              ml: "162px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#76D691",
                              ml: "234px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#853DB1",
                              ml: "228px",
                            }}
                          />
                        </Box>
                      </Stack>

                      <Divider sx={{ mt: "10px", ml: "52px" }} />

                      <Stack direction="row" sx={{ mt: "15px", ml: "50px" }}>
                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 303,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Receive unlimited SMS messages
                          </Typography>
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#4CABCD",
                              ml: "215px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#76D691",
                              ml: "234px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#853DB1",
                              ml: "228px",
                            }}
                          />
                        </Box>
                      </Stack>

                      <Divider sx={{ mt: "10px", ml: "52px" }} />

                      <Stack direction="row" sx={{ mt: "15px", ml: "50px" }}>
                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 281,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            Send to International numbers
                          </Typography>
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#76D691",
                              ml: "499px",
                            }}
                          />
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#853DB1",
                              ml: "228px",
                            }}
                          />
                        </Box>
                      </Stack>

                      <Divider sx={{ mt: "10px", ml: "52px" }} />

                      <Stack direction="row" sx={{ mt: "15px", ml: "50px" }}>
                        <Box component="div">
                          <Typography
                            sx={{
                              ml: "12px",
                              width: 309,
                              height: 30,
                              fontSize: 17,
                              fontWeight: 600,
                              color: "#000000",
                              opacity: "0.7",
                              textTransform: "capitalize",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                            }}
                          >
                            More than 5000 messages/month
                          </Typography>
                        </Box>

                        <Box component="div">
                          <CheckCircleIcon
                            sx={{
                              width: 28,
                              height: 28,
                              color: "#853DB1",
                              ml: "727px",
                            }}
                          />
                        </Box>
                      </Stack>

                      <Divider sx={{ mt: "10px", ml: "52px" }} />
                    </DialogContent>
                  </Box>
                </Modal>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Billing;