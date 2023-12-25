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
import { PiImagesSquare } from "react-icons/pi";

import { FaFaceGrinStars } from "react-icons/fa6";
import { CiText } from "react-icons/ci";
import { IoLogoEdge } from "react-icons/io5";



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
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>Color To GrayScale</span>
            </li>
          </Link>
          
          <p className="title">Image Enhancement</p>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <li>
              < PiImagesSquare className="icon" />
              <span>Histogram Equilization</span>
            </li>
          </Link>
         
       
          <p className="title">OpenSource Libraries</p>
          <li>
            < FaFaceGrinStars  className="icon" />

            <span>Face Detector</span>
          </li>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <li>
              < CiText className="icon" />
              <span>Image To Text</span>
            </li>
          </Link>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <li>
              <  IoLogoEdge className="icon" />
              <span>Edge Detector</span>
            </li>
          </Link>
          
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
