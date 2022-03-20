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
  TextField,
  Checkbox,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShowTime from "../../misc/ShowTime";
import parser from "html-react-parser";
import Qcomment from "./Comment";
import axios from "axios";

const Answer = ({ data, callBack }) => {
  const [upv, setUpv] = useState(false);
  const [dv, setDv] = useState(false);
  const [cupv, setCupv] = useState(data.votes.length);
  const [cdv, setCdv] = useState(0);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [cpri, setCpri] = useState(false);

  const saveComment = async () => {
    const resp = await axios.post("/api/posts/", {
      body: commentText,
      parentId: data._id,
      discussionId: data.parentId,
      isComment: true,
      isPrivate: cpri,
    });
    setCommentText("");
    callBack();
  };

  console.log(data, "Answer");

  return (
    <Box>
      <Box style={{ ...styles.grid, marginBottom: 5 }}>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button style={{ paddingLeft: 0, marginBottom: 10 }}>
            <Avatar
              alt="user"
              src={
                data.createdBy?.img ??
                "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              }
              style={{
                marginRight: 10,
                backgroundColor: "rgb(255,255,255)",
                color: "rgb(0,0,255)",
              }}
            />
            <Typography
              variant="body1"
              style={{ textTransform: "none", color: "rgb(90,90,90)" }}
            >
              {data.createdBy
                ? `${data.createdBy.firstname} ${data.createdBy.lastname}`
                : "Anonymous"}
            </Typography>
          </Button>
          <Box>
            <Typography variant="caption" style={{ textTransform: "none" }}>
              {ShowTime(data.createdAt)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" style={{ marginBottom: 10 }}>
          {parser(data.body)}
        </Typography>
        <Box
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            {comment && (
              <Chip
                variant="outlined"
                label="Cancel"
                onClick={() => {
                  setCommentText("");
                  setComment(!comment);
                }}
                style={{
                  marginTop: 10,
                  marginRight: 5,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
            )}
            <Chip
              variant="outlined"
              label={comment ? "Submit" : "Add Comment"}
              onClick={() => {
                if (comment) {
                  saveComment();
                }
                setComment(!comment);
              }}
              style={{
                marginTop: 10,
                backgroundColor: "rgb(255,255,255)",
                color: "rgb(0,0,255)",
              }}
            />
          </Box>
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
        </Box>
      </Box>
      {comment && (
        <Box>
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
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Checkbox
              onChange={(event) => {
                setCpri(event.target.checked);
              }}
            />
            <Typography variant="h6">Anonymize</Typography>
          </Box>
        </Box>
      )}
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          {data?.comments?.map((comment, key) => (
            <Qcomment key={key} data={comment} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
const styles = {
  grid: {
    // backgroundColor: "rgba(0,0,0,0.1)",
    boxShadow: "0px 0px 15px 5px rgba(100,100,100,0.1)",
    // borderRadius: 10,
    padding: 10,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0,
  },
};
export default Answer;
