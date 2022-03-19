import React from "react";
import jf from "../assets/images/1.jpg";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import Qcomment from "./Comments";
import { useSearchParams, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Question = () => {
  const [search] = useSearchParams();
  const { id } = useParams();
  console.log(id, "useParams");
  const people = ["Harshit", "Sai Krishna", "Anuj", "Rohan"];
  const labels = ["git", "version-control", "git-commit", "undo"];
  return (
    <Box style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Box style={{ ...styles.grid, textAlign: "left", marginBottom: 10 }}>
            <Typography variant="h4">
              How do I undo the most recent local commits in Git?
            </Typography>
            <Typography variant="body1">
              I accidentally committed the wrong files to Git but didn't push
              the commit to the server yet. How can I undo those commits from
              the local repository? The only way seems to be to copy the edits
              in some kind of GUI text editor, then wipe the whole local clone,
              then re-clone the repository, then re-applying the edits. However,
              This can cause data loss. It's very hard to do this when only an
              accidental git commit was run. Is there a better way?
            </Typography>
            <Box style={{ textAlign: "left", padding: 5 }}>
              {labels.map((label, key) => (
                <Chip
                  label={label}
                  key={key}
                  onClick={() => {}}
                  style={{ marginRight: 5 }}
                />
              ))}
              <Typography style={{ textAlign: "left", padding: 5 }}>
                Posted by: Kartikeya
              </Typography>
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Chip
                variant="outlined"
                label="Add comment"
                onClick={() => {}}
                style={{
                  marginRight: 5,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Qcomment />
              <Qcomment />
              <Qcomment />
            </Grid>
            <Grid item xs={12}>
              <Chip
                variant="outlined"
                label="Add answer"
                onClick={() => {}}
                style={{
                  marginRight: 5,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Qcomment />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Box style={{ ...styles.grid, textAlign: "center" }}>
            <Typography variant="h6">People</Typography>
            <List>
              {people.map((person, key) => (
                <ListItem style={styles.list} key={key}>
                  <Chip
                    avatar={<Avatar alt="Natacha" src={jf} />}
                    label={person}
                    key={key}
                    onClick={() => {}}
                    style={{ marginRight: 5 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <div>
    //   <h1>Question</h1>
    // </div>
  );
};
const styles = {
  grid: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    padding: 10,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0,
  },
};
export default Question;
