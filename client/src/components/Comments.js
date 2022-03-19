import React from "react";
import jf from "../assets/images/1.jpg";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { sizing } from "@mui/system";
const Qans = () => {
  return (
    <Box style={{ ...styles.grid, marginBottom: 5 }}>
      <Typography variant="body1" style={{ marginBottom: 10 }}>
        If you are planning to undo a local commit entirely, whatever you change
        you did on the commit, and if you don't worry anything about that, just
        do the following command. git reset --hard HEAD^1 (This command will
        ignore your entire commit and your changes will be lost completely from
        your local working tree). If you want to undo your commit, but you want
        your changes in the staging area (before commit just like after git add)
        then do the following command. git reset --soft HEAD^1 Now your
        committed files come into the staging area. Suppose if you want to
        upstage the files, because you need to edit some wrong content, then do
        the following command git reset HEAD Now committed files to come from
        the staged area into the unstaged area. Now files are ready to edit, so
        whatever you change, you want to go edit and added it and make a
        fresh/new commit.
      </Typography>
      <Box style={{ textAlign: "left" }}>
        <Typography>12:00 AM</Typography>
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
      </Box>
      <Box style={{ textAlign: "right" }}>
        <Typography>
          <div>
            <ThumbUpIcon />
          </div>
          1
          <div>
            <ThumbDownIcon />
          </div>
          1
        </Typography>
        <Chip
          avatar={<Avatar alt="Natacha" src={jf} />}
          label="Panga"
          onClick={() => {}}
          style={{ marginRight: 5 }}
        />
      </Box>
    </Box>
  );
};
const Qcomment = () => {
  return (
    <Box style={{ ...styles.grid, marginBottom: 5 }}>
      <Typography variant="body2" style={{ marginBottom: 10 }}>
        For VsCode users , just type ctrl +shift +G and then click on three dot
        ,ie , more options and then click on undo Last Commit
      </Typography>
      <Box>
        <Typography>
          <div>
            <Box
              style={{
                margin: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box style={{ textAlign: "left" }}>
                <Chip
                  variant="outlined"
                  label="Add comment"
                  onClick={() => {}}
                  style={{
                    marginRight: 5,
                    marginLeftt: 0,
                    backgroundColor: "rgb(255,255,255)",
                    color: "rgb(0,0,255)",
                  }}
                />
                <Typography
                  variant="body2"
                  style={{ textAlign: "left", fontSize: 0.7 }}
                >
                  12:00 AM
                </Typography>
              </Box>
              <Box style={{ textAlign: "right" }}>
                <ThumbUpIcon /> 1
                <ThumbDownIcon /> 1
                <Chip
                  avatar={<Avatar alt="Natacha" src={jf} />}
                  label="Panga"
                  onClick={() => {}}
                  style={{ marginRight: 5, margin: 0, display: "flex" }}
                />
              </Box>
            </Box>
          </div>
        </Typography>
      </Box>
    </Box>
  );
};
const styles = {
  grid: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: 10,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0,
  },
};
export default Qcomment;
