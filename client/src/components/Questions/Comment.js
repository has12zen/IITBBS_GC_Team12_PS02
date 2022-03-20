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
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShowTime from "../../misc/ShowTime";
import parser from "html-react-parser";
const Qcomment = ({ data }) => {
  const [upv, setUpv] = useState(false);
  const [dv, setDv] = useState(false);
  const [cupv, setCupv] = useState(0);
  const [cdv, setCdv] = useState(0);
  console.log(data, "comments");

  return (
    <Box style={{ ...styles.grid }}>
      <Button style={{ paddingLeft: 0 }}>
        <Avatar
          alt="user"
          src={
            data?.createdBy?.img ??
            "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          }
          style={{
            marginRight: 10,
            backgroundColor: "rgb(255,255,255)",
            color: "rgb(0,0,255)",
          }}
        />
        <Typography variant="body1" style={{ textTransform: "none" }}>
          {data?.createdBy
            ? `${data.createdBy.firstname} ${data.createdBy.lastname}`
            : "Anonymous"}
        </Typography>
      </Button>
      <Typography variant="body2" style={{ marginBottom: 10 }}>
        {data?.body}
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
          <Typography variant="caption" style={{ textTransform: "none" }}>
            {ShowTime(data?.createdAt)}
          </Typography>
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
  );
};
const styles = {
  grid: {
    // backgroundColor: "rgba(0,0,0,0.1)",
    // boxShadow: "0px 0px 15px 5px rgba(100,100,100,0.1)",
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    padding: 10,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0,
  },
};
export default Qcomment;
