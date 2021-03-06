import React from "react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import ForumIcon from "@mui/icons-material/Forum";
import ShowTime from "../../misc/ShowTime";

const Ques = ({ user, data, hideCreator = false }) => {
  const labels = ["Projects", "Fest", "Intern"];
  const navigate = useNavigate();

  return (
    <Box
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        cursor: "pointer",
        boxShadow: "0px 0px 15px rgba(50,50,50,0.7)",
      }}
      onClick={() => {
        navigate(`/discussion/${data._id}`);
      }}
    >
      <Typography variant="h4">{data.title}</Typography>
      <Box>
        {data.labels.map((label, key) => (
          <Chip
            label={label}
            key={key}
            onClick={() => {}}
            style={{ marginRight: 5, fontSize: 15, padding: 5 }}
            size="small"
          />
        ))}
      </Box>
      <Box style={{ marginTop: 20, marginBottom: 20 }}>{parse(data.body)}</Box>
      <Box
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box
          style={{
            backgroundColor: "rgba(69, 69, 69)",
            padding: 3,
            color: "white",
          }}
        >
          {ShowTime(data.createdAt)}
        </Box>
        {/* <Box style={{ ...styles.bottomBox }}>
          <ForumIcon
            style={{
              marginRight: 5,
              color: "white",
            }}
          />
          <Typography variant="button">3</Typography>
        </Box> */}
        {!hideCreator && (
          <Box
            style={{
              ...styles.bottomBox,
              display: "flex",
              alignItems: "center",
            }}
            onClick={(event) => {
              event.stopPropagation();

              if (data.createdBy) navigate(`/user/${data.createdBy._id}`);
            }}
          >
            <Avatar
              src={
                data.createdBy?.img ??
                "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              }
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
              }}
            />
            <Typography variant="button" style={{ textTransform: "none" }}>
              {data.createdBy
                ? `${data.createdBy.firstname} ${data.createdBy.lastname}`
                : "Anonymous"}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  bottomBox: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
};

export default Ques;
