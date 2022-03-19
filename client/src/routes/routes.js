import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const userRoutes = () => [
  {
    path: "/",
    element: <Navbar />,
    children: [
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
      // {
      //   path: "home",
      //   element: <Home />,
      // },
    ],
  },
  // {
  //   path: 'login',
  //   element: <Login />
  // }
];

export default userRoutes;
