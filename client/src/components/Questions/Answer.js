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
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShowTime from "../../misc/ShowTime";
import parser from "html-react-parser";
import Qcomment from "./Comment";
const Answer = ({ data }) => {
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  console.log(data, "answer");
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
          <Box>
            <Button
              variant="button"
              style={{ color: "rgba(120,120,120)", padding: 0 }}
            >
              Add Comment
            </Button>
            {/* <Chip
              variant="outlined"
              label="Add comment"
              onClick={() => {}}
              style={{
                marginRight: 5,
                backgroundColor: "rgb(255,255,255)",
                color: "rgb(120,120,120)",
              }}
            /> */}
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThumbUpIcon style={{ marginRight: 3 }} />
            <Typography variant="button" style={{ marginRight: 10 }}>
              30
            </Typography>
            <ThumbDownIcon style={{ marginRight: 3 }} />
            <Typography variant="button" style={{ marginRight: 5 }}>
              1
            </Typography>
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
