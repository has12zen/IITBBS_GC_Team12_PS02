import React from "react";
import jf from "../images/1.jpg";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import { sizing } from "@mui/system";

const Qcomment = () => {
  return (
    <Box style={{ ...styles.grid, textAlign: "right", marginBottom: 5 }}>
      <Typography variant="body2" style={{ marginBottom: 10 }}>
        For VsCode users , just type ctrl +shift +G and then click on three dot
        ,ie , more options and then click on undo Last Commit
      </Typography>
      <Chip
        avatar={<Avatar alt="Natacha" src={jf} />}
        label="Panga"
        onClick={() => {}}
        style={{ marginRight: 5, textAlign: "right" }}
      />
    </Box>
  );
};
const styles = {
  grid: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: 10
  },
  list: {
    justifyContent: "center",
    paddingBottom: 0
  }
};
export default Qcomment;