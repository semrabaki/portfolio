import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomTimeline from "../../components/Timeline/Timeline";
import MyTimeLine, { CustomTimeLineSeparator } from "../../components/Timeline/Timeline";
import resumeData from '../../utils/resumeData'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import "./resume.css";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@material-ui/lab";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45"> 
        <Grid item className='section_title mb_30'>
          <span></span>
            <h6 className="section_title_text">About Me</h6>  
        </Grid>
        <Grid item xs={12} >
        <Typography variant='body2' className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Exducation and experiences */}
      <Grid container className="section">
      <Grid item className='section_title mb_30'>
          <span></span>
            <h6 className="section_title_text">Resume</h6>  
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
          {/* Experiences */}
            <Grid item sm={12} ms={6}>
              <CustomTimeline title='Work Experience'icon={<WorkHistoryIcon/>}>
                {resumeData.experinces.map((experinces)=>(
                  <TimelineItem>
                  <CustomTimeLineSeparator/>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                      {experinces.title}
                      </Typography>
                      <Typography variant='caption' className="timeline_date">
                      {experinces.date}
                      </Typography>
                      <Typography variant='body2' className="timleline_description">
                      {experinces.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          {/* Education */}
          <Grid item sm={12} ms={6}>
              <CustomTimeline title='Education'icon={<SchoolIcon/>}>
                {resumeData.experinces.map((education)=>(
                  <TimelineItem>
                  <CustomTimeLineSeparator/>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                      {education.title}
                      </Typography>
                      <Typography variant='caption' className="timeline_date">
                      {education.date}
                      </Typography>
                      <Typography variant='body2' className="timleline_description">
                      {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section"></Grid>
      {/* Skills */}
      <Grid container className="section"></Grid>
{/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
