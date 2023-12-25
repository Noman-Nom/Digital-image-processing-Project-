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
import { MdOutlineHideImage } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";


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
          <p className="title">Image Negative</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineHideImage  className="icon" />
              <span>Gray-Scale Image (-)</span>
            </li>
            <li>
              <MdOutlineHideImage  className="icon" />
              <span>Color Image (-)</span>
            </li>
            <li>
              <MdOutlineHideImage  className="icon" />
              <span>By Values (-)</span>
            </li>
          </Link>

          <p className="title">Intensity Transformation</p>

          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>Thresholding</span>
            </li>
          </Link>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>Thresholding (calc)</span>
            </li>
          </Link>
          
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>PowerLaw Transformation</span>
            </li>
          </Link>
          
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>PowerLaw Transformation (calc)</span>
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
