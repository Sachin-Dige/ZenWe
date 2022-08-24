import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import cross from "../Images/cross.png";
import bg from "../Images/bg.png";
import general from "../Images/general.png";
import users from "../Images/users.png";
import permission from "../Images/permission.png";
import teams from "../Images/team.png";
import billing from "../Images/billing.png";

const CompanySetting = ({ click, setClick }) => {
  const navigate = useNavigate();

  var contents = ["General", "Users", "Permission", "Teams", "Billing"];

  const dummy = async (sidebar) => {
    await setClick(sidebar);
    if (sidebar === "General") {
      await navigate("/general");
    } else if (sidebar === "Teams") {
      await navigate("/teams");
    } else if (sidebar === "Billing") {
      await navigate("/billing");
    } else if (sidebar === "Users") {
      await navigate("/users");
    }
  };

  return (
    <Box
      sx={{
        pl: { lg: "114px", xs: "25px" },
        pr: { lg: "114px", xs: "25px" },
        display: "grid",
      }}
    >
      <Box>
        <Toolbar
          sx={{
            background: "white",
            color: "#1A344B",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: "60px",
              mb: "56px",
            }}
          >
            <Typography
              component="div"
              sx={{
                width: "337px",
                height: "46px",
                fontSize: "36px",
                lineHeight: "46px",
                fontWeight: "600",
                color: "#1A344B",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Company Setting
            </Typography>
            <Button color="inherit">
              <Link
                to="/dashboard"
                style={{ color: "#1A344B", textDecoration: "none" }}
              >
                <img src={cross} alt="Image" />
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Box>

      {/* SIDE BAR */}
      {/* <Box sx={{ width: '180px',mt:"12px" }}>
        <List>
          <ListItem disablePadding>
          <Link to="/general" style={{textDecoration:"none"}}>
            <ListItemButton sx={{mb:"26px"}}>
              <ListItemIcon  sx={{mr:"18px"}}>
                <Box component="img" src={bg}/>
                <Box component="img" src={general} sx={{ml:"-30px",
              width: "24px",
              height: "24px",
              mt:"5.5px"
              }}/>
              </ListItemIcon>
              <Typography sx={{
                color:"#1A344B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight:"600",
                fontSize:"20px",
                width: "139px",
                height: "36px",
                ml:"-18px"
                }}>General</Typography>
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/users" style={{textDecoration:"none"}}>
            <ListItemButton sx={{mb:"26px"}}>
              <ListItemIcon  sx={{mr:"18px"}}>
              <Box component="img" src={bg}/>
                <Box component="img" src={users} sx={{ml:"-30px",
              width: "24px",
              height: "24px",
              mt:"5.5px"
              }}/>
              </ListItemIcon>
              <Typography sx={{
                color:"#1A344B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight:"600",
                fontSize:"20px",
                width: "139px",
                height: "36px",
                ml:"-18px"
                }}>Users</Typography>
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/users" style={{textDecoration:"none"}}>
            <ListItemButton sx={{mb:"26px"}} disabled>
              <ListItemIcon sx={{mr:"18px"}}>
              <Box component="img" src={bg}/>
                <Box component="img" src={permission} sx={{ml:"-30px",
              width: "24px",
              height: "24px",
              mt:"5.5px"
              }}/>
              </ListItemIcon>
              <Typography sx={{
                color:"#1A344B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight:"600",
                fontSize:"20px",
                width: "139px",
                height: "36px",
                ml:"-18px"
                }}>Permissions</Typography>
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/teams" style={{textDecoration:"none"}}>
            <ListItemButton sx={{mb:"26px"}}>
              <ListItemIcon  sx={{mr:"18px"}}>
              <Box component="img" src={bg}/>
                <Box component="img" src={teams} sx={{ml:"-30px",
              width: "24px",
              height: "24px",
              mt:"5.5px"
              }}/>
              </ListItemIcon>
              <Typography sx={{
                color:"#1A344B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight:"600",
                fontSize:"20px",
                width: "139px",
                height: "36px",
                ml:"-18px"
                }}>Teams</Typography>
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/billing" style={{textDecoration:"none"}}>
            <ListItemButton>
              <ListItemIcon sx={{mr:"18px"}}>
              <Box component="img" src={bg}/>
                <Box component="img" src={billing} sx={{ml:"-30px",
              width: "24px",
              height: "24px",
              mt:"5.5px"
              }}/>
              </ListItemIcon>
              <Typography sx={{
                color:"#1A344B",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight:"600",
                fontSize:"20px",
                width: "139px",
                height: "36px",
                ml:"-18px"
                }}>Billing                
                </Typography>
            </ListItemButton>
          </Link>
          </ListItem>
        </List>
    </Box> */}

      <Box sx={{ width: "180px", mt: "12px" }}>
        <List>
          <ListItem disablePadding>
            {/* <ListItemButton> */}
            <Stack direction="column" spacing={2} sx={{ fontSize: "14px" }}>
              {contents.map(function (sidebar, index) {
                if (sidebar === "Permission") {
                  return (
                    <ListItemButton
                      sx={{
                        color: "gray",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "500",
                        fontSize: "20px",
                        width: "139px",
                        height: "36px",
                      }}
                    >
                      <Box component="img" src={bg} sx={{opacity:"0.5"
                      }}/>
                      <Box
                        component="img"
                        src={permission}
                        sx={{
                          ml: "-30px",
                          width: "24px",
                          height: "24px",
                          mr: "26px", 
                          opacity:"0.9"
                        }}
                      />
                      Permission
                    </ListItemButton>
                  );
                } else {
                  return (
                    <ListItemButton
                      style={
                        sidebar === click
                          ? {
                              color: "#1A344B",
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: "600",
                              fontSize: "20px",
                              width: "139px",
                              height: "36px",
                              ml: "-18px",
                            }
                          : {
                              color: "gray",
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: "500",
                              fontSize: "20px",
                              width: "139px",
                              height: "36px",
                              ml: "-18px",
                            }
                      }
                      onClick={() => dummy(sidebar)}
                    >
                      <ListItemIcon>
                        {index === 0 ? (
                          <Box>
                            <Box sx={sidebar === click ? {opacity:"1"}:{opacity:"0.5"}} component="img" src={bg} />
                            <Box
                              component="img"
                              src={general}
                              sx={{
                                ml: "-30px",
                                width: "24px",
                                height: "24px",
                                mt: "5.5px",
                                position: "absolute",
                              }}
                            />
                          </Box>
                        ) : null}
                        {index === 1 ? (
                          <Box>
                            <Box sx={sidebar === click ? {opacity:"1"}:{opacity:"0.5"}} component="img" src={bg} />
                            <Box
                              component="img"
                              src={users}
                              sx={{
                                ml: "-30px",
                                width: "24px",
                                height: "24px",
                                mt: "5.5px",
                                position: "absolute",
                              }}
                            />
                          </Box>
                        ) : null}
                        {index === 3 ? (
                          <Box>
                            <Box sx={sidebar === click ? {opacity:"1"}:{opacity:"0.5"}} component="img" src={bg} />
                            <Box
                              component="img"
                              src={teams}
                              sx={{
                                ml: "-30px",
                                width: "24px",
                                height: "24px",
                                mt: "5.5px",
                                position: "absolute",
                              }}
                            />
                          </Box>
                        ) : null}
                        {index === 4 ? (
                          <Box>
                            <Box sx={sidebar === click ? {opacity:"1"}:{opacity:"0.5"}} component="img" src={bg} />
                            <Box
                              component="img"
                              src={billing}
                              sx={{
                                ml: "-30px",
                                width: "24px",
                                height: "24px",
                                mt: "5.5px",
                                position: "absolute",
                              }}
                            />
                          </Box>
                        ) : null}
                      </ListItemIcon>
                      {sidebar}
                    </ListItemButton>
                  );
                }
              })}
            </Stack>

            {/* </ListItemButton> */}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default CompanySetting;
