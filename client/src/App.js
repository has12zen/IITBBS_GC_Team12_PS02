import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import "./App.css";
import setRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  const [load, setLoad] = useState(true);

  const [user, setUser] = useState(null);
  const routes = useRoutes(
    setRoutes(
      user,
      (data) => setUser(data),
      (val) => setLoad(val)
    )
  );

  useEffect(() => {
    console.log({ load });
  }, [load]);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {load && (
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              zIndex: 10,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
        {routes}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
