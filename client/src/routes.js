import Home from "./components/Home/Home";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import User from "./components/User";
import AskQ from "./components/AskQ";

const userRoutes = (user, setUser, setLoad) => {
  if (user)
    return [
      {
        path: "/",
        element: <Navbar />,
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "question",
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
            path: "ask-question",
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
      element: <Navbar />,
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
