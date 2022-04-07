import React from 'react';
import {Typography} from '@material-ui/core';
import './Profile.css';
import CustomTimeline,{CustomTimeLineSeparator} from '../Timeline/Timeline.js';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import resumeData from '../../utils/resumeData';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import CustomButton from '../Button/Button';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import MyResume from "../../utils/MyResume.pdf"
import FileSaver from 'file-saver';
console.log('deneme');

const CustomTimeLineItem=({title,text,link})=>(
  <TimelineItem>
   <CustomTimeLineSeparator/>
   <TimelineContent className='timelineItem_content'> 
    {link?(
      <Typography className="timelineItem_text">
      <span>{title}:</span>{" "}
      <a href={link} target='blank'>
        {text}
      </a>
      </Typography>
      ):(
      <Typography className="timelineItem_text">
      <span>{title}:</span>{text}
      </Typography>
      )}
   </TimelineContent>
</TimelineItem>
);
const Profile = () => {
 
  return (
    <div className='profile container_shadow'>
    <div className='profile_name'>
    <Typography className='name'>{resumeData.name}</Typography>
    <Typography className='title'>{resumeData.title}</Typography>
    </div>
    <figure className='profile_image'>
      <img src={require('../../assets/images/sb.jpg')} alt=""/>
    </figure>

    <div className='profile_information'>
      <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
        <CustomTimeLineItem title="Name" text={resumeData.name}/>
        <CustomTimeLineItem title="Title" text={resumeData.title}/>
        <CustomTimeLineItem title="Email" text={resumeData.email}/>
        {Object.keys(resumeData.socials).map(key => (
              <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            ))}
       </CustomTimeline>
      <br/>
      <div className="button_container" style={{display:'flex'}}>
      <CustomButton text="Download Resume" icon={<GetAppOutlinedIcon />} href={MyResume}/>
      </div>
     
    </div>
     
    </div>
  )
}

export default Profile;