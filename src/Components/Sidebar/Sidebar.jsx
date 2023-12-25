import React, { useContext } from "react";
import "./Sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ManIcon from "@mui/icons-material/Man";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ClassIcon from "@mui/icons-material/Class";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import { Link } from "react-router-dom";


const Sidebar = () => {

 
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src="/logo1.png" alt="" />
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SpaceDashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Academic</p>

          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li>
              <ManIcon className="icon" />
              <span>Students</span>
            </li>
          </Link>
          <p className="title">List</p>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <li>
              <ImportContactsIcon className="icon" />
              <span>Courses</span>
            </li>
          </Link>
          <li>
            <ClassIcon className="icon" />
            <span>Sumesters</span>
          </li>
          <li>
            <AutoStoriesIcon className="icon" />
            <span>Sessions</span>
          </li>
          <li>
            <TextFieldsIcon className="icon" />
            <span>Fields</span>
          </li>
          <p className="title">Users</p>
          <li>
            <AccountCircleIcon className="icon" />

            <span>Profile</span>
          </li>
          <li>
            <LockIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"
        ></div>
        
      </div>
    </div>
  );
};

export default Sidebar;
