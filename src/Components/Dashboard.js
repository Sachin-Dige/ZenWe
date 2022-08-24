import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menubar from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, Modal } from "@mui/material";
import logo from "../Images/logo.png";
import notification from "../Images/notification.png";
import question from "../Images/question.png";
import man from "../Images/man.png";
import calender from "../Images/calender.png";
import candidates from "../Images/candidates.png";
import roundPlus from "../Images/roundPlus.png";
import email from "../Images/email.png";
import position from "../Images/position.png";
import reports from "../Images/reports.png";
import task from "../Images/task.png";
import dashboard from "../Images/dashboard.png";
import circle from "../Images/circle.png";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import zero from "../Images/0.png";
import one from "../Images/1.png";
import two from "../Images/2.png";
import text1 from "../Images/text1.png";
import text2 from "../Images/text2.png";
import text3 from "../Images/text3.png";
import text4 from "../Images/text4.png";
import dot from "../Images/dot.png";
import bag1 from "../Images/bag.png";
import bag2 from "../Images/bag2.png";
import bagText from "../Images/bagText.png";
import bagArrow from "../Images/bagArrow.png";
import k from "../Images/circleK.png";
import kText from "../Images/kText.png";
import s from "../Images/circleS.png";
import sText from "../Images/sText.png";
import sText2 from "../Images/sText2.png";
import mark from "../Images/mark.png";
import markText from "../Images/markText.png";
import tick from "../Images/tick.png";
import tickText from "../Images/tickText.png";
import timer from "../Images/timer.png";
import group from "../Images/group.png";
import cale from "../Images/cale.png";
import caleText from "../Images/caleText.png";
import aText from "../Images/aText.png";
import aIcon from "../Images/aIcon.png";
import tT from "../Images/tT.png";
import bluebag from "../Images/bluebag.png";
import downarrow from "../Images/downarrow.png";
import yellowsetting from "../Images/yellowsetting.png";
import volume from "../Images/volume.png";
import person1 from "../Images/person1.png";
import person2 from "../Images/person2.png";
import person3 from "../Images/person3.png";
import person4 from "../Images/person4.png";
import plus from "../Images/plus.png";
import location from "../Images/location.png";
import background from "../Images/background.png";
import mailbox from "../Images/mailbox.png";
import ron from "../Images/ron.png";
import sandra from "../Images/sandra.png";
import keysha from "../Images/keysha.png";
import lindsay from "../Images/lindsay.png";
import syed from "../Images/syed.png";
import photoL from "../Images/photoL.png";
import photoS from "../Images/photoS.png";
import photoK from "../Images/photoK.png";
import setting from "../Images/setting.png";
import Setting from "./Setting";
import { Link } from "react-router-dom";

const drawerWidth = 282;

// MODAL - CSS
const style = {
  position: "absolute",
  top: "50%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: 306,
  height: 780,
  boxShadow: 24,
};

