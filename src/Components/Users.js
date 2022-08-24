import React from "react";
import { Button, Typography, Avatar, Icon, Modal, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
import downArrow from "../Images/downarrow.png";
import teams from "../Images/teams.png";
import cross from "../Images/cross.png";
import SaveIcon from '@mui/icons-material/SaveRounded';
import CompanySetting from "./CompanySetting";

// MODAL - CSS
const style1 = {
  position: "absolute",
  top: "58.5%",
  left: "49.5%",
  transform: "translate(-50%, -50%)",
  width: 652,
  height: 560,
  boxShadow: 24,
  p: "40px 50px 50px 50px",
  background:"white",
  borderRadius: "8px"
};

const style2 = {
  position: "absolute",
  top: "58.5%",
  left: "49.5%",
  transform: "translate(-50%, -50%)",
  width: 652,
  height: 540,
  boxShadow: 24,
  p: "40px 50px 50px 50px",
  background:"white",
  borderRadius: "8px"
};

const Users = ({click,setClick}) => {
  const [open, setOpen] = React.useState(false);
  const [teamsOpen, setTeamsOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleOpen2 = () => setTeamsOpen(true);
  const handleClose1 = () => setOpen(false);
  const handleClose2 = () => setTeamsOpen(false);
  return (
    <>
      <CompanySetting click={click} setClick={setClick} />
      <Box
        sx={{
          boxSizing: "border-box",
          position: "absolute",
          width: { lg: "1299px", xs: "427px", md: "650px" },
          height: { lg: "744px", xs: "610px" },
          left: { lg: "437px", xs: "250px" },
          right: "114px",
          top: "162px",
          border: "1px solid #C4C4C4",
          borderRadius: "12px",
          textTransform: "capitalize",
        }}
      >
        <Box
          sx={{
            width: "224px",
            height: "31px",
            ml: "55px",
            mt: "30px",
            fontSize: "24px",
            lineHeight: "31px",
            fontWeight: "600",
            color: "#1A344B",
          }}
        >
          Manage Members
        </Box>
        <Box
          sx={{
            width: { lg: "1299px", xs: "427" },
            height: "0px",
            mt: "30px",
            border: "1px solid #C4C4C4",
          }}
        />

        <Box
          sx={{
            width: { lg: "584px", xs: "286px", md: "586px" },
            height: "89px",
            ml: "55px",
            mt: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "23px",
              color: "#000000",
              opacity: "0.7",
            }}
          >
            Manage the team who's involved in the hiring effort at plenty.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "209px",
              height: "38px",
              background: "#1A344B",
              borderRadius: "4px",
              mt: "26px",
            }}
            onClick={handleOpen1}
          >
            <Typography
              sx={{
                width: "140px",
                height: "23px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "23px",
                color: "#ffffff",
                opacity: "0.7",
                display: "contents",
                textTransform: "capitalize",
              }}
            >
              ✉ Invite Members
            </Typography>
          </Button>
          {/* MODAL FOR BUTTON */}

          <Modal
            open={open}
            onClose={handleClose1}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box>
              <Box sx={style1}>
                <Box
                  sx={{
                    width: "101.5%",
                    height: "31px",
                    fontSize: "24px",
                    lineHeight: "31px",
                    fontWeight: "600",
                    color: "#1A344B",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Invite Users
                  <Box
                    component="img"
                    src={cross}
                    alt="image"
                    onClick={handleClose1}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "584px",
                    height: "89px",
                    mt: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "23px",
                      color: "#000000",
                      opacity: "0.7",
                    }}
                  >
                    Invite new users by email address.
                    <span style={{ color: "#4CABCD", fontWeight: "500" }}>
                      Learn More
                    </span>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "661px",
                    height: "230px",
                    background: "#F0F0F0",
                    border: "1px solid #C4C4C4",
                    borderRadius: "4px",
                    mt: "-20px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "215px",
                      height: "28px",
                      ml: "20px",
                      mt: "29px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "24px",
                      lineHeight: "28px",
                    }}
                  >
                    Invite By Email
                  </Typography>
                  <Box
                    sx={{
                      width: "227.22px",
                      height: " 43.22px",
                      display: "flex",
                      ml: "15px",
                      mt: "12px",
                    }}
                  >
                    <Box sx={{ mt: "5px", ml: "6px" }}>
                      <TextField
                        id="outlined-basic"
                        label="Type Here.."
                        variant="outlined"
                        sx={{
                          width: "621px",
                          height: "52px",
                          background: "#ffffff",
                        }}
                      />

                      <FormControl>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{
                            mt: "19px",
                            fontWeight: "600",
                            fontSize: "14px",
                            color: "black",
                          }}
                        >
                          Add to this role
                        </InputLabel>
                        <Select
                          label="Add to this role"
                          sx={{
                            width: "310px",
                            height: "52px",
                            mt: "18px",
                            background: "#ffffff",
                          }}
                        >
                          <MenuItem>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem>ReactJS</MenuItem>
                          <MenuItem>JavaScript</MenuItem>
                          <MenuItem>CSS</MenuItem>
                          <MenuItem>Material UI</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      width: "215px",
                      height: "28px",

                      mt: "29px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "24px",
                      lineHeight: "28px",
                    }}
                  >
                    Invite By Email
                  </Typography>
                  <Box
                    sx={{
                      width: "661px",
                      height: "35px",
                      background: "#F6F2F2",
                      border: "1.5px solid #C4C4C4",
                      borderRadius: "4px",
                      mt: "18px",
                      opacity: "0.5",
                    }}
                  >
                    <Typography
                      sx={{ ml: "20px", mt: "8px", fontSize: "14px" }}
                    >
                      No Teams Available
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: "40px",
                    display: "flex",
                    justifyContent: "end",
                    width: "101.5%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "126px",
                      height: "38px",
                      background: "#DADADA",
                      borderRadius: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "66px",
                        height: "23px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#1A344B",
                        display: "contents",
                        textTransform: "capitalize",
                      }}
                      onClick={handleClose1}
                    >
                      Cancel
                    </Typography>
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      width: "198.5px",
                      height: "38px",
                      background: "#1A344B",
                      borderRadius: "4px",
                      ml: "30px",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "135px",
                        height: "23px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#ffffff",
                        opacity: "0.7",
                        display: "contents",
                        textTransform: "capitalize",
                      }}
                    >
                      ✉ Invite Members
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>

        <Box
          sx={{
            ml: "55px",
            mt: "60px",
          }}
        >
          <Typography
            sx={{
              width: "219.5px",
              height: "28px",
              left: "432px",
              top: "432px",
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            Pending Invitations
          </Typography>
          <Box
            sx={{
              width: { lg: "1151px", xs: "333px" },
              height: "68px",
              background: "#F6F2F2",
              border: "1px solid #C4C4C4",
              borderRadius: "4px",
              mt: "18px",
            }}
          >
            <Box
              sx={{
                width: "227.22px",
                height: " 43.22px",
                display: "flex",
                ml: "15px",
                mt: "12px",
              }}
            >
              <Avatar
                alt="Profile Picture"
                sx={{
                  bgcolor: deepPurple[500],
                  width: "43.22px",
                  height: "43.22px",
                }}
              >
                R
              </Avatar>
              <Box sx={{ ml: "16px", mt: "5px" }}>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16.2088px",
                    lineHeight: "21px",
                    color: "#1A344B",
                  }}
                >
                  Ron swanson
                </Typography>
                <Icon
                  sx={{
                    left: { lg: "1144px", xs: "344px" },
                    position: "absolute",
                    width: "28px",
                    height: "28px",
                    top: "338px",
                  }}
                >
                  ✖
                </Icon>
                <Typography
                  sx={{
                    width: "179.5px",
                    height: "15px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12.6px",
                    lineHeight: "16px",
                    color: "#1A344B",
                    opacity: "0.8",
                  }}
                >
                  Invited by Josh Bass 6d Ago
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { lg: "1151px", xs: "347px" },
            height: "114px",
            ml: "55px",
            mt: "60px",
          }}
        >
          <Typography
            sx={{
              width: "215px",
              height: "28px",
              left: "432px",
              top: "432px",
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            Members
          </Typography>
          <Box
            sx={{
              width: { lg: "1151px", xs: "209px" },
              height: "68px",
              background: "#F6F2F2",
              border: "1px solid #C4C4C4",
              borderRadius: "4px",
              mt: "18px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                ml: "15px",
                mt: "12px",
              }}
            >
              <Avatar
                alt="Profile Picture"
                sx={{
                  bgcolor: deepPurple[500],
                  width: "43.22px",
                  height: "43.22px",
                }}
              >
                R
              </Avatar>
              <Box sx={{ ml: "16px", mt: "5px" }}>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16.2088px",
                    lineHeight: "21px",
                    color: "#1A344B",
                  }}
                >
                  Ron swanson
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    width: "257px",
                    height: "22px",
                    left: { lg: "900px", xs: "282px" },
                    top: { lg: "515px", xs: "510px" },
                    display: { lg: "flex", xs: "grid" },
                  }}
                >
                  <Typography
                    sx={{
                      width: "148px",
                      height: "18px",
                      left: "1267px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "18px",
                      color: "#1A344B",
                      pr: "30px",
                    }}
                  >
                    Administrator <img src={downArrow} alt="Image" />
                  </Typography>

                  <Typography
                    sx={{
                      width: "72px",
                      height: "18px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "18px",
                      color: "#1A344B",
                      cursor: "pointer",
                      display: "flex",
                      mt: { xs: "10px", lg: "0px" },
                    }}
                    onClick={handleOpen2}
                  >
                    {" "}
                    <img src={teams} alt="image" />
                    Teams
                  </Typography>

                  {/* MODAL FOR TEAMS TAB */}
                  <Modal
                    open={teamsOpen}
                    onClose={handleClose2}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box>
                      <Box sx={style2}>
                        <Box
                          sx={{
                            width: "101.5%",
                            height: "31px",
                            fontSize: "24px",
                            lineHeight: "31px",
                            fontWeight: "600",
                            color: "#1A344B",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          Teams
                          <Box
                            component="img"
                            src={cross}
                            alt="image"
                            onClick={handleClose2}
                            sx={{ cursor: "pointer" }}
                          />
                        </Box>

                        <Box
                          sx={{
                            width: "654px",
                            height: "60px",
                            mt: "22px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: "600",
                              fontSize: "18px",
                              lineHeight: "23px",
                              color: "#000000",
                              opacity: "0.7",
                            }}
                          >
                            Manage the teams Josh Bass is associated with. You
                            can associate these teams with positions & candidate
                            pools for easier administration.
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "661px",
                            height: "172px",
                            background: "#F0F0F0",
                            border: "1px solid #C4C4C4",
                            borderRadius: "4px",
                            mt: "32px",
                          }}
                        >
                          <Typography
                            sx={{
                              width: "215px",
                              height: "28px",
                              ml: "20px",
                              mt: "29px",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "22px",
                              lineHeight: "28px",
                            }}
                          >
                            Add Teams
                          </Typography>
                          <Box
                            sx={{
                              width: "227.22px",
                              height: " 43.22px",
                              display: "flex",
                              ml: "15px",
                              mt: "12px",
                            }}
                          >
                            <Box sx={{ mt: "5px", ml: "6px" }}>
                              <FormControl>
                                <InputLabel
                                  id="demo-simple-select-label"
                                  sx={{
                                    mt: "19px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    color: "black",
                                  }}
                                >
                                  Select a Team to add
                                </InputLabel>
                                <Select
                                  label="Add to this role"
                                  sx={{
                                    width: "310px",
                                    height: "52px",
                                    mt: "18px",
                                    background: "#ffffff",
                                  }}
                                >
                                  <MenuItem>
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem>ReactJS</MenuItem>
                                  <MenuItem>JavaScript</MenuItem>
                                  <MenuItem>CSS</MenuItem>
                                  <MenuItem>Material UI</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              width: "230px",
                              height: "31px",
                              mt: "40px",
                              fontFamily: "'Montserrat', sans-serif",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "24px",
                              lineHeight: "28px",
                            }}
                          >
                            Team Membership
                          </Typography>
                          <Box
                            sx={{
                              width: "661px",
                              height: "35px",
                              background: "#F6F2F2",
                              border: "1.5px solid #C4C4C4",
                              borderRadius: "4px",
                              mt: "22px",
                              opacity: "0.5",
                            }}
                          >
                            <Typography
                              sx={{ ml: "20px", mt: "8px", fontSize: "14px" }}
                            >
                              All Members
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            mt: "40px",
                            display: "flex",
                            justifyContent: "end",
                            width: "101.5%",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              width: "126px",
                              height: "38px",
                              background: "#DADADA",
                              borderRadius: "4px",
                            }}
                            onClick={handleClose2}
                          >
                            <Typography
                              sx={{
                                width: "66px",
                                height: "23px",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: "600",
                                fontSize: "18px",
                                lineHeight: "23px",
                                color: "#1A344B",
                                display: "contents",
                                textTransform: "capitalize",
                              }}
                            >
                              Cancel
                            </Typography>
                          </Button>

                          <Button
                            variant="contained"
                            sx={{
                              width: "198.5px",
                              height: "38px",
                              background: "#1A344B",
                              borderRadius: "4px",
                              ml: "30px",
                            }}
                          >
                            <Typography
                              sx={{
                                width: "135px",
                                height: "23px",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: "800",
                                fontSize: "18px",
                                lineHeight: "23px",
                                color: "#ffffff",
                                opacity: "0.7",
                                display: "contents",
                                textTransform: "capitalize",
                              }}
                            >
                              <SaveIcon /> Save Changes
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Modal>
                </Box>
                <Typography
                  sx={{
                    width: "179.5px",
                    height: "15px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12.6px",
                    lineHeight: "16px",
                    color: "#1A344B",
                    opacity: "0.8",
                  }}
                >
                  jbass@plenty.ag
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: "1299px", xs: "427" },
            height: "0px",
            mt: { lg: "80px", xs: "25px" },
            border: "1px solid #C4C4C4",
          }}
        />
      </Box>
    </>
  );
};

export default Users;
