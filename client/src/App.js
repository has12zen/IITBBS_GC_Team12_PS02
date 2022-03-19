import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";

import userRoutes from "./routes/routes";

const App = () => {
  const routes = useRoutes(userRoutes());
  return <div>{routes}</div>;
};

export default App;
