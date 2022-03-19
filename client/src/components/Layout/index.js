import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import NavMenu from "./NavMenu";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState({ open: false, anchor: null });

  return (
    <Box>
      {user && (
        <AppBar style={{ position: "sticky", top: 0 }}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={4}>
                <Typography
                  variant="h4"
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Charcha
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  placeholder="Search..."
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton style={{ color: "white" }}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: { color: "white" },
                  }}
                />
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
