import React from "react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Ques = ({ user, data }) => {
  const labels = ["Projects", "Fest", "Intern"];
  console.log(data);
  return (
    <Box
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
      }}
    >
      <Typography variant="h4">{data.title}</Typography>
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
      <Box style={{ marginTop: 20, marginBottom: 20 }}>{data.body}</Box>
      <Box
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box style={{ ...styles.bottomBox }}>
          <ForumIcon
            style={{
              marginRight: 5,
              color: "white",
            }}
          />
          <Typography variant="button">3</Typography>
        </Box>
        <Box style={{ ...styles.bottomBox, display: "flex" }}>
          <Avatar
            src={"https://i.pravatar.cc/300"}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
          <Typography variant="button">
            {data.createdBy.firstname} {data.createdBy.lastname}
          </Typography>
        </Box>
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
