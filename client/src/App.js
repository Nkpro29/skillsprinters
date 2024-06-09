import "./App.css";
import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { Rbody } from "./Components/Rbody";
import SignUp from "./Components/auth/signup";
// import LandingPage from './pages/landingPage';
import Login from "./Components/auth/LoginPage";
import { Outlet, Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage";
import { DashBody } from "./Components/DashBody";
import WorkEnquiry from "./pages/WorkEnquiry";
import Profile from "./pages/ProfileManagement";
import InvoiceGenerator from "./pages/Invoice";
import Projects from "./pages/Projects";
import Contract from "./Components/Contract";

import { Header } from "./Components/Header";
import "./Components/Rbody.css";
import Apply from "./pages/Apply";
import InvoiceTable from "./pages/invoiceTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/freelancer"
          element={
            <div className="main">
              <Sidebar />
              <Rbody />
            </div>
          }
        >
          <Route path="" element={<DashBody />} />
          {/* <Route path="workenquiry" element={<WorkEnquiry />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="invoice" element={<InvoiceGenerator />}/>
          <Route path="allinvoices" element={<InvoiceTable />} />
          <Route path="projects" element={<Projects />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contracts" element={<Contract />} />
          <Route path="*" element={"page not found"} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
