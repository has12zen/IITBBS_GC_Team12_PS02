import Home from "../components/Home";
import Navbar from "../components/Navbar";
import User from "../components/User";
import Question from "../components/Question";
// import Login from "../components/Login";

const userRoutes = () => [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path:'user',
        element: <User />
      },
      {
        path:'question',
        element: <Question />
      },
      // {
      //   path:'ask-question',
      //   element: <AskQuestion />
      // },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: 'login',
  //   element: <Login />
  // }
];

export default userRoutes;
