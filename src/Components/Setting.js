import { Avatar, Box,Divider, Paper,Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import pp1 from "../Images/pp1.png";
import icon from "../Images/icon1.png";
import q from "../Images/qMark.png";
import keyboard from "../Images/keyboard.png";
import signout from "../Images/signout.png";
import cSetting from "../Images/cSetting.png";
import rP from "../Images/rp.png";
import iM from "../Images/iM.png";
import bD from "../Images/bD.png";
import mS from "../Images/mS.png";
import fR from "../Images/fR.png";
import lD from "../Images/lD.png";
import pU from "../Images/pU.png";
import rF from "../Images/rF.png";
import sideArrow from "../Images/sideArrow.png";
import add from "../Images/addC.png";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center",}}>
      <Box sx={{ width: "306px", height: "780px", display: "flex" }}>
        <Paper
          variant="outlined"
          sx={{
            textTransform: "capitalize",
            padding: "30px 0px 21px 0px",
            width: "306px",
          }}
        >
          {/* 1st - PART */}

          <Box
            sx={{
              width: "178px",
              height: " 43.22px",
              display: "flex",
              ml: "30px",
            }}
          >
            <Avatar
              alt="Profile Picture" src={pp1}
              sx={{
                width: "43.22px",
                height: "43.22px",
              }}
            />
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
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12.6px",
                  lineHeight: "16px",
                  color: "#1A344B",
                }}
              >
                jbass@lenty.ag
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              mt: "21.6px",
              height: "140px",
              width: "220px",
              ml: "30px",
            }}
          >
            <img src={icon} alt="Image not found" />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              user setting
            </Typography>

            <Box
              component="img"
              src={q}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Help & Documentation
            </Typography>

            <Box
              component="img"
              src={keyboard}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              {" "}
              Keyboard Shortcuts
            </Typography>

            <Box
              component="img"
              src={signout}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Sign Out
            </Typography>
          </Box>
          <Divider sx={{ mt: "20px" }} />

          {/* 2nd - PART */}
          <Box sx={{ display: "flex", mt: "25px", ml: "30px" }}>
            <Avatar
              alt="Profile Picture"
              sx={{
                bgcolor: deepPurple[500],
                width: "43.22px",
                height: "43.22px",
              }}
            >
              P
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
                Plenty
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12.6px",
                  lineHeight: "16px",
                  color: "#1A344B",
                }}
              >
                https://zenwe.breezy.hr/
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              mt: "21.6px",
              height: "140px",
              width: "250px",
              ml: "30px",
            }}
          >
            <img src={cSetting} alt="Image not found" />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              <Link to="/general" style={{color:"#1A344B",textDecoration:"none"}}>Company Settings</Link>   
            </Typography>

            <Box
              component="img"
              src={rP}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Recruiting Preferences
              <Box component="img" src={sideArrow} sx={{ pl: "22.5px" }} />
            </Typography>

            <Box
              component="img"
              src={iM}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Invite Members
            </Typography>

            <Box
              component="img"
              src={bD}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Billing Details
            </Typography>

            <Box
              component="img"
              src={mS}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Manage Subscriptions
            </Typography>
          </Box>
          <Divider sx={{ mt: "50px" }} />

          {/* 3rd - PART */}
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              mt: "25px",
              width: "300px",
            }}
          >
            <img src={fR} alt="Image not found" />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Feature Requests
            </Typography>

            <Box
              component="img"
              src={lD}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Live Demo
            </Typography>

            <Box
              component="img"
              src={pU}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Product Updates
            </Typography>

            <Box
              component="img"
              src={rF}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Refer a friend
              <Box component="img" src={sideArrow} sx={{ pl: "80px" }} />
            </Typography>
          </Box>
          <Divider sx={{ mt: "20px" }} />

          <Box
            sx={{  ml: "40px" }}
          >
            <Box
              component="img"
              src={add}
              alt="Image not found"
              sx={{ mt: "23px" }}
            />
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#1A344B",
                ml: "35px",
                mt: "-17.5px",
              }}
            >
              Add Company
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Setting;
