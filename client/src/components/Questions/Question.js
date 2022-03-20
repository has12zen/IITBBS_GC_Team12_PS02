import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Chip,
  Avatar,
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import parser from "html-react-parser";
//import comment here
import Qcomment from "./Comment";
import { calculateVote } from "./utils/hadler";

const styles = {
  grid: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
};

const Qcomponent = ({ data }) => {
  const [upv, setUpv] = useState(false);
  const [dv, setDv] = useState(false);
  const [cupv, setCupv] = useState(30);
  const [cdv, setCdv] = useState(4);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [ans, setAns] = useState(false);
  const [ansText, setAnsText] = useState("");
  console.log(data);

  const labels = ["git", "version-control", "git-commit", "undo"];

  return (
    <Box style={{}}>
      <Box
        style={{
          ...styles.grid,
          textAlign: "left",
          paddingBottom: 0,
          boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.5)",
          backgroundColor: "rgba(200,200,200,0.3)",
        }}
      >
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body1" style={{ marginTop: 10, marginBottom: 10 }}>
          {parser(data.body)}
        </Typography>
        <Box>
          {labels.map((label, key) => (
            <Chip
              label={label}
              key={key}
              onClick={() => {}}
              style={{ marginRight: 5 }}
            />
          ))}
        </Box>
        <Box
          style={{
            padding: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              icon={<ThumbUpOutlinedIcon />}
              checkedIcon={<ThumbUpIcon />}
              style={{ marginRight: 3, cursor: "pointer" }}
              onClick={() => {
                if (upv) {
                  setUpv(false);
                  setCupv(cupv - 1);
                } else {
                  setUpv(true);
                  setCupv(cupv + 1);
                }
              }}
              disabled={dv}
            />
            <Typography variant="button" style={{ marginRight: 10 }}>
              {cupv}
            </Typography>
            <Checkbox
              icon={<ThumbDownOutlinedIcon />}
              checkedIcon={<ThumbDownIcon />}
              style={{ marginRight: 3, cursor: "pointer" }}
              onClick={() => {
                if (dv) {
                  setDv(false);
                  setCdv(cdv - 1);
                } else {
                  setDv(true);
                  setCdv(cdv + 1);
                }
              }}
              disabled={upv}
            />
            <Typography variant="button" style={{ marginRight: 5 }}>
              {cdv}
            </Typography>
          </Box>
          <Box>
            <Button style={{ paddingLeft: 0 }}>
              <Avatar
                alt="user"
                src={data.createdBy.img}
                style={{
                  marginRight: 10,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
              <Typography variant="body1" style={{ textTransform: "none" }}>
                {data.createdBy.firstname}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      {comment && (
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          variant="outlined"
          style={{
            width: "100%",
            marginTop: 20,
            borderRadius: 5,
            border: "1px solid rgba(0,0,0,0.3)",
          }}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      )}
      <Grid
        container
        style={
          {
            // borderTopWidth: 1,
            // borderTopStyle: "solid",
            // borderColor: "black",
          }
        }
      >
        <Grid item xs={2}>
          <Chip
            variant="outlined"
            label={comment ? "Submit" : "Add Comment"}
            onClick={() => {
              setComment(!comment);
            }}
            style={{
              margin: 10,
              backgroundColor: "rgb(255,255,255)",
              color: "rgb(0,0,255)",
            }}
          />
        </Grid>
        <Grid item xs={10}>
          {data.comments.map((comment, key) => (
            <Qcomment comment={comment} key={key} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Qcomponent;
