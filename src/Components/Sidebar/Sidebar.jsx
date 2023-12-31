import React, { useContext } from "react";
import "./Sidebar.scss";

import { Link } from "react-router-dom";
import { PiImageDuotone } from "react-icons/pi";
import { MdImageSearch } from "react-icons/md";
import { CgImage } from "react-icons/cg";
import { IoImagesOutline } from "react-icons/io5";
import { BsImageFill } from "react-icons/bs";
import { SiPowerbi } from "react-icons/si";
import { MdSolarPower } from "react-icons/md";
import { MdOutlineSolarPower } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import { FaFaceGrinStars } from "react-icons/fa6";
import { CiText } from "react-icons/ci";
import { IoLogoEdge } from "react-icons/io5";



const Sidebar = () => {


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src="/logo.png" alt="Not found" />
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Image Negative</p>

          <Link to="/gscalenegative" style={{ textDecoration: "none" }}>
            <li>
              <PiImageDuotone className="icon" />
              <span>Gray-Scale Image (-)</span>
            </li>
          </Link>
          <Link to='/gscalenegative' style={{ textDecoration: "none" }}>
            <li>
            <BsImages className="icon" />
              <span>Color Image (-)</span>
            </li>
          </Link>
          <Link to='/negetive' style={{ textDecoration: "none" }}>
            <li>
              <MdImageSearch className="icon" />
              <span>By Values (-)</span>
            </li>
          </Link>


          <p className="title">Intensity Transformation</p>

          <Link to="/thresholdAlg" style={{ textDecoration: "none" }}>
            <li>
              <BsImageFill className="icon" />
              <span>Thresholding</span>
            </li>
          </Link>
          <Link to="/threshold" style={{ textDecoration: "none" }}>
            <li>
              <CgImage className="icon" />
              <span>Thresholding (calc)</span>
            </li>
          </Link>

          <Link to="/powerlaw" style={{ textDecoration: "none" }}>
            <li>
              <MdSolarPower className="icon" />
              <span>PowerLaw Transformation</span>       
            </li>
          </Link>

          <Link to="/powerlaw" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineSolarPower  className="icon" />
              <span>PowerLaw Transformation (calc)</span>  
            </li>
          </Link>
          <Link to="/colortogray" style={{ textDecoration: "none" }}>
            <li>
              <IoImagesOutline className="icon" />
              <span>Color To GrayScale</span>
            </li>
          </Link>

          <p className="title">Image Enhancement</p>
          <Link to="/histogram" style={{ textDecoration: "none" }}>
            <li>
              < SiPowerbi className="icon" />
              <span>Histogram Equilization</span>
            </li>
          </Link>


          <p className="title">OpenSource Libraries</p>
          <Link to='/facedetector' style={{ textDecoration: "none" }} >
            <li>
              < FaFaceGrinStars className="icon" />

              <span>Face Detector</span>
            </li>
          </Link>
          <Link to="/imtt" style={{ textDecoration: "none" }}>
            <li>
              < CiText className="icon" />
              <span>Image To Text</span>
            </li>
          </Link>
          <Link to="/edge" style={{ textDecoration: "none" }}>
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
