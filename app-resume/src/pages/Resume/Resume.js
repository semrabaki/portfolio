import { Grid, Icon, Paper, Typography } from "@mui/material";
import React from "react";
import CustomTimeline from "../../components/Timeline/Timeline";
import MyTimeLine, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import "./resume.css";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";

const Resume = () => {
  return (
    <>
      {/*About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text"> About Me</h6>
        </Grid>

        <Grid item>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/*Education and experience */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text"> Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resumeTimeLine">
            {/* Experiences*/}
            <Grid item xs={12} sm={12} md={6}>
              <MyTimeLine title="Work Experience" icon={<WorkHistoryIcon />}>
                {resumeData.experinces.map((experience) => (
                  <TimelineItem key={experience.id}>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>

                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </MyTimeLine>
            </Grid>

            {/* Education*/}
            <Grid item xs={12} sm={12} md={6}>
              <MyTimeLine title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem key={education.id}>
                    <CustomTimeLineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>

                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </MyTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text"> My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid />
      </Grid>
      {/*Skill*/}
      <Grid
        container
        justify="space-between"
        className="section graybg pb_45 p_50 "
      >
        <Grid item xs={12}>
          <Grid container justify="space-between " spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3} key={skill.id}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>

                  {skill.description.map((element) => (
                    <Typography
                      key={element.id}
                      variant="body2"
                      className="skill_description"
                    >
                      <TimelineDot
                        variant={"outline"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
