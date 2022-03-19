import * as React from "react";

import {
  Avatar,
  Button,
  Divider,
  Paper,
  Menu,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

import { PostAdd, Home, Person, Logout } from "@mui/icons-material";
import { GoogleLogout } from "react-google-login";

import { CLIENT_ID } from "../../constants";

const LogoutButton = () => {
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      render={(renderProps) => {
        return (
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              renderProps.onClick();
            }}
          >
            <div style={{ minWidth: "36px", display: "flex" }}>
              <Logout fontSize="small" />
            </div>
            <div>Logout</div>
          </div>
        );
      }}
      onLogoutSuccess={() => {
        window.location.reload();
      }}
    />
  );
};

const NavMenu = ({ anchor, open, handleClose }) => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%", backgroundColor: "red" }}>
      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList style={{ outline: "none" }}>
          <MenuItem>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PostAdd fontSize="small" />
            </ListItemIcon>
            <ListItemText>Start Discussion</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            {/* <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon> */}
            <ListItemText>
              <LogoutButton />
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Paper>
  );
};

export default NavMenu;
