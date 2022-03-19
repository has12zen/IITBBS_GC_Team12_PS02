import React from "react";
import jf from "../assets/images/1.jpg";
import { Box, Typography, Chip, Avatar, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShowTime from "../misc/ShowTime";

const Qans = () => {
  return (
    <Box style={{ ...styles.grid, marginBottom: 5 }}>
      <Button style={{ paddingLeft: 0 }}>
        <Avatar
          alt="user"
          src={"https://i.pravatar.cc/300"}
          style={{
            marginRight: 10,
            backgroundColor: "rgb(255,255,255)",
            color: "rgb(0,0,255)",
          }}
        />
        <Typography variant="body1" style={{ textTransform: "none" }}>
          User name
        </Typography>
        {/* <Chip
          avatar={<Avatar alt="Natacha" src={jf} />}
          label="Panga"
          onClick={() => {}}
          style={{ marginRight: 5, margin: 0 }}
        /> */}
      </Button>
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
              </Box>
            </Box>
          </div>
        </Typography>
      </Box>
    </Box>
  );
};
const Qcomment = () => {
  return (
    <Box style={{ ...styles.grid, marginBottom: 5 }}>
      <Button style={{ paddingLeft: 0 }}>
        <Avatar
          alt="user"
          src={"https://i.pravatar.cc/300"}
          style={{
            marginRight: 10,
            backgroundColor: "rgb(255,255,255)",
            color: "rgb(0,0,255)",
          }}
        />
        <Typography variant="body1" style={{ textTransform: "none" }}>
          User name
        </Typography>
        {/* <Chip
          avatar={<Avatar alt="Natacha" src={jf} />}
          label="Panga"
          onClick={() => {}}
          style={{ marginRight: 5, margin: 0 }}
        /> */}
      </Button>
      <Typography variant="body2" style={{ marginBottom: 10 }}>
        For VsCode users , just type ctrl +shift +G and then click on three dot
        ,ie , more options and then click on undo Last Commit
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
          <Typography variant="button">{ShowTime(new Date())}</Typography>
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
