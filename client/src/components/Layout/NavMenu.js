import * as React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

import { CLIENT_ID } from "../../constants";

const LogoutButton = ({ handleClick, setLoad }) => {
  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      render={(renderProps) => {
        return (
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              setLoad(true);
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
      onLogoutSuccess={handleClick}
    />
  );
};

const NavMenu = ({ anchor, open, handleClose, setLoad }) => {
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("/api/auth/logout")
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };

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
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuList style={{ outline: "none" }}>
          <MenuItem
            onClick={() => {
              navigate("/home");
              handleClose();
            }}
          >
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/profile");
              handleClose();
            }}
          >
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/create");
              handleClose();
            }}
          >
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
              <LogoutButton setLoad={setLoad} handleClick={logout} />
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Paper>
  );
};

export default NavMenu;
