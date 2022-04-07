import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { DataObjectSharp, HomeRounded, Key, Telegram } from "@mui/icons-material";
//import MyButton from '../button/MyButton';
import { Link, NavLink,withRouter} from "react-router-dom";
import resumeData from "../../utils/resumeData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import CustomButton from "../Button/Button";

const Header = (props) => {

  function showContactMe() {
    const element = document.getElementById("contactUs");

    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      alert("Please Go to Resume Page and Click Me Again")
      
    }
  }
  // ?  means if the props is exist
  const pathName = props?.location?.pathName;
  return (
    // to add navbar always to top add sticky
    <Navbar expand="lg" sticky="top" className="header">
      {/*Home Link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded/>
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              // if the portfolio active it sill take the first css class if not it will take the secind css class
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {/* mapping trough the data file */}
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link}
              target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={'Contact me'} icon={<Telegram/>} onClickMe={showContactMe}/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);

