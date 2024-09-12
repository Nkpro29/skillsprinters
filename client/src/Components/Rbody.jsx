import React from "react";
import { Header } from "./Header";
import { DashBody } from "./DashBody";
import "../Components/Rbody.css";
import { Routes, Route, Outlet } from "react-router";
import WorkEnquiry from "../pages/WorkEnquiry";
import InvoiceGenerator from "../pages/Invoice";
import Projects from "../pages/Projects";
import Contract from "./Contract";
import { Sidebar } from "./Sidebar";
import Apply from "../pages/Apply";
import LiveChat from "react-livechat";

export const Rbody = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="Rbody">
        <Header name="Shohidur Rehman" overview="Dashboard" />
        <Outlet />
        <LiveChat license={16402902} group={3} chatBetweenGroups={false}></LiveChat>
      </div>
    </>
  );
};
