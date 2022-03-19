import Login from "./Login";
import React from "react";

const Home = ({ user, setUser, setLoad }) => {
  return (
    <div style={{ position: "absolute" }}>
      <h1>Login</h1>

      <Login user={user} setUser={setUser} setLoad={setLoad} />
    </div>
  );
};

export default Home;
