import React, { useState } from "react";
import "../Components/Header.css";
import bell from "../SVGs/bell.svg";
import arrow from "../SVGs/arrow.svg";
import search from "../SVGs/search.svg";
import Profile from "./profile/ProfileCarousel";
import { Modal, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Header = (props) => {

  const navigate = useNavigate();

  return (
    <div className="head">
      <div className="b1">
        <div className="name">Hi Naman !</div>
        <div className="overview">
          This is your Freelancer Team {props.overview} overview
        </div>
      </div>
      <>
        <div className="b2 f">
          <input type="text" placeholder="Type to search" />
          <img src={search} alt="" />
        </div>
        <div className="b3">
          <img src={bell} alt="" />
        </div>
        <div className="b4 f">
          <button onClick={() => {
            navigate("/profile");
          }}>
            <div className="i1"></div>
          </button>
          <div className="name2">Naman Kulshresth</div>
          <img src={arrow} alt="" />
        </div>
      </> 
    </div>
  );
};
