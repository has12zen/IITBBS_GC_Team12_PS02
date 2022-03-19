import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CircularProgress } from "@mui/material";
import Profile from "./Profile";

const User = ({ user }) => {
  const navigate = useNavigate();
  const reqId = window.location.pathname.split("/")[2];
  if (reqId === user._id) navigate("/profile");

  const [reqUser, setReqUser] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/user/${reqId}`)
      .then((res) => {
        setReqUser(res.data.data.doc);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  }, []);

  if (reqUser) return <Profile user={reqUser} />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default User;
