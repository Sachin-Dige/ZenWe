import { AppBar, Toolbar, Button, Stack, Paper, Modal } from '@mui/material'
import React from 'react'
import logo from '../Images/logo.png'
 import settings from '../Images/setting.png'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import notification from '../Images/notification.png'
import buttonplus from '../Images/roundPlus.png'
import man from '../Images/man.png'
import question from '../Images/question.png'
// import num from '../Images/3.png'
// import background from '../Images/background.png'
import dashboard from '../Images/dashboardWhite.png'
import email from '../Images/email.png'
import task from '../Images/task.png'
import calender from '../Images/calender.png'
import reports from '../Images/reports.png'
import position from '../Images/positionFill.png'
import candidates from '../Images/candidates.png'
import grayround from '../Images/grayround.png';
import one from '../Images/one.png';
import two from '../Images/two.png';
import three from '../Images/three.png';
import deleteicon from '../Images/delete.png';
import purple from '../Images/purple.png';
import red from '../Images/red.png';
import green from '../Images/green.png';
import Setting from './Setting';
import { Link } from "react-router-dom";
import setting from "../Images/setting.png";
import roundPlus from "../Images/roundPlus.png";
import circle from "../Images/circle.png";

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

const Position = (props) => {
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
        <Box sx={{ ml: "-30px", mt: "40px" }}>
          <img src={setting} alt="" />
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
          fontWeight:"700"
        }}
      >
        {["Dashboard", "Inbox", "Tasks", "Calender", "Reports"].map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ margin: "44px 0px"}}>
              <ListItemButton sx={{ ml: "10px", pr: "0px" }}>
                <ListItemIcon>
                  {index === 0 ?<Link to="/dashboard" style={{paddingBottom:"0px"}}><img src={dashboard} alt="" style={{paddingBottom:"-10px"}}/></Link> : null}
                  {index === 1 ? <img src={email} alt="" /> : null}
                  {index === 2 ? <img src={task} alt="" /> : null}
                  {index === 3 ? <img src={calender} alt="" /> : null}
                  {index === 4 ? <img src={reports} alt="" /> : null}
                </ListItemIcon>
                <Typography
                  sx={
                     {
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
              <ListItemIcon
                 sx={
                  index === 0
                    ? {
                        background: "white",
                        color: "#1A344B",
                        fontWeight: "600",
                        borderRadius: "20px 0px 0px 20px",
                        p: "16px 0px 16px 12px",
                      }
                    : null
                }
              >
                {index === 0 ?<img src={position} alt="" />: null}
                {index === 1 ? <img src={candidates} alt="" /> : null}
              </ListItemIcon>
              <Typography sx={
                    index === 0
                      ? { width:"-webkit-fill-available",
                          background: "white",
                          color: "#1A344B",
                          p: "8px 0px 16px 12px",
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
                  }>{text}</Typography>
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
            ></IconButton>

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
                textTransform: "uppercase",
              }}
            >
              positions/groups
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
        <Box sx={{
                background:"#E5E5E5",
                width: "100%",
                height: "1120px"
        }}>
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
          <Box
            sx={{
              width: "1487px",
              height: "860px",
              background: "white",
              border: "1px solid #E4E3E3",
              position:"absolute",
              top:"220px"
            }}
          >
            <Box
              sx={{
                mt: "-60px",
                width: "1487px",
                height: "46px",
                display: "flex",
                justifyContent: "space-between",
                background: "#1A344B",
                borderRadius: "29px 29px 0px 0px",
              }}
            >
              <Box>
                <Button
                  sx={{
                    width: "105px",
                    height: "29px",
                    ml: "22px",
                    mt: "12px",
                    background: "#84AC04",
                    color: "white",
                    borderRadius: "14.5px",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Filter
                </Button>

                <Button
                  sx={{
                    width: "105px",
                    height: "29px",
                    ml: "8px",
                    mt: "12px",
                    background: "#FFFFFF",
                    color: "black",
                    borderRadius: "14.5px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontStyle: "normal",
                  }}
                >
                  <Box
                    sx={{
                      width: "77px",
                      textTransform: "capitalize",
                      display: "contents",
                    }}
                  >
                    all position
                  </Box>
                </Button>
              </Box>

              <Box>
                <Button
                  sx={{
                    width: "117px",
                    height: "29px",
                    mt: "12px",
                    mr: "14px",
                    background: "#84AC04",
                    color: "white",
                    borderRadius: "14.5px",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      width: "77px",
                      textTransform: "capitalize",
                      display: "contents",
                    }}
                  >
                    add position
                  </Box>
                </Button>
                <Button
                  sx={{
                    width: "111px",
                    height: "29px",
                    mt: "12px",
                    mr: "15px",
                    background: "#84AC04",
                    color: "white",
                    borderRadius: "14.5px",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      width: "77px",
                      textTransform: "capitalize",
                      display: "contents",
                    }}
                  >
                    add groups
                  </Box>
                </Button>
                <Button
                  sx={{
                    width: "111px",
                    height: "29px",
                    mt: "12px",
                    mr: "25px",
                    background: "#84AC04",
                    color: "white",
                    borderRadius: "14.5px",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      width: "77px",
                      textTransform: "capitalize",
                      display: "contents",
                    }}
                  >
                    export cSV
                  </Box>
                </Button>
              </Box>
            </Box>

            <Box
              sx={{ background: "#D4D3D3", width: "1487px", height: "31px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
            >
              <Stack direction="row">
                <Box sx={{ margin: "8px 0px 6px 101px" }}>
                  <img src={grayround} alt="" />
                </Box>

                <Box
                  sx={{
                    width: "98px",
                    height: "14px",
                    margin: "10px 0px 7px 25px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    hiring team
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 87px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "98px",
                    height: "14px",
                    margin: "10px 0px 7px 68px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    name
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 45px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "63px",
                    height: "18px",
                    margin: "10px 0px 7px 53px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    location
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 43px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "34px",
                    height: "18px",
                    margin: "10px 0px 7px 53px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    type
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 63px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "85px",
                    height: "18px",
                    margin: "10px 0px 7px 41px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    candidates
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 29px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "28px",
                    height: "18px",
                    margin: "10px 0px 7px 43px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    age
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #000000",
                    transform: "rotate(90deg)",
                    width: "16px",
                    height: "0px",
                    margin: "14px 0px 8px 52px",
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "98px",
                    height: "14px",
                    margin: "10px 0px 7px 56px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      lineHeight: "18px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "black",
                      opacity: "0.7",
                    }}
                  >
                    work time
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Stack>
              <Paper
                sx={{
                  margin: "21px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      18y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      25y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      18y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box
                    sx={{
                      width: "7px",
                      height: "76px",
                      background: "#B9BBFD",
                      borderRadius: "8px 0px 0px 8px",
                    }}
                  />

                  <Box sx={{ margin: "30px 0px 22px 77px" }}>
                    <img src={purple} alt="" />
                  </Box>
                  <Box sx={{ margin: "12px 0px 18px 24px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      19y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "white",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box
                    sx={{
                      width: "7px",
                      height: "76px",
                      background: "#FC3F33",
                      borderRadius: "8px 0px 0px 8px",
                    }}
                  />

                  <Box sx={{ margin: "30px 0px 22px 77px" }}>
                    <img src={red} alt="" />
                  </Box>
                  <Box sx={{ margin: "12px 0px 18px 24px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      22y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "white",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box
                    sx={{
                      width: "7px",
                      height: "76px",
                      background: "#84AC04",
                      borderRadius: "8px 0px 0px 8px",
                    }}
                  />

                  <Box sx={{ margin: "30px 0px 22px 77px" }}>
                    <img src={green} alt="" />
                  </Box>
                  <Box sx={{ margin: "12px 0px 18px 24px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      22y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      18y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>

              <Paper
                sx={{
                  margin: "7px 25px 0px 22px",
                  width: "1440px",
                  height: "78px",
                  background: "whitw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "12px",
                }}
              >
                <Stack direction="row">
                  <Box sx={{ margin: "12px 0px 18px 125px" }}>
                    <img src={one} alt="" />
                    <img src={two} alt="" style={{ marginLeft: "4px" }} />
                    <img src={three} alt="" style={{ marginLeft: "4px" }} />
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 42px",
                      width: "209px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      activities manager - chicago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 58px",
                      width: "96px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      chicago-USA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 103px",
                      width: "27px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      self
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 162px",
                      width: "13px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      13
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 135px",
                      width: "22px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      19y
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 100px",
                      width: "66px",
                      height: "18px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "18px",
                        color: "black",
                        opacity: "0.7",
                        textTransform: "capitalize",
                      }}
                    >
                      24h ago
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0px 30px 90px",
                      width: "24px",
                      height: "25px",
                    }}
                  >
                    <img src={deleteicon} alt="" />
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Position