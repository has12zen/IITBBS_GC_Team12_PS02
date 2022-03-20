import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CircularProgress } from "@mui/material";
import Profile from "./Profile";

const User = ({ user }) => {
  const navigate = useNavigate();
  const reqId = window.location.pathname.split("/")[2];
  if (reqId === user._id) navigate("/profile", { replace: true });

  const [reqUser, setReqUser] = useState(null);

  const getUser = () => {
    axios
      .get(`/api/user/${reqId}`)
      .then((res) => {
        setReqUser(res.data.data.doc);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (reqUser)
    return <Profile user={user} dispUser={reqUser} refreshUser={getUser} />;

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
