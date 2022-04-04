import React from 'react';
import './footer.css';
import { Typography } from "@material-ui/core"
import resumeData from "../../utils/resumeData"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_left">
          <Typography className="footer_name">{resumeData.name}</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            Designed and Developed by <a href="https://www.linkedin.com/in/semra-baki-553553221/" target="_blank">Semra Baki </a><br />
            Clone Idea from <a href="https://themeforest.net/user/tavonline" target="_blank" rel="noreferrer" >Travonline</a>
          </Typography>
        </div> 
        </div>
  )
}

export default Footer