const Dashboard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ display: "flex", mt: "10px", mb: "-60px" }}>
        <img src={logo} alt="" />
        <Box sx={{ ml: "-30px", mt: "40px", width:"24px",height:"44px",pb:"20px"}}>

      <IconButton>
        <img src={setting} alt="" onClick={handleOpen}/>
      </IconButton>
        </Box>
      </Box>

      <Toolbar />
      <Divider />
      <List
        sx={{
          background: "#1A344B",
          color: "white",
          fontSize: "19.44px",
          fontFamily: "'Montserrat', sans-serif",
          height: "527px",
          lineHeight: "64px",
          fontWeight:"700"
        }}
      >
        {["Dashboard", "Inbox", "Tasks", "Calender", "Reports"].map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ margin: "44px 0px"}}>
              <ListItemButton sx={{ ml: "10px", pr: "0px" }}>
                <ListItemIcon
                  sx={
                    index === 0
                      ? {
                          background: "white",
                          color: "#1A344B",
                          fontWeight: "600",
                          borderRadius: "20px 0px 0px 20px",
                          p: "20px 0px 16px 12px",
                          ml: "-12px",
                        }
                      : null
                  }
                >
                  {index === 0 ? <img src={dashboard} alt="" /> : null}
                  {index === 1 ? <img src={email} alt="" /> : null}
                  {index === 2 ? <img src={task} alt="" /> : null}
                  {index === 3 ? <img src={calender} alt="" /> : null}
                  {index === 4 ? <img src={reports} alt="" /> : null}
                </ListItemIcon>
                <Typography
                  sx={
                    index === 0
                      ? { width:"-webkit-fill-available",
                          background: "white",
                          color: "#1A344B",
                          p: "15px 0px 16px 12px",
                          fontWeight: "600",
                          fontSize:"19.5px",
                          fontFamily: "'Montserrat', sans-serif",
                        }
                      : {
                      fontSize:"19.5px",
                      color: "white",
                      fontWeight: "600",
                      fontFamily: "'Montserrat', sans-serif",
                    }
                  }
                >{text}</Typography>
              </ListItemButton> 
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List sx={{ background: "#1A344B", color: "white", height: "304px" }}>
        {["Position", "Candidates"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ margin: "34px 0px" }}>
            <ListItemButton> 
              <ListItemIcon sx={{ color: "white", ml: "8px" }}>
                {index === 0 ? <Link to="/position"><img src={position} alt="" /></Link> : null}
                {index === 1 ? <img src={candidates} alt="" /> : null}
              </ListItemIcon>
              <Typography sx={{
                width:"116px",
                  fontSize:"19.5px",
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "'Montserrat', sans-serif",
              }}>{text}</Typography>
              <Box component="img" src={roundPlus} alt="Image not found" 
              sx={{ml:"25px"}}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={style}>
            <Setting />
          </Box>
        </>
      </Modal>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: "white",
            height: "121px",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menubar />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "#1A344B",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight: "46px",
                fontFamily: "'Montserrat', sans-serif",
                mt: "44px",
              }}
            >
              Dashboard
            </Typography>

            <Box
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "space-between",
                width: "290px",
                height: "40px",
                mt: "30px",
              }}
            >
              <Box position="absolute" ml="15px" top="-4px">
                <img src={circle} alt="" sx={{}} />
              </Box>
              <img src={notification} alt="" />
              <img src={question} alt="" />
              <Button onClick={handleOpen}>
                <img src={man} alt="" />
              </Button>
              <Typography
                sx={{
                  color: "#1A344B",
                  ml: "-20px",
                  fontWeight: "700",
                  mt: "10px",
                  fontSize: "18px",
                }}
              >
                joshua bass
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {/* 2nd - PART */}

          <Box sx={{ marginTop: "55px",ml:{lg:"0px",xs:"60px"}}}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "358px",
                  height: "128px",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",
                  background: "#FFFFFF",
                },
              }}
            >
                <Box sx={{display:"flex",width:"20%",justifyContent:"space-between"}}>
              <Paper variant="outlined">
                <Box
                  sx={{
                    position:"absolute",
                    width: "75.52px",
                    height: "75.52px",
                    left: {lg:"326px",xs:"110px"},
                    top: "172px",
                  }}
                >
                  <img src={card1} alt="Image loading failed" />
                </Box>
                <Box
                  component="div"
                  sx={{
                    position:"absolute",
                    width: "1px",
                    height: "110px",
                    left: {lg:"422px",xs:"210px"},
                    top: "158px",
                    background: "#1A344B",
                    opacity: "0.5",
                  }}
                ></Box>
                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: "162px",
                    ml: "175px",
                  }}
                >
                  <img src={zero} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: "222px",
                    ml: "155px",
                  }}
                >
                  <img src={text1} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: "158px",
                    ml: "325px",
                  }}
                >
                  <img src={dot} alt="Image loading failed" />
                </Box>
              </Paper>
                </Box>

              <Paper variant="outlined">
                <Box
                  sx={{
                    position:"absolute",
                    width: "75.52px",
                    height: "75.52px",
                    left: {lg:"716px",xs:"108px"},
                    top: {lg:"172px",xs:"320px"},
                  }}
                >
                  <img src={card2} alt="Image loading failed" />
                </Box>
                <Box
                  component="div"
                  sx={{
                    position:"absolute",
                    width: "1px",
                    height: "110px",
                    left: {lg:"822px",xs:"210px"},
                    top: {lg:"156px",xs:"296px"},
                    background: "#1A344B",
                    opacity: "0.5",
                  }}
                ></Box>
                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"162px",xs:"305px"},
                    ml: {lg:"210px",xs:"185px"},
                  }}
                >
                  <img src={one} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"222px",xs:"360px"},
                    ml: {lg:"175px",xs:"150px"},
                  }}
                >
                  <img src={text2} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"158px",xs:"300px"},
                    ml: "325px",
                  }}
                >
                  <img src={dot} alt="Image loading failed" />
                </Box>
              </Paper>

              <Paper variant="outlined">
                <Box
                  sx={{
                    position:"absolute",
                    width: "75.52px",
                    height: "75.52px",
                    left: {lg:"1076px",xs:"108px"},
                    top: {lg:"162px",xs:"445px"},
                  }}
                >
                  <img src={card3} alt="Image loading failed" />
                </Box>
                <Box
                  component="div"
                  sx={{
                    position:"absolute",
                    width: "1px",
                    height: "110px",
                    left: {lg:"1170px",xs:"210px"},
                    top: {lg:"156px",xs:"440px"},
                    background: "#1A344B",
                    opacity: "0.5",
                  }}
                ></Box>
                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"162px",xs:"450px"},
                    ml: "180px",
                  }}
                >
                  <img src={two} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"222px",xs:"510px"},
                    ml: "150px",
                  }}
                >
                  <img src={text3} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"158px",xs:"440px"},
                    ml: "325px",
                  }}
                >
                  <img src={dot} alt="Image loading failed" />
                </Box>
              </Paper>

              <Paper variant="outlined">
                <Box
                  sx={{
                    position:"absolute",
                    width: "75.52px",
                    height: "75.52px",
                    left: {lg:"1440px",xs:"100px"},
                    top: {lg:"172px",xs:"600px"},
                  }}
                >
                  <img src={card4} alt="Image loading failed" />
                </Box>
                <Box
                  component="div"
                  sx={{
                    position:"absolute",
                    width: "1px",
                    height: "110px",
                    left: {lg:"1540px",xs:"210px"},
                    top: {lg:"156px",xs:"586px"},
                    background: "#1A344B",
                    opacity: "0.5",
                  }}
                ></Box>
                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"162px",xs:"595px"},
                    ml: "175px",
                  }}
                >
                  <img src={zero} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"222px",xs:"654px"},
                    ml: "150px",
                  }}
                >
                  <img src={text4} alt="Image loading failed" />
                </Box>

                <Box
                  sx={{
                    position:"absolute",
                    width: "44px",
                    height: "78.06px",
                    lineHeight: "114.4%",
                    top: {lg:"158px",xs:"585px"},
                    ml: "325px",
                  }}
                >
                  <img src={dot} alt="Image loading failed" />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 3rd - PART */}
      <Box sx={{ ml: {lg:"315px",xs:"30px",md:"325px"} }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          direction="columns"
        >
          {/* GRID - 1 */}
          <Grid item xs={4} md={4} lg={3}>
            <Paper
              elevation={8}
              sx={{
                width: "467.36px",
                height: "787.93px",
                background: "#F7F2F2",
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  width: "467px",
                  height: "787px",
                  background: "#F6F2F2",
                  textTransform: "capitalize",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width: "15px",
                      height: "14px",
                      marginTop: "15px",
                      marginLeft: "18px",
                    }}
                  >
                    <img src={bluebag} id="dummy" alt="" />
                  </Box>
                  <Box
                    sx={{
                      marginTop: "14px",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography className="Typography"
                     sx={{ fontWeight: "700", color: "#1A344B" }}>
                      My Positions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "12px",
                      height: "9px",
                      marginTop: "14px",
                      marginLeft: "3px",
                      mb: "25px",
                    }}
                  >
                    <img src={downarrow} id="dummy" alt="" />
                  </Box>
                </Box>

                <Paper
                  sx={{ width: "425px", height: "675px", marginLeft: "22px" }}
                >
                  <Box sx={{ display: "flex", width: "405px", height: "21px" }}>
                    <Box sx={{ margin: "20px 0px 0px 7px" }}>
                      <img src={background} alt="" width="12px" height="12px" />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "12px",
                        width: "236px",
                        height: "21px",
                        marginTop: "18px",
                      }}
                    >
                      <Typography sx={{ color: "#1A344B" }}>
                        activities manager - pawnee
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "39px", marginTop: "20px" }}>
                      <Button
                        sx={{
                          width: "72px",
                          height: "18px",
                          background: "#84AC04",
                        }}
                        onClick={handleOpen}
                      >
                        <img src={volume} alt="" />
                        <span
                          style={{
                            width: "60px",
                            height: "7px",
                            fontSize: "11px",
                            fontFamily: "Nunito",
                            lineHeight: "15px",
                            marginTop: "-4px",
                            color: "white",
                          }}
                        >
                          Promote
                        </span>
                      </Button>
                    </Box>
                    <Box sx={{ marginRight: "-20px", marginTop: "20px" }}>
                      <Button sx={{ width: "25px", height: "18px" }}>
                        <img src={yellowsetting} alt="" />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "405px",
                      height: "21px",
                      mt: "30px",
                    }}
                  >
                    <img style={{ marginLeft: "7px" }} src={location} alr="" />

                    <Typography
                      sx={{
                        ml: "12px",
                        opacity: "60%",
                        color: "black",
                        fontSize: "11px",
                      }}
                    >
                      Remote
                    </Typography>
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "163px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Pipeline
                    </Typography>
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "13px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Candidates
                    </Typography>
                    {/* </Box> */}
                  </Box>

                  <Box sx={{ mt: "20px", display: "flex" }}>
                    <img
                      src={person1}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person2}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person3}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person4}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={plus}
                      alt=""
                      style={{
                        width: "7.2px",
                        height: "7px",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "425px",
                      height: "0px",
                      border: " 0.900491px solid #1A344B",
                      opacity: "0.5",
                      marginTop: "12px",
                    }}
                  ></Box>

                  <Box sx={{ display: "flex", width: "405px", height: "21px" }}>
                    <Box sx={{ margin: "18px 0px 0px 7px" }}>
                      <img src={background} alt="" width="12px" height="12px" />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "12px",
                        width: "236px",
                        height: "21px",
                        marginTop: "16px",
                      }}
                    >
                      <Typography sx={{ color: "#1A344B" }}>
                        director of parks & recreation
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "39px", marginTop: "20px" }}>
                      <Button
                        sx={{
                          width: "72px",
                          height: "18px",
                          background: "#84AC04",
                        }}
                      >
                        <img src={volume} alt="" />
                        <span
                          style={{
                            width: "60px",
                            height: "7px",
                            fontSize: "11px",
                            fontFamily: "Nunito",
                            lineHeight: "15px",
                            marginTop: "-4px",
                            color: "white",
                          }}
                        >
                          Promote
                        </span>
                      </Button>
                    </Box>
                    <Box sx={{ marginRight: "-20px", marginTop: "20px" }}>
                      <Button sx={{ width: "25px", height: "18px" }}>
                        <img src={yellowsetting} alt="" />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "405px",
                      height: "21px",
                      mt: "36px",
                    }}
                  >
                    <img style={{ marginLeft: "7px" }} src={location} alr="" />
                    <Typography
                      sx={{
                        mt: "-1px",
                        ml: "14px",
                        opacity: "60%",
                        color: "black",
                        fontSize: "11px",
                      }}
                    >
                      pawnee, IN
                    </Typography>
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "31px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "163px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Pipeline
                    </Typography>
                    {/* </Box><Box sx={{ marginTop: "31px",marginRight:"19px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "13px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Candidates
                    </Typography>
                    {/* </Box> */}
                  </Box>

                  <Box sx={{ mt: "20px", display: "flex" }}>
                    <img
                      src={person1}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person2}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person3}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person4}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={plus}
                      alt=""
                      style={{
                        width: "7.2px",
                        height: "7px",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "425px",
                      height: "0px",
                      border: " 0.900491px solid #1A344B",
                      opacity: "0.5",
                      marginTop: "12px",
                    }}
                  ></Box>

                  <Box sx={{ display: "flex", width: "405px", height: "21px" }}>
                    <Box sx={{ margin: "20px 0px 0px 7px" }}>
                      <img src={background} alt="" width="12px" height="12px" />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "12px",
                        width: "236px",
                        height: "21px",
                        marginTop: "18px",
                      }}
                    >
                      <Typography sx={{ color: "#1A344B", width: "221.5px" }}>
                        talent to consider for director
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "39px", marginTop: "20px" }}>
                      <Button
                        sx={{
                          width: "72px",
                          height: "18px",
                          background: "#84AC04",
                          mr: "-7px",
                        }}
                      >
                        <img src={volume} alt="" />
                        <span
                          style={{
                            width: "60px",
                            height: "7px",
                            fontSize: "11px",
                            fontFamily: "Nunito",
                            lineHeight: "15px",
                            marginTop: "-4px",
                            color: "white",
                          }}
                        >
                          Promote
                        </span>
                      </Button>
                    </Box>
                    <Box sx={{ marginTop: "20px" }}>
                      <Button sx={{ width: "25px", height: "18px" }}>
                        <img src={yellowsetting} alt="" />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "405px",
                      height: "21px",
                      mt: "30px",
                    }}
                  >
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <img style={{ marginLeft: "7px" }} src={location} alr="" />
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <Typography
                      sx={{
                        ml: "12px",
                        opacity: "60%",
                        color: "black",
                        fontSize: "11px",
                      }}
                    >
                      candidate pool
                    </Typography>
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "31px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "163px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Pipeline
                    </Typography>
                    {/* </Box><Box sx={{ marginTop: "31px",marginRight:"19px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "13px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Candidates
                    </Typography>
                    {/* </Box> */}
                  </Box>

                  <Box sx={{ mt: "20px", display: "flex" }}>
                    <img
                      src={person1}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person2}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person3}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person4}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={plus}
                      alt=""
                      style={{
                        width: "7.2px",
                        height: "7px",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "425px",
                      height: "0px",
                      border: " 0.900491px solid #1A344B",
                      opacity: "0.5",
                      marginTop: "12px",
                    }}
                  ></Box>

                  <Box sx={{ display: "flex", width: "405px", height: "21px" }}>
                    <Box sx={{ margin: "20px 0px 0px 7px" }}>
                      <img src={background} alt="" width="12px" height="12px" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: "12px",
                        width: "236px",
                        height: "21px",
                        marginTop: "18px",
                      }}
                    >
                      <Typography sx={{ color: "#1A344B" }}>
                        Deputy Director of parks and Recreation
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "39px", marginTop: "20px" }}>
                      <Button
                        sx={{
                          width: "72px",
                          height: "18px",
                          background: "#84AC04",
                        }}
                      >
                        <img src={volume} alt="" />
                        <span
                          style={{
                            width: "60px",
                            height: "7px",
                            fontSize: "11px",
                            fontFamily: "Nunito",
                            lineHeight: "15px",
                            marginTop: "-4px",
                            color: "white",
                          }}
                        >
                          Promote
                        </span>
                      </Button>
                    </Box>
                    <Box sx={{ marginRight: "-20px", marginTop: "20px" }}>
                      <Button sx={{ width: "25px", height: "18px" }}>
                        <img src={yellowsetting} alt="" />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "405px",
                      height: "21px",
                      mt: "55px",
                    }}
                  >
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <img style={{ marginLeft: "7px" }} src={location} alr="" />
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <Typography
                      sx={{
                        ml: "12px",
                        opacity: "60%",
                        color: "black",
                        fontSize: "11px",
                      }}
                    >
                      Pawnee, IN
                    </Typography>
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "31px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "163px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Pipeline
                    </Typography>
                    {/* </Box><Box sx={{ marginTop: "31px",marginRight:"19px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "13px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Candidates
                    </Typography>
                    {/* </Box> */}
                  </Box>

                  <Box sx={{ mt: "20px", display: "flex" }}>
                    <img
                      src={person1}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person2}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person3}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person4}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={plus}
                      alt=""
                      style={{
                        width: "7.2px",
                        height: "7px",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "425px",
                      height: "0px",
                      border: "0.900491px solid #1A344B",
                      opacity: "0.5",
                      marginTop: "12px",
                    }}
                  ></Box>

                  <Box sx={{ display: "flex", width: "405px", height: "21px" }}>
                    <Box sx={{ margin: "20px 0px 0px 7px" }}>
                      <img src={background} alt="" width="12px" height="12px" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: "12px",
                        width: "236px",
                        height: "21px",
                        marginTop: "18px",
                      }}
                    >
                      <Typography sx={{ color: "#1A344B" }}>
                        paid Intern
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "39px", marginTop: "20px" }}>
                      <Button
                        sx={{
                          width: "72px",
                          height: "18px",
                          background: "#84AC04",
                        }}
                      >
                        <img src={volume} alt="" />
                        <span
                          style={{
                            width: "60px",
                            height: "7px",
                            fontSize: "11px",
                            fontFamily: "Nunito",
                            lineHeight: "15px",
                            marginTop: "-4px",
                            color: "white",
                          }}
                        >
                          Promote
                        </span>
                      </Button>
                    </Box>
                    <Box sx={{ marginRight: "-20px", marginTop: "20px" }}>
                      <Button sx={{ width: "25px", height: "18px" }}>
                        <img src={yellowsetting} alt="" />{" "}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "405px",
                      height: "21px",
                      mt: "30px",
                    }}
                  >
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <img style={{ marginLeft: "7px" }} src={location} alr="" />
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "22px" }}> */}
                    <Typography
                      sx={{
                        ml: "12px",
                        opacity: "60%",
                        color: "black",
                        fontSize: "11px",
                      }}
                    >
                      Pawnee, IN
                    </Typography>
                    {/* </Box> */}
                    {/* <Box sx={{ marginTop: "31px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "163px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Pipeline
                    </Typography>
                    {/* </Box><Box sx={{ marginTop: "31px",marginRight:"19px" }}> */}
                    <Typography
                      sx={{
                        mt: "22px",
                        ml: "13px",
                        color: "black",
                        fontSize: "11px",
                        opacity: "60%",
                      }}
                    >
                      Candidates
                    </Typography>
                    {/* </Box> */}
                  </Box>

                  <Box sx={{ mt: "20px", display: "flex" }}>
                    <img
                      src={person1}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person2}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person3}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={person4}
                      alt=""
                      style={{
                        marginLeft: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <img
                      src={plus}
                      alt=""
                      style={{
                        width: "7.2px",
                        height: "7px",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                </Paper>
              </Paper>
            </Paper>
          </Grid>

          {/* GRID - 2 */}
          <Grid item xs={4} md={4} lg={3}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Paper
                  elevation={8}
                  sx={{
                    width: "467.36px",
                    height: "393.93px",
                    background: "#F7F2F2",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "40%",
                      ml: "12px",
                    }}
                  >
                    <Box sx={{ mt: "14.6px", paddingLeft: "20px" }}>
                      <img src={bag1} alt="Image loading failed" />

                      <img src={bagText} alt="Image loading failed" />

                      <img src={bagArrow} alt="Image loading failed" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Paper
                      variant="outlined"
                      sx={{
                        width: "413.33px",
                        height: "230.22px",
                        left: "829.01px",
                        background: "#FFFFFF",
                        borderRadius: "9.00491px 9.00491px 0px 0px",
                        mt: "15.42px",
                      }}
                    >
                      <Box sx={{ mb: "56px" }}>
                        <Box
                          sx={{
                            width: "43.22px",
                            height: "43.22px",
                            mt: "23px",
                            ml: "12.59px",
                          }}
                        >
                          <img src={k} alt="" />
                        </Box>
                        <Box
                          sx={{
                            width: "75px",
                            height: "21px",
                            mt: "-38px",
                            ml: "68px",
                          }}
                        >
                          <img src={kText} alt="" />
                        </Box>
                        <Box
                          sx={{
                            mt: "8px",
                            ml: "68px",
                          }}
                        >
                          <img src={bag2} alt="" />
                        </Box>
                        <Box
                          sx={{
                            ml: "85px",
                            mt: "-25px",
                            width: "167.92px",
                            height: "17.11px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontSize: "12.6069px",
                              fontWeight: "200",
                              color: "#1A344B",
                              opacity: "0.4",
                            }}
                          >
                            Deputy Director Of Parks And Recre.....
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          width: "413.33px",
                          height: "0px",
                          mt: "-24px",
                          opacity: "0.7",
                          border: "0.900491px solid rgba(0, 0, 0, 0.5)",
                        }}
                      />

                      <Box sx={{ mb: "56px" }}>
                        <Box
                          sx={{
                            width: "43.22px",
                            height: "43.22px",
                            mt: "23px",
                            ml: "12.59px",
                          }}
                        >
                          <img src={s} alt="" />
                        </Box>
                        <Box
                          sx={{
                            width: "75px",
                            height: "21px",
                            mt: "-38px",
                            ml: "68px",
                          }}
                        >
                          <img src={sText} alt="" />
                        </Box>
                        <Box
                          sx={{
                            width: "75px",
                            height: "21px",
                            mt: "-4px",
                            ml: "68px",
                          }}
                        >
                          <img src={sText2} alt="" />
                        </Box>
                        <Box
                          sx={{
                            mt: "4px",
                            ml: "68px",
                          }}
                        >
                          <img src={bag2} alt="" />
                        </Box>
                        <Box
                          sx={{
                            ml: "85px",
                            mt: "-24px",
                            width: "167.92px",
                            height: "17.11px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontSize: "12.6069px",
                              fontWeight: "200",
                              color: "#1A344B",
                              opacity: "0.4",
                            }}
                          >
                            Deputy Director Of Parks And Recre.....
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>

              {/* GRID - [2-2] */}
              <Grid item>
                <Paper
                  elevation={8}
                  sx={{
                    width: "467.36px",
                    height: "385px",
                    background: "#F7F2F2",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "22%",
                      ml: "12px",
                    }}
                  >
                    <Box sx={{ mt: "22px" }}>
                      <img src={mark} alt="Image loading failed" />

                      <img src={markText} alt="Image loading failed" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Paper
                      variant="outlined"
                      sx={{
                        width: "413.33px",
                        height: "110.22px",
                        left: "829.01px",
                        background: "#FFFFFF",
                        borderRadius: "9.00491px 9.00491px 0px 0px",
                        mt: "15.42px",
                      }}
                    >
                      <Box sx={{ mb: "56px" }}>
                        <Box
                          sx={{
                            width: "43.22px",
                            height: "43.22px",
                            mt: "23px",
                            ml: "12.59px",
                          }}
                        >
                          <img src={tick} alt="" />
                        </Box>
                        <Box
                          sx={{
                            width: "75px",
                            height: "21px",
                            mt: "-42px",
                            ml: "44px",
                          }}
                        >
                          <img src={tickText} alt="" />
                        </Box>

                        <Box
                          sx={{
                            mt: "8px",
                            ml: "42px",
                          }}
                        >
                          <img src={timer} alt="" />
                        </Box>
                        <Box
                          sx={{
                            ml: "64px",
                            mt: "-25px",
                            width: "167.92px",
                            height: "17.11px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontSize: "12.6069px",
                              fontWeight: "200",
                              color: "#1A344B",
                              opacity: "0.8",
                            }}
                          >
                            Due Tomorrow
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            ml: "170px",
                            mt: "-14px",
                          }}
                        >
                          <img src={group} alt="" />
                        </Box>
                        <Box
                          sx={{
                            ml: "190px",
                            mt: "-32px",
                            width: "167.92px",
                            height: "17.11px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontSize: "12.6069px",
                              fontWeight: "200",
                              color: "#1A344B",
                              opacity: "0.8",
                            }}
                          >
                            You
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* GRID - 3 */}
          <Grid item xs={4} md={4} lg={3}>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 2, md: 2 }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Paper
                  elevation={8}
                  sx={{
                    width: "467.36px",
                    height: "188.5px",
                    background: "#F7F2F2",
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      width: "85%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "38%",
                        mt: "10px",
                      }}
                    >
                      <img src={cale} alt="" />

                      <img src={caleText} alt="" />
                    </Box>
                    <Box sx={{ ml: "40px", mt: "11px" }}>
                      <img src={aText} alt="" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "30%",
                        ml: "40px",
                        mt: "11px",
                        mb: "16px",
                      }}
                    >
                      <img src={timer} alt="" />

                      <img src={tT} alt="" />
                    </Box>
                    <Box>
                      <img src={aIcon} alt="" />
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              {/* GRID - 3-2 */}
              <Grid item>
                <Paper
                  elevation={8}
                  sx={{
                    width: "467.36px",
                    height: "582.5px",
                    background: "#F7F2F2",
                    borderRadius: "9.00491px 9.00491px 0px 0px",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "15px",
                        height: "14px",
                        marginTop: "15px",
                        marginLeft: "18px",
                      }}
                    >
                      <img src={mailbox} id="dummy" alt="" />
                    </Box>
                    <Box
                      sx={{
                        marginTop: "14px",
                        marginLeft: "10px",
                        color: "#1A344B",
                      }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        All Conversation
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "12px",
                        height: "9px",
                        marginTop: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      <img src={downarrow} id="dummy" alt="" />
                    </Box>
                  </Box>
                  <Paper sx={{ margin: "12px 23px 0px 25px" }}>
                    <Box
                      sx={{
                        width: "421px",
                        height: "492px",
                        background: "white",
                        borderRadius: "9.00491px 9.00491px 0px 0px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "14px",
                        }}
                      >
                        <img
                          src={ron}
                          alt=""
                          style={{
                            width: "35px",
                            height: "35px",
                            marginLeft: "21px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontWeight: 600,
                            marginRight: "175px",
                          }}
                        >
                          Ron Swanson
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginRight: "12px",
                          }}
                        >
                          28d Ago
                        </Typography>
                      </Box>

                      <Box sx={{ position: "relative", left: "78px" }}>
                        <Typography
                          sx={{
                            marginLeft: "0px",
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            marginTop: "-12px",
                            lineHeight: "124.4%",
                          }}
                        >
                          Agreed. why would anybody ever eat anything besides
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "420px",
                          height: "0px",
                          color: "black",
                          border: " 0.900491px solid #000000",
                          opacity: "0.5",
                          marginTop: "18px",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "14px",
                        }}
                      >
                        <img
                          src={sandra}
                          alt=""
                          style={{
                            width: "35px",
                            height: "35px",
                            marginLeft: "21px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontWeight: 600,
                            marginRight: "185px",
                          }}
                        >
                          Sandra Sasa
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginRight: "12px",
                          }}
                        >
                          1mo Ago
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative", left: "76px" }}>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            marginTop: "-12px",
                            lineHeight: "14px",
                          }}
                        >
                          test sandra sosa lorem ipsum is a dummy
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "420px",
                          height: "0px",
                          color: "black",
                          border: " 0.900491px solid #000000",
                          opacity: "0.5",
                          marginTop: "18px",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "14px",
                        }}
                      >
                        <img
                          src={syed}
                          alt=""
                          style={{
                            width: "35px",
                            height: "35px",
                            marginLeft: "21px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontWeight: 600,
                            marginRight: "115px",
                          }}
                        >
                          Syed Saimur Rahman
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginRight: "22px",
                          }}
                        >
                          5h Ago
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative", left: "78px" }}>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "13px",
                            fontWeight: 600,
                            marginTop: "-12px",
                            lineHeight: "17px",
                            textTransform: "capitalize",
                          }}
                        >
                          Head of Sales learner nation
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", marginTop: "8px" }}>
                        <img
                          src={photoL}
                          alt=""
                          style={{ marginLeft: "32px" }}
                        />
                        <Box
                          sx={{
                            width: "3px",
                            height: "20px",
                            background: "#84AC04",
                            borderRadius: "1.80px",
                            marginLeft: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "14px",
                            textTransform: "capitalize",
                            color: "#1A344B",
                            marginLeft: "3px",
                          }}
                        >
                          Hi, syed, you re confirmed for the following inter....
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "420px",
                          height: "0px",
                          color: "black",
                          border: " 0.900491px solid #000000",
                          opacity: "0.5",
                          marginTop: "18px",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "14px",
                        }}
                      >
                        <img
                          src={lindsay}
                          alt=""
                          style={{
                            width: "35px",
                            height: "35px",
                            marginLeft: "21px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontWeight: 600,
                            marginRight: "148px",
                          }}
                        >
                          Lindsay Fernadez
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginRight: "22px",
                          }}
                        >
                          5h Ago
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative", left: "74px" }}>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "13px",
                            fontWeight: 600,
                            marginTop: "-12px",
                            lineHeight: "17px",
                            textTransform: "capitalize",
                          }}
                        >
                          senior project manager vizergy
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", marginTop: "8px" }}>
                        <img
                          src={photoK}
                          alt=""
                          style={{ marginLeft: "32px" }}
                        />
                        <Box
                          sx={{
                            width: "3px",
                            height: "20px",
                            background: "#84AC04",
                            borderRadius: "1.80px",
                            marginLeft: "16.5px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "14px",
                            textTransform: "capitalize",
                            color: "#1A344B",
                            marginLeft: "3px",
                          }}
                        >
                          hi, lindsey please sign.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "420px",
                          height: "0px",
                          color: "black",
                          border: " 0.900491px solid #000000",
                          opacity: "0.5",
                          marginTop: "18px",
                        }}
                      ></Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "14px",
                        }}
                      >
                        <img
                          src={keysha}
                          alt=""
                          style={{
                            width: "35px",
                            height: "35px",
                            marginLeft: "21px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontWeight: 600,
                            marginRight: "10px",
                          }}
                        >
                          Keysha Rolon
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            marginLeft: "172px",
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "16px",
                            marginRight: "20px",
                          }}
                        >
                          5h Ago
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative", left: "72px" }}>
                        <Typography
                          sx={{
                            color: "#1A344B",
                            fontSize: "13px",
                            fontWeight: 600,
                            marginTop: "-12px",
                            lineHeight: "17px",
                            textTransform: "capitalize",
                          }}
                        >
                          USA West Markets sales executive xYZCO
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", marginTop: "8px" }}>
                        <img
                          src={photoS}
                          alt=""
                          style={{ marginLeft: "32px" }}
                        />
                        <Box
                          sx={{
                            width: "3px",
                            height: "20px",
                            background: "#84AC04",
                            borderRadius: "1.80px",
                            marginLeft: "14.5px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 600,
                            lineHeight: "14px",
                            textTransform: "capitalize",
                            color: "#1A344B",
                            marginLeft: "3px",
                          }}
                        >
                          hi, keysha. we’d like to ask you a few more que....
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
