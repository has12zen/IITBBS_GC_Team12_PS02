import Home from "./components/Home";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import User from "./components/User";

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
          // {
          //   path:'ask-question',
          //   element: <AskQuestion />
          // },
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
