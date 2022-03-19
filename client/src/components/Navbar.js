import React from "react";
import { Outlet } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
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

      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Navbar;
