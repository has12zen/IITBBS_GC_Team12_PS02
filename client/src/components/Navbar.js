import React from "react";
import {
  Menu,
  MenuItem,
  InputBase,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Menu>
            <MenuItem>
              <InputBase />
            </MenuItem>
            <MenuItem>
              <IconButton>
                <img src="https://img.icons8.com/ios/50/000000/search.png" />
              </IconButton>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
