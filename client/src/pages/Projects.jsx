import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CustomizedInputBase from "../Components/SearchBtn";
import { Typography } from "@mui/material";
import { Stack, Chip } from "@mui/material";
import location from "./location.png";
import Job from "../Components/jobItem";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import supabase from "../supabase";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Projects() {
  const [value, setValue] = React.useState(2);
  const [progress, setProgress] = React.useState(10);

  

  return (
    <>
      {/* search */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            {/* search location  */}
            <CustomizedInputBase />

            {/* api of jobs */}
            <Job />
          </Grid>

          {/* profile */}
          <Grid xs={6} md={4}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Item sx={{ width: 200 }} style={{ backgroundColor: "#F0FFF0" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    position: "relative",
                    left: "25%",
                    mb: 2,
                  }}
                />
                <Divider variant="middle" />
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ m: 2 }}
                >
                  <Box item xs={14} sx={{ m: 1 }}>
                    <Item sx={{ fontWeight: "bolder" }}>ReactJS Developer</Item>
                  </Box>
                  <Box item sx={{ m: 1 }}>
                    <Item>
                      <Rating name="read-only" value={value} readOnly />
                    </Item>
                  </Box>
                  <Box item sx={{ m: 1 }}>
                    <Typography style={{ fontSize: 15 }}>
                      Complete your profile
                    </Typography>
                    <Grid item xs={13}>
                      <LinearProgress variant="determinate" value={progress} />
                      <Typography style={{ fontSize: 12 }}>
                        {progress}
                      </Typography>
                    </Grid>
                  </Box>
                </Grid>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
