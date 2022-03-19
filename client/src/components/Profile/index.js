import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Discussions from "../Discussions";

const Profile = ({ user, setUser }) => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log({ user });

  useEffect(() => {
    axios
      .get("/api/posts/me")
      .then((res) => {
        console.log(res.data);
        setDiscussions(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);

        setLoading(false);
      });
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <div>
            <img alt="profile_image" src={user.img} />
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          <Discussions user={user} data={discussions} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
