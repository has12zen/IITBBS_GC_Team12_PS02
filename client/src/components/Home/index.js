import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Box, Button, Grid, List, Typography, ListItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Discussions from "../Discussions";

const topics = ["Internship", "Placements", "Projects", "Fests"];
const Home = ({ user }) => {
  const [issort, setIsSort] = useState(false);
  const navigate = useNavigate();
  const [allDiscussions, setAllDiscussions] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        console.log(res.data.data.doc);

        setAllDiscussions(res.data.data.doc);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <Box style={{ marginTop: 20 }}>
      <Box style={{ marginBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} style={{ textAlign: "end" }}>
            <Typography variant="button" style={{ marginRight: 5 }}>
              Sort by
            </Typography>
            <Button
              variant="contained"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              onClick={() => setIsSort(!issort)}
            >
              {issort ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Box style={{ marginBottom: 10 }}>
              <Button variant="contained" onClick={() => navigate("/create")}>
                Ask Question
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box
            style={{
              ...styles.grid,
              textAlign: "center",
              position: "sticky",
              top: 84,
            }}
          >
            <Typography variant="h6">My Items</Typography>
            <List>
              <ListItem style={styles.list}>Answers</ListItem>
              <ListItem style={styles.list}>Questions</ListItem>
              <ListItem style={styles.list}>Topics</ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box style={{ padding: 0 }}>
            {allDiscussions &&
              (issort ? (
                <Discussions
                  user={user}
                  data={allDiscussions.sort((a, b) => {
                    const atime = new Date(a.createdAt);
                    const btime = new Date(b.createdAt);
                    return btime.getTime() - atime.getTime();
                  })}
                />
              ) : (
                <Discussions
                  user={user}
                  data={allDiscussions.sort((a, b) => {
                    const atime = new Date(a.createdAt);
                    const btime = new Date(b.createdAt);
                    return atime.getTime() - btime.getTime();
                  })}
                />
              ))}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box style={{ position: "sticky", top: 84 }}>
            <Box style={{ ...styles.grid, textAlign: "center" }}>
              <Typography variant="h6">Hot Topics</Typography>
              <Box>
                <List>
                  {topics.map((topic, key) => (
                    <ListItem style={styles.list} key={key}>
                      {topic}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
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
  },
};

export default Home;
