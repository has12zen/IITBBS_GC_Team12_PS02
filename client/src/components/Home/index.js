import React from "react";
import { Box, Button, Grid, List, Typography, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ques from "./Ques";

const Home = () => {
  const topics = ["Internship", "Placements", "Projects", "Fests"];
  const navigate = useNavigate();
  return (
    <Box style={{ marginTop: 20 }}>
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
            <Ques />
            <Ques />
            <Ques />
            <Ques />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box style={{ position: "sticky", top: 84 }}>
            <Box style={{ marginBottom: 10 }}>
              <Button variant="contained" onClick={() => navigate("/create")}>
                Ask Question
              </Button>
            </Box>
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