import React from "react";
import { Navigate } from "react-router-dom";

import Home from "./components/Home";
import LandingPage from "./components/Landing";
import Layout from "./components/Layout";
import Questions from "./components/Questions";
import User from "./components/User";
import AskQ from "./components/AskQ";
import Profile from "./components/Profile";

const userRoutes = (user, setUser, setLoad) => {
  if (user)
    return [
      {
        path: "/",
        element: <Layout user={user} setUser={setUser} setLoad={setLoad} />,
        children: [
          {
            path: "user",
            element: <User user={user} setUser={setUser} />,
          },
          {
            path: "/",
            element: (
              <LandingPage user={user} setUser={setUser} setLoad={setLoad} />
            ),
          },
          {
            path: "/home",
            element: <Home user={user} />,
          },
          {
            path: "/profile",
            element: <Profile user={user} dispUser={user} setUser={setUser} />,
          },
          {
            path: "/user/:id",
            element: <User user={user} setUser={setUser} />,
          },
          {
            path: "/discussion/:id",
            element: <Questions />,
          },
          // {
          //   path:'user',
          //   element: <UserProfile />
          // },
          // {
          //   path:'question',
          //   element: <Question />
          // },
          {
            path: "create",
            element: <AskQ user={user} />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "*",
            element: <Navigate to="/home" replace />,
          },
        ],
      },
    ];

  return [
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: (
            <LandingPage user={user} setUser={setUser} setLoad={setLoad} />
          ),
        },
        {
          path: "*",
          element: (
            <LandingPage user={user} setUser={setUser} setLoad={setLoad} />
          ),
        },
        {
          path: "/*",
          element: (
            <LandingPage user={user} setUser={setUser} setLoad={setLoad} />
          ),
        },
      ],
    },
  ];
};

export default userRoutes;
