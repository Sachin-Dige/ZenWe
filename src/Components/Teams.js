import React, { useState } from "react";
import {
  Button,
  Box,
  Stack,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import pp from "../Images/pp1.png";
import CompanySettings from "./CompanySetting";

function Teams({click,setClick}) {

  return (
    <>
      <CompanySettings click={click} setClick={setClick}/>

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
                ml: {xs:"-130px",lg:"10px"},
                width: {lg:"1299px",xs:"450px"},
                height: 521,
                border: "1px solid #C4C4C4",
                borderRadius: "12px",
                background: "#FFFFFF",
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
                      width: 188,
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
                    Manage Teams
                  </Typography>
                </Box>

                <Divider />

                <Box component="div">
                  <Typography
                    variant="h6"
                    sx={{
                      mt: "30px",
                      ml: "55px",
                      width: {lg:558,xs:450},
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
                    Organize members into Hiring Teams for easier management.
                  </Typography>
                </Box>

                <Stack direction="row">
                  <Box component="div">
                    <Typography
                      variant="h6"
                      sx={{
                        mt: "60px",
                        ml: "55px",
                        width: 73,
                        height: 28,
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#1A344B",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      Teams
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      marginTop: "60px",
                      marginLeft: {lg:"930px",xs:"130px"},
                      width: "148px",
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
                    Add Item
                  </Button>
                </Stack>

                <Paper
                  elevation={5}
                  sx={{
                    bgcolor: "#F6F2F2",
                    width: {lg:1151,xs:350},
                    height: 68,
                    mt: "18px",
                    ml: "55px",
                    border: "1px solid #C4C4C4",
                    borderRadius: "4px",
                  }}
                >
                  <Box
                    component="div"
                    sx={{ width: 88, height: 46, mt: "11px", ml: "20px" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        width: 88,
                        height: 18,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1A344B",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat', sans-serif",
                        fontStyle: "normal",
                      }}
                    >
                      All Members
                    </Typography>

                    <Box
                      component="img"
                      src={pp}
                      alt="...imgError"
                      sx={{ mt: "5px", width:"23px", height:"23px" }}
                    />
                  </Box>
                </Paper>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Teams;
