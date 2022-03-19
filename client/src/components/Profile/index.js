import { Grid } from "@mui/material";

const Profile = ({ user, setUser }) => {
  console.log({ user });

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <div>
            <img alt="profile_image" src={user.img} />
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          {/* <UserDiscussions user={user} data={null} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
