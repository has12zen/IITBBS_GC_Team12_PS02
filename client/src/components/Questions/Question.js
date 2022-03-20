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
import { CKEditor } from "ckeditor4-react";
import parser from "html-react-parser";
import Qcomment from "./Comment";
import { calculateVote } from "./utils/hadler";

import axios from "axios";

const styles = {
  grid: {
    backgroundColor: "white",
    borderRadius: 5,
    // padding: 10,
  },
};

const Qcomponent = ({ data, callBack }) => {
  const [upv, setUpv] = useState(false);
  const [dv, setDv] = useState(false);
  const [cupv, setCupv] = useState(30);
  const [cdv, setCdv] = useState(4);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [ans, setAns] = useState(false);
  const [ansText, setAnsText] = useState("");
  const [cpri, setCpri] = useState(false);
  const [apri, setApri] = useState(false);

  const saveComment = async () => {
    const resp = await axios.post("/api/posts/", {
      body: commentText,
      parentId: data._id,
      discussionId: data._id,
      isComment: true,
      isPrivate: cpri,
    });
    callBack();
  };

  const saveAnswer = async () => {
    const resp = await axios.post("/api/posts/", {
      body: ansText,
      parentId: data._id,
      discussionId: data._id,
      isComment: false,
      isPrivate: apri,
    });
    callBack();
  };

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
          paddingTop: 20,
          paddingRight: 20,
          paddingLeft: 20,
          paddingBottom: 10,
        }}
      >
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body1" style={{ marginTop: 10, marginBottom: 10 }}>
          {parser(data.body)}
        </Typography>
        <Box>
          {data.labels.map((label, key) => (
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
            paddingTop: 5,
            paddingBottom: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {!ans && (
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
            )}
          </Box>
          <Box style={{ display: "flex", alignItems: "flex-end" }}>
            <Box
              style={{ display: "flex", alignItems: "center", marginRight: 10 }}
            >
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
                <Typography variant="body1" style={{ textTransform: "none" }}>
                  {data.createdBy
                    ? `${data.createdBy.firstname} ${data.createdBy.lastname}`
                    : "Anonymous"}
                </Typography>
              </Button>
            </Box>
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
            <Typography variant="h6">Make this question private</Typography>
          </Box>
        </Box>
      )}
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          {data.comments.map((comment, key) => {
            return <Qcomment data={comment} key={key} />;
          })}
        </Grid>
      </Grid>
      {ans && (
        <Box>
          <Box style={{ marginTop: 20 }}>
            <CKEditor
              data={ansText}
              onChange={(event) => {
                setAnsText(event.editor.getData());
              }}
            />
          </Box>
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
                setApri(event.target.checked);
              }}
            />
            <Typography variant="h6">Make this question private</Typography>
          </Box>
        </Box>
      )}
      <Box style={{ marginTop: 20, marginBottom: 20 }}>
        {!comment && (
          <Box style={{ display: "flex", alignItems: "center" }}>
            {ans && (
              <Chip
                variant="outlined"
                label="Cancel"
                onClick={() => {
                  setAnsText("");
                  setAns(!ans);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor: "rgb(255,255,255)",
                  color: "rgb(0,0,255)",
                }}
              />
            )}
            <Chip
              variant="outlined"
              label={ans ? "Submit" : "Add Answer"}
              onClick={() => {
                if (ans) {
                  saveAnswer();
                }
                setAns(!ans);
              }}
              style={{
                marginRight: 5,
                backgroundColor: "rgb(255,255,255)",
                color: "rgb(0,0,255)",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Qcomponent;
