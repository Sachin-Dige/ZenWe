import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import {
  Button,
  Box,
  ButtonGroup,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import link from '../Images/link.png'
import SaveIcon from "@mui/icons-material/Save";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import cross from '../Images/cross.png'
import CompanySetting from "./CompanySetting";

const General = ({click,setClick}) => {
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
              top: 20,
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
  const handleClose = () => {
    setOpen(false);
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
          ml: { lg: "-5px", xs: "-145px" },
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
                height: {lg:"2111px",xs:"2320px"},
                border: "1px solid #C4C4C4",
                borderRadius: "12px",
                background: "#FFFFFF",
              },
            }}
          >
            <Box
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
                    General
                  </Typography>
                </Box>

                <Divider />

                <Stack direction="row">
                  <Box sx={{ width: 519, height: 139, ml: "55px", mt: "30px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 181,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
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
                          width: 519,
                          height: 23,
                          fontSize: 17,
                          mt: "18px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Keep it short and don't include things like "Inc", "LLC"
                        etc.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: {lg:"500px",xs:"400px"},
                        height: 52,
                        mt: "18px",
                        fontWeight: 600,
                        color: "#000000",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        opacity: "0.5",
                        border: "1px solid #C4C4C4",
                        borderRadius: "4px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Type Here..."
                        id="fullWidth"
                        disabled
                      />
                    </Box>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 820, height: 180, ml: "55px", mt: "40px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 213,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Company Location{" "}
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: {lg:"820px",xs:"460px"},
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
                        Select the main location of your company. Breezy will
                        use this to designate your primary timezone for system
                        emails.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 422,
                        // maxWidth: '100%',
                        height: {lg:"52px"},
                        mt: {lg:"18px",xs:"30px"},
                        fontWeight: 600,
                        color: "#000000",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                        opacity: "0.5",
                        border: "1px solid #C4C4C4",
                        borderRadius: "4px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Enter a location"
                        id="fullWidth"
                        disabled
                      />
                    </Box>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box
                    sx={{ width: {lg:1151,xs:460}, height: 337, ml: "55px", mt: "30px" }}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 229,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Single Sign-On (SSO)
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: {lg:"575px",xs:"460px"},
                          height: 32,
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
                        Require employees to sign in with your company’s SSO
                        system.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        mt: {lg:"25px",xs:"35px"},
                        width: {lg:1151,xs:460},
                        height: 49,
                      }}
                    >
                      <Stack direction="row">
                        <Typography
                          position="start"
                          sx={{
                            width: 92,
                            height: 19,
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.5",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          Google Apps
                        </Typography>

                        <Button
                          variant="contained"
                          onClick={handleClickOpen}
                          startIcon={<SettingsRoundedIcon />}
                          position="relative"
                          sx={{
                            marginLeft: {lg:"915px",xs:"245px"},
                            width: {lg:"144px",xs:"105px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Settings
                        </Button>
                      </Stack>

                      <Divider sx={{ mt: "8px", width: {lg:"1151px",xs:"435px"}, height: 0 }} />
                    </Box>

                    <Box
                      sx={{
                        mt: "25px",
                        width: {lg:1151,xs:460},
                        height: 45,
                      }}
                    >
                      <Stack direction="row">
                        <Typography
                          position="start"
                          sx={{
                            width: 35,
                            height: 18,
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.5",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          Okta
                        </Typography>

                        <Button
                          variant="contained"
                          startIcon={<SettingsRoundedIcon />}
                          position="relative"
                          sx={{
                            marginLeft: {lg:"972px",xs:"300px"},
                            width: {lg:"144px",xs:"105px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Settings
                        </Button>
                      </Stack>

                      <Divider sx={{ mt: "8px", width: {lg:"1151px",xs:"435px"}, height: 0 }} />
                    </Box>

                    <Box
                      sx={{
                        mt: "25px",
                        width: {lg:1151,xs:460},
                        height: 45,
                      }}
                    >
                      <Stack direction="row">
                        <Typography
                          position="start"
                          sx={{
                            width: 68,
                            height: 18,
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.5",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          OneLogin
                        </Typography>

                        <Button
                          variant="contained"
                          startIcon={<SettingsRoundedIcon />}
                          position="relative"
                          sx={{
                            marginLeft: {lg:"939px",xs:"265px"},
                            width: {lg:"144px",xs:"105px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Settings
                        </Button>
                      </Stack>

                      <Divider sx={{ mt: "8px", width: {lg:"1151px",xs:"435px"}, height: 0 }} />
                    </Box>

                    <Box
                      sx={{
                      
                        mt: "25px",
                        width: {lg:1151,xs:460},
                        height: 45,
                      }}
                    >
                      <Stack direction="row">
                        <Typography
                          position="start"
                          sx={{
                            width: 39,
                            height: 18,
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.5",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          SAML
                        </Typography>

                        <Button
                          variant="contained"
                          startIcon={<SettingsRoundedIcon />}
                          position="relative"
                          sx={{
                            marginLeft: {lg:"968px",xs:"292px"},
                            width: {lg:"144px",xs:"105px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Settings
                        </Button>
                      </Stack>
                      <Divider sx={{ mt: "8px", width: {lg:"1151px",xs:"435px"}, height: 0 }} />
                    </Box>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box
                    sx={{ width: {lg:"1152px",xs:"450px"}, height: 172, ml: "55px", mt: "40px",mb:{xs:"55px",lg:"0px"} }}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 224,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Employee Auto-Join
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: {lg:"918px",xs:"450px"},
                          height: 32,
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
                        Let your employees use their company email address to
                        automagically add themselves as members.{" "}
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 162,
                          height: 32,
                          fontSize: 16,
                          mt: {lg:"18px",xs:"36px"},
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Employee Auto-Join
                      </Typography>
                    </Box>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: 118,
                            height: 32,
                            fontSize: 15,
                            mt: "12px",
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.7",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          Auto-Join URL:
                        </Typography>
                      </Box>

                      <Box
                        component="img"
                        src={link}
                        alt="...linkImgError"
                        sx={{ width: 16, height: 16, mt: "14px", ml: "5px" }}
                      />

                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: 278,
                            height: 32,
                            fontSize: 16,
                            mt: "12px",
                            ml: "8px",
                            fontWeight: 600,
                            color: "#4CABCD",
                            opacity: "0.7",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          http://app.breezy.hr/signup/zenwe
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"47%",lg:"0%"},
                            right: {xs:"41%",lg:"0%"},
                      }}>

                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            marginLeft: "435px",
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Enable
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box
                    sx={{ width: 1152, height: 304, ml: "55px", mt: "40px", mb:{xs:"55px",lg:"0px"}}}
                  >
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 183,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Candidate Data
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 149,
                          height: 32,
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
                        Social Discovery
                      </Typography>
                    </Box>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: {lg:"639px",xs:"450px"},
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
                          Gather social data about candidates from their public
                          profiles, such as social profiles and photos from
                          Linkedin, Twitter, etc.
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"57.5%",lg:"0%"},
                            right: {xs:"41%",lg:"0%"},
                      }}>
                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            marginLeft: "220px",
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Enable
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>
                    <Divider sx={{mt:{xs:"100px",lg:"0px"},width: {lg:"1151px",xs:"435px"}}} />

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 311,
                          height: 32,
                          fontSize: 18,
                          mt: {lg:"18px",xs:"25px"},
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Aggregate/Combine/Collect Data
                      </Typography>
                    </Box>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width:{lg:"671px",xs:"450px"},
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
                          When viewing a candidate, display information for them
                          across multiple positions or candidate pools
                          (documents, assessments, discussion, etc.).
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"67.5%",lg:"0%"},
                            right: {xs:"41.5%",lg:"0%"},
                      }}>
                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            marginLeft: "190px",
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Enable
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>

                    <Divider sx={{mt:{xs:"95px",lg:"10px"},width: {lg:"1151px",xs:"435px"}}} />
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 1152, ml: "55px", mt: {lg:"40px",xs:"150px"} }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 204,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        GDPR Compliance
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: {lg:825,xs:"450px"},
                          height: 32,
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
                        Use our simple GDPR features to help save you time and
                        simplify compliance.
                        <Box component="span" sx={{ color: "#4CABCD" }}>
                          {" "}
                          Learn More
                        </Box>
                      </Typography>
                    </Box>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: 119,
                            height: 32,
                            fontSize: 16,
                            mt: {lg:"18px",xs:"36px"},
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.7",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          GDPR Features
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"78.2%",lg:"0%"},
                            right: {xs:"41%",lg:"0%"},
                      }}>
                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            marginLeft: "740px",
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Enable
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          style={{
                            width: "144px",
                            height: "38px",
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>
                    <Divider sx = {{mt:{xs:"75px",lg:"0px"},width:{lg:"1151px",xs:"435px"}}}/>
                  </Box>
                </Stack>

                <Stack direction="row">
                  <Box sx={{ width: 1152, ml: "55px", mt: "31px" }}>
                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: 202,
                          height: 28,
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#1A344B",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        EEOC Compliance
                      </Typography>
                    </Box>

                    <Box component="div">
                      <Typography
                        variant="h6"
                        sx={{
                          width: {lg:"824",xs:"450px"},
                          height: 64,
                          fontSize: {lg:18,xs:15.87},
                          mt: "18px",
                          fontWeight: 600,
                          color: "#000000",
                          opacity: "0.7",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                        }}
                      >
                        Use our simple EEOC/OFCCP compliance functionality to
                        take the pain out of candidate surveys and compliance
                        reporting.
                      </Typography>
                    </Box>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: 102,
                            height: 32,
                            fontSize: 15,
                            mt: "12px",
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.7",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          EEOC Survey
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"87.5%",lg:"0%"},
                            right: {xs:"4%",lg:"0%"},
                      }}>
                        <Button
                          variant="contained"
                          position="relative"
                          sx={{
                            marginLeft: "760px",
                            width: {lg:"144px",xs:"110px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Enable
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          sx={{
                            width: {lg:"144px",xs:"110px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>

                    <Divider sx = {{mt:{xs:"15px",lg:"5px"},width:{lg:"1151px",xs:"510px"}}}/>

                    <Stack direction="row">
                      <Box component="div">
                        <Typography
                          variant="h6"
                          sx={{
                            width: 98,
                            height: 32,
                            fontSize: 16,
                            mt: {lg:"21px",xs:"25px"},
                            fontWeight: 600,
                            color: "#000000",
                            opacity: "0.7",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                          }}
                        >
                          Dispositions
                        </Typography>
                      </Box>

                      <ButtonGroup disableElevation sx={{
                            position: {xs:"absolute",lg:"relative"},
                            top: {xs:"90.25%",lg:"0%"},
                            right: {xs:"4.8%",lg:"0%"},
                      }}>
                        <Button
                          variant="contained"
                          position="relative"
                          sx={{
                            marginLeft: "650px",
                            marginTop: "10px",
                            width: {lg:"144px",xs:"110px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Required
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          sx={{
                            marginTop: "10px",
                            width: {lg:"144px",xs:"110px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#DADADA",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Optional
                        </Button>

                        <Button
                          variant="contained"
                          position="relative"
                          sx={{
                            marginTop: "10px",
                            width: {lg:"144px",xs:"110px"},
                            height: {lg:"38px",xs:"32px"},
                            backgroundColor: "#76D691",
                            color: "#1A344B",
                            borderRAdius: "2.70147px",
                            fontWeight: 600,
                            fontFamily: "Montserrat', sans-serif",
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Disabled
                        </Button>
                      </ButtonGroup>
                    </Stack>

                    <Divider sx = {{mt:{xs:"15px",lg:"5px"},width:{lg:"1151px",xs:"510px"}}}/>
                  </Box>
                </Stack>

                <Divider sx={{ mt:{lg:"150px",xs:"80px" }}} />

                <Box component="div">
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    sx={{
                      position: "relative",
                      marginLeft: {lg:"1010px",xs:"400px"},
                      marginTop: {lg:"40px",xs:"15px"},
                      width: {lg:"198px",xs:"150px"},
                      height: {lg:"46px",xs:"40px"},
                      backgroundColor: "#1A344B",
                      color: "#FFFFFF",
                      borderRAdius: "2.70147px",
                      fontSize: {lg:"17px",xs:"12.55px"},
                      fontWeight: 600,
                      fontFamily: "Montserrat', sans-serif",
                      fontStyle: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>

                <Modal onClose={handleClose} open={open}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: {lg:"50%",xs:"34%"},
                      left: {lg:"50%",xs:"40%"},
                      transform: "translate(-50%, -50%)",
                      width: {lg:760,xs:570},
                      height: 264,
                      bgcolor: "#FFFFFF",
                      borderRadius: "8px",
                      boxShadow: 24,
                    }}
                  >
                    <ModalDialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                      sx={{
                        mt: "20px",
                        ml: {lg:"50px",xs:"30px"},
                        width: 299,
                        height: 31,
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#1A344B",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      Google Apps Integration
                    </ModalDialogTitle>

                    <DialogContent>
                      <Typography
                        sx={{
                          mt: "22px",
                          ml: {lg:"50px",xs:"30px"},
                          mb: "35px",
                          width: 548,
                          height: 23,
                          fontSize: 18,
                          fontWeight: 400,
                          color: "#000000",
                          textTransform: "capitalize",
                          fontFamily: "Montserrat', sans-serif",
                          fontStyle: "normal",
                          opacity: "0.7",
                        }}
                      >
                        This feature isn't enabled on your current subscription
                        plan.
                      </Typography>
                    </DialogContent>

                    <Divider/>

                    <DialogActions sx={{ mt: "10px" }}>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        startIcon={<CloseIcon />}
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
                        Dismiss
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          ml: "30px",
                          width: "171px",
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
                        Upgrade Plan
                      </Button>
                    </DialogActions>
                  </Box>
                </Modal>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default General;
