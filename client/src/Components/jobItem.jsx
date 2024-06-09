import React, { useEffect, useContext } from "react";
import { Stack, Typography, Chip, Paper, styled } from "@mui/material";
import { useState } from "react";
import "./jobItem.css";
import { useNavigate } from "react-router-dom";
import JobCard from "./jobCard";
import axios from "axios";
import baseUrl from "../api";
import AuthContext from "../auth/authContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Job(props) {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const [jobs, setJobs] = useState([]); // Initialize jobs as an empty array

  console.log("jobs ==> ", jobs);
  useEffect(() => {
    async function displayJobs() {
      try {
        const response = await axios.get(`${baseUrl}/jobs/`);
        console.log("response ==> ", response);

        setJobs(response?.data);
      } catch (error) {
        console.log("error in fetching jobs.", error);
      }
    }

    displayJobs();
  }, []);

  return (
    <>
      {Object.values(jobs).map(([key, job]) => (
        <Item key={job._id} sx={{ m: 2, p: 2, display: "block" }}>
          <Stack direction={"row"}>
            <Typography
              sx={{ display: "flex", color: "green", lineHeight: 5 }}
              className="jobTitle"
            >
              {job.companyName}
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography
              sx={{ display: "flex", color: "green", lineHeight: 5 }}
              className="jobTitle"
            >
              {job.designation}
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography variant="body2">{job.description}</Typography>
          </Stack>
          {/* <Stack direction={"row"}>
            <div className="skills">
              {job.skills.map((skill, index) => (
                <Chip key={index} label={skill} sx={{ m: 2 }} />
              ))}
            </div>
          </Stack> */}
          <Stack direction={"row"}>
            <Typography sx={{ fontSize: "15px", ml: 2 }}>
              ${job.income}
            </Typography>
            <Typography sx={{ fontSize: "15px", ml: 2 }}>
              {job.location}
            </Typography>
          </Stack>
        </Item>
      ))}
      {showDetails && <JobCard />}
    </>
  );
}

export default Job;
