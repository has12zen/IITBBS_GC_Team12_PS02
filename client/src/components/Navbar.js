import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Grid,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar style={{ position: "sticky", height: 64, top: 0 }}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={4} style={{ cursor: "pointer" }}>
              <Typography
                variant="h4"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Charcha
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Input placeholder="Search…" />
            </Grid>
            <Grid item xs={4}>
              <AccountCircleIcon
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => navigate("/user")}
              />
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
