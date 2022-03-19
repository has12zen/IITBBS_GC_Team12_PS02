import React from "react";
import { Outlet } from "react-router-dom";
import {
  Menu,
  MenuItem,
  InputBase,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Typography,
  Input,
  Grid,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="h4" style={{ color: "white" }}>
                Charcha
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Input placeholder="Search…" />
            </Grid>
            <Grid item xs={4}>
              <AccountCircleIcon style={{ float: "right" }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navbar;
