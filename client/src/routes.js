import Home from "./components/Home";
import LandingPage from "./components/Landing";
import Layout from "./components/Layout";
import Question from "./components/Question";
import User from "./components/User";
import AskQ from "./components/AskQ";

const userRoutes = (user, setUser, setLoad) => {
  if (user)
    return [
      {
        path: "/",
        element: <Layout user={user} setUser={setUser} />,
        children: [
          {
            path: "user",
            element: <User user={user} setUser={setUser} />,
          },
          {
            path: "discussion/:id",
            element: <Question />,
          },
          {
            path: "/",
            element: (
              <LandingPage user={user} setUser={setUser} setLoad={setLoad} />
            ),
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
            element: <AskQ />,
          },
          {
            path: "/home",
            element: <Home />,
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
