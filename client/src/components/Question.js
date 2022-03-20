import React, { useState } from "react";
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
  const [body, setBody] = useState("");
  const [search] = useSearchParams();
  const { id } = useParams();
  // console.log(id, "useParams");
  const getPosts = async () => {
    const data = await axios.get(`/api/posts/${id}`);
    console.log(data, "data use in query");
    return { ...data.data.data.discussion };
  };
  const createAnswer = async () => {};
  const { data, isError, isLoading, isSuccess } = useQuery(
    "discussion",
    getPosts
  );
  const faces = [];
  const pushPeopleFaces = (data) => {
    faces.push({
      name: data.createdBy.firstname,
      image: data.createdBy.img,
    });
    data.subPosts.forEach((subPost) => {
      faces.push({
        name: subPost.createdBy.firstname,
        image: subPost.createdBy.img,
      });
    });
  };
  if (isSuccess) {
    console.log(data, "data use in query");
    pushPeopleFaces(data);
  }

  const people = ["Harshit", "Sai Krishna", "Anuj", "Rohan"];
  const labels = ["git", "version-control", "git-commit", "undo"];
  return (
    <Box style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Box
              style={{ ...styles.grid, textAlign: "left", marginBottom: 10 }}
            >
              <Typography variant="h4">{data.title}</Typography>
              <Typography variant="body1">{data.body}</Typography>
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
                  Posted by: {data.createdBy.firstname}
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
                {data.subPosts.map((subPost, key) => {
                  <Qcomment key={key} subPost={subPost} />;
                })}
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
                {faces.map((person, key) => (
                  <ListItem style={styles.list} key={key}>
                    <Chip
                      avatar={<Avatar alt="Natacha" src={person.image} />}
                      label={person.name}
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
      )}
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
