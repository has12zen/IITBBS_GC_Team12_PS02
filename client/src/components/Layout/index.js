import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import {
  AppBar,
  Avatar,
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

import NavMenu from "./NavMenu";

const Navbar = ({ user, setUser }) => {
  const [menuState, setMenuState] = useState({ open: false, anchor: null });

  return (
    <Box>
      {user && (
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
                {user && (
                  <Avatar
                    style={{ float: "right", cursor: "pointer" }}
                    src={user.img}
                    onClick={(event) => {
                      setMenuState({
                        anchor: event.currentTarget,
                        open: !menuState.open,
                      });
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}

      <Container>
        <Outlet />
      </Container>

      {user && (
        <NavMenu
          anchor={menuState.anchor}
          open={menuState.open}
          handleClose={() => {
            setMenuState({ anchor: null, open: false });
          }}
        />
      )}
    </Box>
  );
};

export default Navbar;
