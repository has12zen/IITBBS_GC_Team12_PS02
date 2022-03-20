import React from "react";
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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShowTime from "../../misc/ShowTime";
import parser from "html-react-parser";
import Comment from "./Comment";
const Qcomment = (data) => {
  return (
    <Box style={{ ...styles.grid, marginBottom: 5 }}>
      <Button style={{ paddingLeft: 0 }}>
        <Avatar
          alt="user"
          src={data.img}
          style={{
            marginRight: 10,
            backgroundColor: "rgb(255,255,255)",
            color: "rgb(0,0,255)",
          }}
        />
        <Typography variant="body1" style={{ textTransform: "none" }}>
          {data.firstname}
        </Typography>
        <Chip
          avatar={<Avatar alt="Natacha" src={data.img} />}
          label="Panga"
          onClick={() => {}}
          style={{ marginRight: 5, margin: 0 }}
        />
      </Button>
      <Typography variant="body2" style={{ marginBottom: 10 }}>
        {parser(data.body)}
      </Typography>
      <Box
        style={{
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography variant="button">{ShowTime(data.createdAt)}</Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <ThumbUpIcon style={{ marginRight: 3 }} />
          <Typography variant="button" style={{ marginRight: 10 }}>
            {data.upvotes}
          </Typography>

          <ThumbDownIcon style={{ marginRight: 3 }} />
          <Typography variant="button" style={{ marginRight: 5 }}>
            {data.downvotes}
          </Typography>
        </Box>
      </Box>
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
export default Qcomment;
