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
} from "@mui/material";
import parser from "html-react-parser";
//import comment here
import Comment from "./Comment";

const styles = {
  grid: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    padding: 10,
  },
};

const Qcomponent = ({ data }) => {
  console.log(data);

  return (
    <Box style={{ ...styles.grid, textAlign: "left", marginBottom: 10 }}>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="body1">{parser(data.body)}</Typography>
      <Box style={{ textAlign: "left", padding: 5 }}>
        <Typography style={{ textAlign: "left", padding: 5 }}>
          Posted by: {data.createdBy.firstname}
        </Typography>
      </Box>
    </Box>
  );
};

export default Qcomponent;
