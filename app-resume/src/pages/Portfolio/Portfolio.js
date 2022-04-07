import {
  Grid,
  Tabs,
  Tab,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useState } from "react";
import React from "react";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setprojectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/*Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text"> Portfolio</h6>
      </Grid>
      {/*Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          // ekrandan girileni new value ya atiyorsn
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          {/* all is default */}
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {/* creating set and putting items in it */}
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue ===  tag 
                    ? "customTabs_item active"
                    : "customTabs_item "
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/*Projects*/}

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {/* ya hepsi yada tag secili oldugunda gosteriorz */}
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  {/* time out is how quick they should popin */}
                  <Grow in timeout={1000}>
                    <Card
                      className="CustomCard"
                      onClick={() => setprojectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      {/*Dialog */}
      <Dialog
        open={projectDialog}
        onClose={() => setprojectDialog(false)}
        className="projectDialog"
      >
        <DialogTitle onClose={() => setprojectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>

        <img src={projectDialog.image} alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>

        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
